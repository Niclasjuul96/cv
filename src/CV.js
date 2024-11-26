import React, { useRef } from "react";
import user from "./Profile.js";
import { PDFExport } from "@progress/kendo-react-pdf";
import "./CV.scss";


const CV = () => {
    // Sort software alphabetically by name
    const sortedSoftware = [...user.software].sort((a, b) => a.name.localeCompare(b.name));

    // Sort languages by level (descending)
    const sortedLanguages = [...user.languages].sort((a, b) => a.name.localeCompare(b.name));

    const pdfExportComponent = useRef(null);

    document.title = "Niclas CV"
    return (
        <div>
          {/* <button onClick={() => pdfExportComponent.current.save()}>Download as PDF</button> */}
          <PDFExport ref={pdfExportComponent} fileName="Niclas_CV.pdf" paperSize="A4" scale={0.8} settings={{ content: { type: "svg" } }}>
            <div className="cv-container">
            {/* Two-column layout */}
            <div className="cv-layout">
                {/* Left Column */}
                <div className="left-column">
                    {/* Profile Picture */}
                    <img
                        src={user.image}
                        alt={`${user.name} ${user.lastName}`}
                        className="profile-image"
                    />

                    {/* Contact Info */}
                    <section className="contact">
                        <h2>Contact</h2>
                        <ul>
                            <li>
                                <strong>Phone:</strong> <br /> <span>{user.phone}</span>
                            </li>
                            <li>
                                <strong>Email:</strong> <br /> <span>{user.mail}</span>
                            </li>
                            <li>
                                <strong>License:</strong> <br /> <span>{user.license}</span>
                            </li>
                        </ul>
                    </section>

                    {/* Software */}
                    <section className="software">
                        <h2>Software / OS</h2>
                        <ul>
                            {sortedSoftware.map((soft, index) => (
                                <li key={index}>
                                    - <strong>{soft.name}</strong>
                                </li>
                            ))}
                        </ul>
                    </section>
                    <br/>
                    {/* Languages */}
                    <section className="languages">
                        <h2>Stack</h2>
                        <ul>
                            {sortedLanguages.map((lang, index) => (
                                <li key={index}>
                                    - <strong>{lang.name}</strong> (Level {lang.level})
                                </li>
                            ))}
                        </ul>
                    </section>
                    <br/>
                    {/* Soft Skills */}
                    <section className="soft-skills">
                        <h2>Soft Skills</h2>
                        {user.softSkills.map((skill, index) => (
                            <div key={index} className="soft-skill">
                                -{" "}
                                <strong>
                                    {typeof skill.name === "string"
                                        ? skill.name
                                        : skill.name.en}
                                </strong>
                                <p>{skill.text.en}</p>
                            </div>
                        ))}
                    </section>

                    {/*Spoken Langauges*/}
                    <section classname="spoken-langs">
                        <h2>Langauges</h2>
                        {user.spokenLangs.map((lang, index) => (
                            <div key={index} className="spoken-lang">
                                -{" "}
                                <strong>
                                    {lang.en}
                                </strong>
                            </div>
                        ))}
                    </section>
                </div>

                {/* Right Column */}
                <div className="right-column">
                    {/* Header Section */}
                    <div className="cv-header">
                        <h1>
                            {user.name} {user.lastName}
                        </h1>
                        <h2>
                            {user.title.en} - {user.title2.en}
                        </h2>
                    </div>

                    {/* About Me */}
                    <section className="about-me">
                        <p>{user.info.en}</p>
                    </section>

                    {/* Work Experience */}
                    <section className="work-experience">
                        <h2>Work Experience</h2>
                        {user.workExp.map((exp, index) => (
                            <div key={index} className="experience-item">
                                <h3>{exp.company}</h3>
                                <h4>{exp.date}</h4>
                                <ul>
                                    {exp.assignments.map((assignment, idx) => (
                                        <li key={idx}>{assignment.en}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </section>

                    {/* Education */}
                    <section className="education">
                        <h2>Education</h2>
                        {user.education.map((edu, index) => (
                            <div key={index} className="education-item">
                                <h3>{edu.name.en}</h3>
                                <h4>{edu.date}</h4>
                                <ul>
                                    {edu.subjects.map((subject, idx) => (
                                        <li key={idx}>{subject}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </section>

                    {/* Other Experience */}
                    <section className="other-experience">
                        <h2>Other Experience</h2>
                        {user.otherExp.map((exp, index) => (
                            <div key={index} className="experience-item">
                                <h3>{exp.name}</h3>
                                <h4>{exp.date}</h4>
                                <ul>
                                    {exp.assignments.map((assignment, idx) => (
                                        <li key={idx}>
                                            {assignment.en}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </section>

                    {/* Spare Time */}
                    <section className="spare-time">
                        <h2>Spare Time</h2>
                        <p>{user.spareTime.en}</p>
                    </section>
                </div>
            </div>
        </div>
          </PDFExport>
        </div>
      );
};

export default CV;
