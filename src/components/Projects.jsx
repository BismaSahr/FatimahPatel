import React from 'react';
import './Projects.css';
import image1 from '../assets/11115.png';
import image2 from '../assets/Lazeez.png';
import image3 from '../assets/dashboard.png';
import { FiArrowUpRight } from 'react-icons/fi';

const projectData = [
    {
        id: 1,
        title: "Re-Design For Website",
        tags: ["User Research", "UX Design"],
        description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
        bgColor: "#DEFCFF",
        patternColor: "#717EA7",
        image: image1,
        link: "https://www.behance.net/gallery/246337983/Website-UI-UX-Design"
    },
    {
        id: 2,
        title: "Lazeez Events UI/UX",
        tags: ["User Research", "UX Design"],
        description: "UI/UX design for Lazeez Events, emphasizing intuitive vendor browsing, bulk order workflow, and responsive, user-friendly layouts.",
        bgColor: "#EDF0F9",
        patternColor: "#CBC1F6",
        image: image2,
        link: "https://www.behance.net/gallery/246336393/Lazeez-Events-UI-UX-Design"
    },
    {
        id: 3,
        title: "Dashboard Designing",
        tags: ["User Research", "UX Design"],
        description: "Designed a custom UI/UX concept, focusing on clean layouts, intuitive navigation, and engaging visuals. Created a responsive, user-friendly interface that showcases creativity, interaction design skills, and attention to user experience.",
        bgColor: "#DEE5FF",
        patternColor: "#7DE0EA",
        image: image3,
        link: "https://www.behance.net/gallery/246337315/Dashboard-Design-for-buyer-Seller"
    }
];

const Projects = () => {
    return (
        <section className="projects-section py-5" id="portfolio">
            <div className="container">
                <h2 className="projects-main-title text-center mb-5">
                    <strong>Portfolio</strong>
                </h2>

                <div className="projects-list">
                    {projectData.map((project) => (
                        <div
                            key={project.id}
                            className="project-card"
                            style={{ backgroundColor: project.bgColor }}
                        >
                            {/* Decorative Background Patterns */}
                            <div className="pattern-rect" style={{ backgroundColor: project.patternColor ,opacity: 0.8}}></div>
                            <div className="pattern-circle circle-1" style={{ backgroundColor: project.patternColor ,opacity: 0.8}}></div>
                            <div className="pattern-circle circle-2" style={{ backgroundColor: project.patternColor ,opacity: 0.8}}></div>
                            <div className="pattern-circle circle-3" style={{ backgroundColor: project.patternColor, opacity: 0.5 }}></div>

                            <div className="row h-100 align-items-center">
                                {/* Content Side */}
                                <div className="col-lg-6 project-content-col">
                                    <div className="project-content">
                                        <h3 className="project-title">{project.title}</h3>

                                        <div className="tag-container d-flex gap-3 my-4">
                                            {project.tags.map((tag, index) => (
                                                <span key={index} className="project-tag">{tag}</span>
                                            ))}
                                        </div>

                                        <p className="project-desc">{project.description}</p>

                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn btn-case-study text-decoration-none"
                                        >
                                            Read Case Study <FiArrowUpRight className="ms-2" />
                                        </a>
                                    </div>
                                </div>

                                {/* Image Side */}
                                <div className="col-lg-6 project-image-col">
                                    <div className="mockup-wrapper">
                                        <img src={project.image} alt={project.title} className="mockup-img" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;