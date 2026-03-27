import React, { useState } from 'react';
import './FAQ.css';
import { FiChevronDown } from 'react-icons/fi';

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(0); // First one open by default as per image

    const faqData = [
        {
            question: "Do you do web design or web development?",
            answer: "Community files are design files creators have shared with the Community. Create templates for wireframe, UI kits, asset libraries, and design systems. Or share educational resources, interactive tutorials, and tools to use across the design process."
        },
        {
            question: "How long does a website take to build?",
            answer: "The timeline depends on the complexity of the project, but typically a standard website takes 2-4 weeks from discovery to launch."
        },
        {
            question: "Will you work on the project in your account or mine?",
            answer: "I can work in either. Usually, I prefer working in your account so you maintain full ownership of the source files from day one."
        },
        {
            question: "I'm an agency, what you can do for us?",
            answer: "I partner with agencies as a white-label designer or developer to help scale their production capacity without the overhead of a full-time hire."
        }
    ];

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="faq-section">
            <div className="container faq-container">
                {/* Left Side: Header Text */}
                <div className="faq-header">
                    <span className="faq-badge">Faq</span>
                    <h2 className="faq-main-title">Frequently Asked</h2>
                    <h2 className="faq-sub-title">Questions</h2>
                    <p className="faq-contact-text">
                        If you have any other questions, you can contact me by email
                    </p>
                    <a href="mailto:youremail@gmail.com" className="faq-email">
                        Fatemah.patel@orientsoftsolutions.com
                    </a>
                </div>

                {/* Right Side: Accordion List */}
                <div className="faq-list">
                    {faqData.map((item, index) => (
                        <div
                            key={index}
                            className={`faq-item ${activeIndex === index ? 'active' : ''}`}
                            onClick={() => toggleAccordion(index)}
                        >
                            <div className="faq-question-block">
                                <h3>{item.question}</h3>
                                <div className="faq-icon">
                                    <FiChevronDown className={activeIndex === index ? 'open' : ''} />
                                </div>
                            </div>
                            <div className="faq-answer">
                                <p>{item.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;