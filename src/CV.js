import React, { useEffect, useState } from "react";
import user from "./Profile.js";
import { Phone, Mail, Globe, LinkedinIcon } from "lucide-react";
import "./CV.scss";

const CV = () => {
  const [lang, setLang] = useState("en"); // "en" | "da"

  const telHref = `tel:${user.phone.replace(/\s+/g, "")}`;
  const mailHref = `mailto:${user.mail}`;

  useEffect(() => {
    document.title = lang === "en" ? "Niclas CV" : "Niclas CV";
  }, [lang]);

    // Helper: render dates that can be string OR array of strings
  const renderDate = (date) => {
    if (Array.isArray(date)) {
      // show each period on its own line
      return (
        <>
          {date.map((d, i) => (
            <div key={i}>{d}</div>
          ))}
        </>
      );
    }
    return <>{date}</>;
  };

  // Section labels in both languages
  const labels = {
    workExperience: { en: "Work Experience", da: "Erhvervserfaring" },
    education: { en: "Education", da: "Uddannelse" },
    softSkills: { en: "Soft Skills", da: "Personlige kompetencer" },
    languages: { en: "Languages", da: "Sprog" },
    spareTime: { en: "Spare Time", da: "Fritid" },
    otherExperience: { en: "Other Experience", da: "Øvrig erfaring" },
  };

  return (
    <div>
      {/* Language toggle – will be hidden in print via CSS */}
      <div className="lang-toggle no-print">
        <button
          type="button"
          className={lang === "en" ? "active" : ""}
          onClick={() => setLang("en")}
        >
          English
        </button>
        <button
          type="button"
          className={lang === "da" ? "active" : ""}
          onClick={() => setLang("da")}
        >
          Dansk
        </button>
      </div>

      <div className="cv-container single-column">
        {/* Header / Quote */}
        <header className="cv-header">
          <h2 className="quote">{user.qoute[lang]}</h2>
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
          <p>{user.info[lang]}</p>
        </section>

        {/* Work Experience */}
        <section className="work-experience">
          <h2 className="section-title">{labels.workExperience[lang]}</h2>
          {user.workExp.map((exp, i) => (
            <div key={i} className="experience-item avoid-break">
              <h3>{exp.company}</h3>
              <h4>{renderDate(exp.date)}</h4>
              <p>{exp.description[lang]}</p>
            </div>
          ))}
        </section>

        {/* Education */}
        <section className="education">
          <h2 className="section-title">{labels.education[lang]}</h2>
          {user.education.map((edu, i) => (
            <div key={i} className="education-item avoid-break">
              <h3>{edu.name[lang]}</h3>
              <h4>{renderDate(edu.date)}</h4>
              <p>{edu.description[lang]}</p>
            </div>
          ))}
        </section>

        {/* Soft Skills */}
        <section className="soft-skills">
          <h2 className="section-title">{labels.softSkills[lang]}</h2>
          {user.softSkills.map((skill, index) => (
            <div key={index} className="soft-skill">
              <h3>
                {typeof skill.name === "string"
                  ? skill.name
                  : skill.name[lang]}
              </h3>
              <p>{skill.text[lang]}</p>
            </div>
          ))}
        </section>

        {/* Languages */}
        <section className="spoken-langs">
          <h2 className="section-title">{labels.languages[lang]}</h2>
          {user.spokenLangs.map((langObj, index) => (
            <div key={index} className="spoken-lang">
              <p className="lang-line">
                {lang === "en" ? langObj.en : langObj.da}
              </p>
            </div>
          ))}
        </section>

        {/* Spare Time */}
        <section className="spare-time">
          <h2 className="section-title">{labels.spareTime[lang]}</h2>
          <p>{user.spareTime[lang]}</p>
        </section>

        {/* Other Experience */}
        <section className="other-experience">
          <h2 className="section-title">{labels.otherExperience[lang]}</h2>
          {user.otherExp.map((exp, index) => (
            <div key={index} className="experience-item avoid-break">
              <h3>{exp.name}</h3>
              <h4>{renderDate(exp.date)}</h4>
              <p>{exp.description[lang]}</p>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default CV;
