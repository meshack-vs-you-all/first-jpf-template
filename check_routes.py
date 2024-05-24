import os
import re

def extract_routes_from_backend():
    backend_routes = {
        'audits': ['POST create_audit', 'GET read_audit', 'GET read_audits', 'DELETE delete_audit'],
        'user_queries': ['POST create_user_query', 'GET read_user_query', 'GET read_user_queries', 'PUT update_user_query', 'DELETE delete_user_query'],
        'equipment': ['POST create_equipment', 'GET read_equipment', 'GET read_equipments', 'PUT update_equipment', 'DELETE delete_equipment'],
        'users': ['POST create_user', 'GET read_user', 'GET read_users', 'PUT update_user', 'DELETE delete_user', 'POST login_user', 'GET read_current_user'],
        'feedback': ['POST create_feedback', 'GET read_feedback', 'GET read_feedbacks', 'PUT update_feedback', 'DELETE delete_feedback'],
        'reviews': ['POST create_review', 'GET read_review', 'GET read_reviews', 'PUT update_review', 'DELETE delete_review'],
        'interactions': ['POST create_interaction', 'GET read_interaction', 'GET read_interactions', 'PUT update_interaction', 'DELETE delete_interaction'],
        'rooms': ['POST create_room', 'GET read_room', 'GET read_rooms', 'PUT update_room', 'DELETE delete_room'],
        'booking_details': ['POST create_booking_detail', 'GET read_booking_detail', 'GET read_booking_details', 'PUT update_booking_detail', 'DELETE delete_booking_detail'],
        'bookings': ['POST create_booking', 'GET read_booking', 'GET read_bookings'],
        'payments': ['POST create_payment', 'GET read_payment', 'GET read_payments', 'PUT update_payment', 'DELETE delete_payment'],
        'trainers': ['POST create_trainer', 'GET read_trainer', 'GET read_trainers', 'PUT update_trainer', 'DELETE delete_trainer'],
        'services': ['POST create_service', 'GET read_service', 'GET read_services', 'PUT update_service', 'DELETE delete_service']
    }
    return backend_routes

def find_frontend_routes(directory):
    route_pattern = re.compile(r'(fetch|axios|get|post|put|delete)\(["\'](/api/[^"\']+)["\']')
    frontend_routes = {}

    for root, _, files in os.walk(directory):
        for file in files:
            if file.endswith('.js') or file.endswith('.jsx'):
                with open(os.path.join(root, file), 'r') as f:
                    content = f.read()
                    matches = route_pattern.findall(content)
                    for method, route in matches:
                        if route not in frontend_routes:
                            frontend_routes[route] = []
                        frontend_routes[route].append({
                            'method': method.upper(),
                            'file': os.path.join(root, file)
                        })
    
    return frontend_routes

def compare_routes(backend_routes, frontend_routes):
    comparison_results = []

    for resource, routes in backend_routes.items():
        for route in routes:
            method, action = route.split(' ', 1)
            if len(action.split(' ')) > 1:
                endpoint = f"/api/{resource}/{action.split(' ')[1].lower()}"
            else:
                endpoint = f"/api/{resource}"
            
            if endpoint in frontend_routes:
                found = any(f['method'] == method for f in frontend_routes[endpoint])
                file_paths = [f['file'] for f in frontend_routes[endpoint] if f['method'] == method]
                if found:
                    comparison_results.append({
                        'resource': resource,
                        'route': route,
                        'status': 'Present',
                        'files': file_paths
                    })
                else:
                    comparison_results.append({
                        'resource': resource,
                        'route': route,
                        'status': 'Method Missing',
                        'recommended_path': endpoint
                    })
            else:
                comparison_results.append({
                    'resource': resource,
                    'route': route,
                    'status': 'Endpoint Missing',
                    'recommended_path': endpoint
                })
    
    return comparison_results

def save_comparison_results(results, output_file):
    with open(output_file, 'w') as f:
        for result in results:
            if result['status'] == 'Present':
                f.write(f"Route {result['route']} for resource {result['resource']} is present in the frontend.\n")
                f.write(f"Found in files: {', '.join(result['files'])}\n")
            elif result['status'] == 'Method Missing':
                f.write(f"Route {result['route']} for resource {result['resource']} is missing the method in the frontend.\n")
                f.write(f"Recommended path: {result['recommended_path']}\n")
            elif result['status'] == 'Endpoint Missing':
                f.write(f"Route {result['route']} for resource {result['resource']} is missing in the frontend.\n")
                f.write(f"Recommended path: {result['recommended_path']}\n")
            f.write("\n")

if __name__ == "__main__":
    # Path to the frontend directory after extracting
    frontend_directory = './'  # Update this path as needed

    backend_routes = extract_routes_from_backend()
    frontend_routes = find_frontend_routes(frontend_directory)
    comparison_results = compare_routes(backend_routes, frontend_routes)

    # Save the results to a file
    output_file = './route_comparison_results.txt'
    save_comparison_results(comparison_results, output_file)

    print(f"Comparison results have been saved to {output_file}")
