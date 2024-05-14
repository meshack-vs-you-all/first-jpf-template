import { useState } from "react";
const WhyChooseUs = () => {
    // Define a list of FAQs, each with a question, answer, and an initial state
    const faqs = [
        { id: 1, question: "What should I bring to my first session?", answer: "Just bring yourself and comfortable clothing that allows for movement. We provide all necessary equipment." },
        { id: 2, question: "Do I need to book in advance?", answer: "While booking in advance is recommended to secure your spot, we welcome walk-ins based on availability." },
        { id: 3, question: "Are there packages or memberships available?", answer: "Yes, we offer a variety of packages and membership options to help you save on regular sessions. Please visit our Pricing page or contact us for more information." },
        { id: 4, question: "How long does a typical stretch session last?", answer: "Most sessions last between 30 to 60 minutes, but we can customize the duration to suit your needs." },
        { id: 5, question: "Can stretching help with injury recovery?", answer: "Yes, targeted stretching can aid in recovery from certain types of injuries. However, we recommend consulting with a healthcare provider first." }
    ];

    // State to keep track of the open FAQ ID
    const [openFAQ, setOpenFAQ] = useState(null);

    // Toggle FAQ: open if closed, close if opened
    const toggleFAQ = (id) => {
        setOpenFAQ(openFAQ === id ? null : id);
    };

    return (
        <div className="container mx-auto bg-gray-100 p-5 rounded-lg shadow text-center">
            <h2 className="text-2xl font-bold text-brand-primary mb-4">Why Choose JPF Stretch Hub?</h2>
            <p className="text-gray-700 mb-3">
                At <strong>JPF Stretch Hub</strong>, we&#39;re dedicated to providing you with exceptional stretch therapy services in a welcoming and professional environment.  Here are just a few reasons why you should choose us for your stretching needs:
            </p>
            <br/>
            <ul className="list-disc list-inside text-black text-left mx-[20px] py-2">
                <li><span style={{color: '#0fadb6'}}><strong>Expert Guidance:</strong></span> Our certified stretch therapists are experts in their field, specializing in a variety of techniques to enhance your flexibility, reduce pain, and improve overall wellness.</li>
                <li><span style={{color: '#0fadb6'}}><strong>Personalized Plans:</strong></span> We understand that each body is unique. That&#39;s why we offer personalized stretching plans tailored to meet your specific health needs and fitness goals.</li>
                <li><span style={{color: '#0fadb6'}}><strong>State-of-the-Art Facilities:</strong></span> Our facilities are equipped with the latest in stretch therapy technology and maintained to the highest standards of cleanliness and safety.</li>
                <li><span style={{color: '#0fadb6'}}><strong>Community Focus:</strong></span> As Nairobi&#39;s premier stretch hub, we are committed to building a healthy community. We organize workshops and community events that foster a spirit of wellness and togetherness.</li>
                <li><span style={{color: '#0fadb6'}}><strong>Comprehensive Health Benefits:</strong></span> Regular sessions at JPF Stretch Hub can help alleviate back pain, improve your posture, enhance athletic performance, and even contribute to stress reduction.</li>
                <li><span style={{color: '#0fadb6'}}><strong>Convenient Location:</strong></span> Easily accessible in the heart of Nairobi, our hub is conveniently located to serve you better, ensuring that you can reach us without hassle.</li>
            </ul>
            
            <div id='faq' className="mt-8">
                <h3 className="text-xl text-brand-primary font-semibold mb-4">Frequently Asked Questions (FAQ)</h3>
                <div className="text-left space-y-4">
                    {faqs.map(faq => (
                        <div key={faq.id} className="pb-4">
                            <button onClick={() => toggleFAQ(faq.id)} className="flex items-center justify-between w-full text-left text-gray-800 py-2">
                                <span>{faq.question}</span>
                                <span>{openFAQ === faq.id ? '-' : '+'}</span>
                            </button>
                            {openFAQ === faq.id && (
                                <p className="mt-2 text-sm text-gray-600">{faq.answer}</p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default WhyChooseUs;
