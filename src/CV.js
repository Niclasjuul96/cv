import React from "react";
import user from "./Profile.js";

const CV = () => {
    return (
        <div style={{ fontFamily: "Arial, sans-serif", margin: "20px" }}>
            {/* Header Section */}
            <div style={{ display: "flex", alignItems: "center" }}>
                <img 
                    src={user.image.profile} 
                    alt={`${user.name} ${user.lastName}`} 
                    style={{ borderRadius: "50%", width: "150px", height: "150px", marginRight: "20px" }} 
                />
                <div>
                    <h1>{user.name} {user.lastName}</h1>
                    <h2>{user.title.en} - {user.title2.en}</h2>
                </div>
            </div>

            {/* About Me */}
            <section style={{ marginTop: "20px" }}>
                <h2>About Me</h2>
                <p>{user.info.en}</p>
            </section>

            {/* Skills */}
            <section style={{ marginTop: "20px" }}>
                <h2>Skills</h2>
                <h3>Programming Languages</h3>
                <ul>
                    {user.languages.map((lang, index) => (
                        <li key={index}>{lang.name} - Level {lang.level}</li>
                    ))}
                </ul>
                <h3>Software</h3>
                <ul>
                    {user.software.map((soft, index) => (
                        <li key={index}>{soft.name} - Level {soft.level}</li>
                    ))}
                </ul>
            </section>

            {/* Work Experience */}
            <section style={{ marginTop: "20px" }}>
                <h2>Work Experience</h2>
                {user.workExp.map((exp, index) => (
                    <div key={index} style={{ marginBottom: "20px" }}>
                        <h3>{exp.date}</h3>
                        <h4>{exp.company}</h4>
                        <ul>
                            {exp.assignments.map((assignment, idx) => (
                                <li key={idx}>{assignment.en}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </section>

            {/* Education */}
            <section style={{ marginTop: "20px" }}>
                <h2>Education</h2>
                {user.education.map((edu, index) => (
                    <div key={index} style={{ marginBottom: "20px" }}>
                        <h3>{edu.date}</h3>
                        <h4>{edu.name.en}</h4>
                        <ul>
                            {edu.subjects.map((subject, idx) => (
                                <li key={idx}>{subject}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </section>

            {/* Languages */}
            <section style={{ marginTop: "20px" }}>
                <h2>Languages</h2>
                <ul>
                    {user.spokenLangs.map((lang, index) => (
                        <li key={index}>{lang.en}</li>
                    ))}
                </ul>
            </section>
        </div>
    );
};

export default CV;
