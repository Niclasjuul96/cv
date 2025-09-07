import React, {useEffect} from "react";
import user from "./Profile.js";
import { Phone, Mail, Globe, LinkedinIcon } from "lucide-react";
import "./CV.scss";

const CV = () => {
  const telHref = `tel:${user.phone.replace(/\s+/g, "")}`;
  const mailHref = `mailto:${user.mail}`;
  useEffect(() => { document.title = "Niclas CV"; }, []);

  return (
    <div>
      <div className="cv-container single-column">
        {/* Header / Quote */}
        <header className="cv-header">
          <h2 className="quote">{user.qoute.en}</h2>
        </header>

        {/* Contact (2 × 2) */}
        <section className="contact-icons" aria-label="Contact">
          <ul>
            <li>
              <a href={telHref} title={user.phone} aria-label={user.phone}>
                <Phone />
                <span>{user.phone}</span>
              </a>
            </li>
            <li>
              <a href={mailHref} title={user.mail} aria-label={user.mail}>
                <Mail />
                <span>{user.mail}</span>
              </a>
            </li>
            <li>
              <a
                href={user.webpage}
                target="_blank"
                rel="noreferrer"
                title={user.webpage}
                aria-label={user.webpage}
              >
                <Globe />
                <span>{user.webpage}</span>
              </a>
            </li>
            <li>
              <a
                href={user.linkedin}
                target="_blank"
                rel="noreferrer"
                title={user.linkedin}
                aria-label={user.linkedin}
              >
                <LinkedinIcon />
                <span>{user.linkedin}</span>
              </a>
            </li>
          </ul>
        </section>

        {/* About Me */}
        <section className="about-me">
          <p>{user.info.en}</p>
        </section>

        {/* Work Experience */}
        <section className="work-experience">
          <h2 className="section-title">Work Experience</h2>
          {user.workExp.map((exp, i) => (
            <div key={i} className="experience-item avoid-break">
              <h3>{exp.company}</h3>
              <h4>{exp.date}</h4>
              <p>{exp.description.en}</p>
            </div>
          ))}
        </section>

        {/* Education */}
        <section className="education">
          <h2 className="section-title">Education</h2>
          {user.education.map((edu, i) => (
            <div key={i} className="education-item avoid-break">
              <h3>{edu.name.en}</h3>
              <h4>{edu.date}</h4>
              <p>{edu.description.en}</p>
            </div>
          ))}
        </section>

        {/* Soft Skills */}
        <section className="soft-skills">
          <h2 className="section-title">Soft Skills</h2>
          {user.softSkills.map((skill, index) => (
            <div key={index} className="soft-skill">
              <h3>
                {typeof skill.name === "string" ? skill.name : skill.name.en}
              </h3>
              <p>{skill.text.en}</p>
            </div>
          ))}
        </section>

        {/* Languages */}
        <section className="spoken-langs">
          <h2 className="section-title">Languages</h2>
          {user.spokenLangs.map((lang, index) => (
            <div key={index} className="spoken-lang">
              <p className="lang-line">{lang.en}</p>
            </div>
          ))}
        </section>

        {/* Spare Time */}
        <section className="spare-time">
          <h2 className="section-title">Spare Time</h2>
          <p>{user.spareTime.en}</p>
        </section>

        {/* Other Experience */}
        <section className="other-experience">
          <h2 className="section-title">Other Experience</h2>
          {user.otherExp.map((exp, index) => (
            <div key={index} className="experience-item avoid-break">
              <h3>{exp.name}</h3>
              <h4>{exp.date}</h4>
              <p>{exp.description.en}</p>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default CV;
