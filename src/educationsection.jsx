import React from "react";
import "./educationsection.css"; // Make sure this path is correct

const educationData = [
            {
            degree: "Master of Computer Application",
            institution: "Rajasthan Technical university",
            year: "2023-2025",
            description: "Focused on advanced software development, programming, and application design",
            },
            {
            degree: "Bachelor of Computer Application",
            institution: "University of Kota",
            year: "2020-2023",
            description: "Understood software engineering principles and application development life cycle.",
            },
            ];

        const EducationSection = () => 
            {
            return ( <section className="education-section"> <div className="heading-wrapper"> <h2 className="script-text">Journey of</h2> <h1 className="main-heading gradient-gold-teal">EDUCATION</h1> </div>


            <div className="education-grid">
                {educationData.map((edu, index) => (
                <div className="education-card" key={index}>
                    <div className="gradient-border"></div>
                    <h3 className="degree gradient-gold-teal">{edu.degree}</h3>
                    <p className="institution">{edu.institution}</p>
                    <p className="year">{edu.year}</p>
                    <p className="description">{edu.description}</p>
                </div>
                ))}
            </div>
            </section>


);
};

export default EducationSection;
