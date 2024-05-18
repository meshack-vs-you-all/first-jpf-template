// src/components/Admin/ServiceManagement.jsx
import { useState, useEffect } from 'react';
import axios from 'axios';

const ServiceManagement = () => {
    const [services, setServices] = useState([]);
    const [newService, setNewService] = useState({ name: '', description: '', price: '' });

    useEffect(() => {
        const fetchServices = async () => {
            try {
                const response = await axios.get('http://localhost:8000/services', {
                    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
                });
                setServices(response.data);
            } catch (error) {
                console.error('Error fetching services:', error);
            }
        };
        fetchServices();
    }, []);

    const handleAddService = async () => {
        try {
            const response = await axios.post('http://localhost:8000/services', newService, {
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
            });
            setServices([...services, response.data]);
            setNewService({ name: '', description: '', price: '' });
        } catch (error) {
            console.error('Error adding service:', error);
        }
    };

    return (
        <div className="max-w-3xl mx-auto p-4 bg-white shadow-md rounded-lg">
            <h1 className="text-2xl font-bold mb-4">Service Management</h1>
            <div className="space-y-4 mb-4">
                <input
                    type="text"
                    name="name"
                    placeholder="Service Name"
                    value={newService.name}
                    onChange={(e) => setNewService({ ...newService, name: e.target.value })}
                    className="w-full p-2 border border-gray-300 rounded"
                />
                <input
                    type="text"
                    name="description"
                    placeholder="Service Description"
                    value={newService.description}
                    onChange={(e) => setNewService({ ...newService, description: e.target.value })}
                    className="w-full p-2 border border-gray-300 rounded"
                />
                <input
                    type="number"
                    name="price"
                    placeholder="Service Price"
                    value={newService.price}
                    onChange={(e) => setNewService({ ...newService, price: e.target.value })}
                    className="w-full p-2 border border-gray-300 rounded"
                />
                <button
                    onClick={handleAddService}
                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                    Add Service
                </button>
            </div>
            <ul className="space-y-2">
                {services.map((service) => (
                    <li key={service.id} className="p-2 border border-gray-200 rounded">
                        <p className="font-bold">{service.name}</p>
                        <p>{service.description}</p>
                        <p>${service.price}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ServiceManagement;
