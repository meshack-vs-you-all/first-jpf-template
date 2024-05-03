import { useState } from 'react';

const CallToAction = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
        newsletter: false
    });

    const handleChange = (event) => {
        const { name, value, type, checked } = event.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
        alert('Thank you for your message!');
        
        setFormData({
            name: '',
            email: '',
            subject: '',
            message: '',
            newsletter: false
        });
    };

    // Sample blog articles
    const blogArticles = [
        {
            id: 1,
            title: "5 Tips for a Healthier Lifestyle",
            excerpt: "Discover simple ways to improve your daily habits and overall health.",
            author: "Dr. Jane Doe",
            publishDate: "April 14, 2024"
        },
        {
            id: 2,
            title: "The Importance of Stretching",
            excerpt: "Learn why stretching should be a core part of your fitness routine.",
            author: "John Fitness",
            publishDate: "April 20, 2024"
        },
        {
            id: 3,
            title: "Top 10 Exercises for Back Pain",
            excerpt: "Explore exercises designed to strengthen your back and reduce pain.",
            author: "Emily Health",
            publishDate: "April 25, 2024"
        }
    ];

    return (
       
            <div className="container ">
            {/* Blog Articles Section */}
<div className="mt-12 lg:order-1">
    <h3 className="text-2xl font-bold text-center text-white mb-6">Latest Blog Articles</h3>
    <div>
        {blogArticles.map(article => (
            <div key={article.id} className="bg-white rounded-lg hover:shadow-lg p-5 mb-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full ">
                <h4 className="text-xl font-semibold mb-2">{article.title}</h4>
                <p className="text-gray-600 mb-4">{article.excerpt}</p>
                <p className="text-sm text-gray-500">By {article.author} on {article.publishDate}</p>
            </div>
        ))}
    </div>
</div>


            <div className='mt-[50px] text-white'>
                <h2 className="text-3xl font-bold text-center mb-6">Contact Us & Stay Updated</h2>
                <p className="text-center mb-10">Fill out the form below or sign up for our newsletter to receive the latest updates on discounts and events.</p>

                <div className="grid grid-col md:grid-cols gap-10 items-center">
              
                <div className="bg-white text-black p-8 border border-gray-200 rounded-lg shadow-md px-8">
                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <input type="text" name="name" className="form-control block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="Name" required value={formData.name} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <input type="email" name="email" className="form-control block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="Email" required value={formData.email} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <input type="text" name="subject" className="form-control block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="Subject" required value={formData.subject} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <textarea name="message" className="form-control block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" rows="4" placeholder="Message" required value={formData.message} onChange={handleChange}></textarea>
                        </div>
                        <div className="flex items-center mb-4">
                            <input type="checkbox" name="newsletter" id="newsletter" checked={formData.newsletter} onChange={handleChange} className="form-checkbox h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
                            <label htmlFor="newsletter" className="ml-2 block text-sm text-gray-900">
                                Sign up for our newsletter
                            </label>
                        </div>
                        <button type="submit" className="btn btn-primary inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-dark bg-brand-primary hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            Send Message
                        </button>
                        <div className='flex'>
                        <div className='lg:ml-auto'>
                            <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
                            <address className="not-italic">
                            <strong>Japheth&#39;s Powered Fitness</strong><br />
                            5th Floor Western Heights,<br /> 
                            Karuna Road, Westlands,<br />
                            00100 Nairobi, Kenya.<br />
                            <abbr title="Phone">Call:</abbr> 0701810285
                            </address>
                            </div>
                         </div>
                            
                    </form>
                </div>
                </div>
            </div>
        
        

           
        </div>
    );
};

export default CallToAction;
