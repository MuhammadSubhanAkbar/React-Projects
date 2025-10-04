import {useState} from "react";
import './index.css'

function Testimonials() { // Fixed typo in function name
    const [currentIndex, setCurrentIndex] = useState(0);

    const testimonials = [
        {
            quote: "This is the best product I've ever used!",
            author: "Jane Doe",
        },
        {
            quote: "I highly recommend this product to everyone!",
            author: "John Smith",
        },
        {
            quote: "This product has completely changed my life!",
            author: "Bob Johnson",
        },
    ];

    const next = () => {
        setCurrentIndex((currentIndex + 1) % testimonials.length); // Fixed: use testimonials.length
    };

    const prev = () => {
        setCurrentIndex((currentIndex - 1 + testimonials.length) % testimonials.length); // Fixed: use testimonials.length
    };

    return (
        <div className='testimonials'>
            <div className="testimonials-quote">
                {testimonials[currentIndex].quote}
            </div>
            <div className="testimonials-author">
                {testimonials[currentIndex].author}
            </div>

            <div className="testimonials-nav">
                <button onClick={prev}>Prev</button>
                <button onClick={next}>Next</button>
            </div>
        </div>
    );
}

export default Testimonials; // Fixed typo in export