const Benefits =() => {
        return (
            <div className="container mx-auto px-4 py-12">
                {/* Testimonials and Why Stretch Section */}
                <div className="mb-20">
                    <h2 className="text-3xl font-bold text-center text-brand-primary mb-10">OUR STRETCH SERVICES</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        {/* Testimonials */}
                        <div>
                            <h3 className="text-xl font-bold mb-4">What Our Clients Say</h3>
                            <p className="text-gray-600 italic mb-6">&quot;Since starting stretch sessions here, my flexibility has improved and my chronic back pain is better managed.&quot;</p>
                            <p className="text-gray-600 italic">&quot;These personalized stretching routines have been a game-changer for my athletic performance and recovery times.&quot;</p>
                        </div>
                        {/* Why Stretch */}
                        
                    </div>
                </div>
                
                {/* First Timers Introductory Offer */}
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-brand-primary mb-6">Welcome, First Timers!</h2>
                    <p className="text-lg text-gray-700 mb-4">Discover the benefits of professional stretching with a special introductory offer just for you.</p>
                    <p className="text-gray-600 mb-6">Experience a tailored stretch session that focuses on your specific needs. Our expert therapists guide you through each stretch, ensuring comfort and effectiveness.</p>
                    <div className="text-right mt-6">
                        <a href="#" className="text-brand-primary hover:text-brand-secondary transition-colors">Check out our other services</a>
                    </div>
                </div>
            </div>
        );
    };
    
    export default Benefits;