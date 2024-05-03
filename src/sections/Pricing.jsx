const Pricing =() => {
        return (
            <div className="container p-5">
                {/* First Timers Introductory Offer */}
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-brand-primary mb-6">Welcome, First Timers!</h2>
                    <p className="text-lg text-gray-700 mb-4">Discover the benefits of professional stretching with a special introductory offer just for you.</p>
                    <p className="text-gray-600 mb-6">Experience a tailored stretch session that focuses on your specific needs. Our expert therapists guide you through each stretch, ensuring comfort and effectiveness.</p>
                    
                </div>
              {/* Testimonials */}
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-brand-primary mb-6">What Our Clients Say</h2>
                         <div>
                            <p className="text-gray-600 italic mb-6">&quot;Since starting stretch sessions here, my flexibility has improved and my chronic back pain is better managed.&quot;</p>
                            <p className="text-gray-600 italic">&quot;These personalized stretching routines have been a game-changer for my athletic performance and recovery times.&quot;</p>
                        </div>
                        
                    </div>
            
                
                
            </div>
        );
    };
    
    export default Pricing;