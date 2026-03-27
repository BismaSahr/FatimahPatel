import React, { useState } from 'react';
import './Testimonials.css';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import avatarImg from '../assets/image copy.png'; // Path to your dmitry-vechorko image

const testimonialData = [
    {
        id: 1,
        name: "Muhammad A.",
        text: "Fatemah’s proficiency in Figma, Adobe XD, and Sketch is evident in the quality of her designs. She created high-fidelity mockups and interactive prototypes that made development straightforward. Her ability to bring complex ideas to life with such clarity and precision is truly impressive."
    },
    {
        id: 2,
        name: "Hammad S.",
        text: "Fatemah’s work significantly improved user engagement for our app. She carefully considered every interaction, making it intuitive and smooth. Her designs weren’t just beautiful, they enhanced usability and delighted our users. We’re extremely satisfied with her expertise and dedication."
    },
    {
        id: 3,
        name: "Shuja A.",
        text: "Fatemah’s attention to user experience is unmatched. She carefully analyzed our workflows and redesigned our app to make it intuitive and seamless. Her creative approach and design skills turned a complex application into something simple, engaging, and visually appealing. Collaborating with her was professional, smooth, and inspiring."
    },
    {
        id: 4,
        name: "Bisma S.",
        text: "Responsive, innovative, and exceptionally detail-oriented, Fatemah completely transformed our initial Sketch mockups into a fully polished, user-friendly design system. Her expertise in UI/UX design ensured that every element was not only visually appealing but also highly functional, improving overall usability and creating a seamless experience for our users. She communicated clearly throughout the project, incorporated feedback effortlessly, and delivered results that far exceeded our expectations. Working with Fatemah was an absolute pleasure, and her designs have truly elevated the quality and professionalism of our product."
    }
];

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const totalItems = testimonialData.length;
    const itemsToShow = 3;
    const maxIndex = Math.max(0, totalItems - itemsToShow);

    const handleNext = () => {
        setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    };

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
    };

    return (
        <section className="testimonial-section">
            {/* Background Decorative Patterns - Left Side */}
            <div className="bg-pattern left-pattern">
                <div className="ellipse-purple"></div>
                <div className="ellipse-blue"></div>
                <div className="rect-cyan"></div>
            </div>

            {/* Background Decorative Patterns - Right Side */}
            <div className="bg-pattern right-pattern">
                <div className="ellipse-purple"></div>
                <div className="ellipse-blue"></div>
                <div className="rect-cyan"></div>
            </div>

            <div className="container position-relative mt-0">
                <h2 className="testimonial-title"><strong>Customer reviews</strong></h2>

                <div className="testimonial-carousel">
                    <div
                        className="testimonial-items"
                        style={{
                            transform: `translateX(-${currentIndex * (360 + 48)}px)`,
                            transition: 'transform 0.5s ease-in-out'
                        }}
                    >
                        {testimonialData.map((item) => (
                            <div key={item.id} className="testimonial-item">
                                <div className="avatar-wrapper">
                                    <img src={avatarImg} alt="User Avatar" className="avatar-img" />
                                </div>
                                <div className="testimonial-body">
                                    <p className="testimonial-text">{item.text}</p>
                                    <h4 className="testimonial-name">{item.name}</h4>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="testimonial-arrows mb-5">
                    <button className="arrow-btn btn-prev" onClick={handlePrev}>
                        <FiArrowLeft />
                    </button>
                    <button className="arrow-btn btn-next" onClick={handleNext}>
                        <FiArrowRight />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;