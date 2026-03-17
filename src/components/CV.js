import React from 'react';
import user from '../data/profile';
import { useLang } from '../hooks/useLang';
import { useRole } from '../hooks/useRole';
import { getRoleSpecificContent } from '../data/roleContent';
import { SECTION_LABELS } from '../constants/labels';
import { LanguageToggle } from './LanguageToggle';
import { RoleToggle } from './RoleToggle';
import { PrintOptions } from './PrintOptions';
import { CVHeader } from './CVHeader';
import { ContactSection } from './ContactSection';
import { AboutSection } from './AboutSection';
import { CVSection } from './CVSection';
import { ExperienceItem } from './ExperienceItem';
import { EducationItem } from './EducationItem';
import { SkillItem } from './SkillItem';
import '../styles/CV.scss';

export const CV = () => {
  const { lang } = useLang();
  const { role } = useRole();

  const roleContent = getRoleSpecificContent(role, lang);
  const title = roleContent?.title || user.title[lang];
  const quote = roleContent?.quote || user.qoute;
  const info = roleContent?.info || user.info;

  return (
    <div>
      <LanguageToggle />
      <RoleToggle />
      <PrintOptions />

      <div className="cv-container single-column">
        <CVHeader name={user.name} lastName={user.lastName} title={title} quote={quote} />

        <ContactSection
          phone={user.phone}
          email={user.mail}
          webpage={user.webpage}
          linkedin={user.linkedin}
        />

        <AboutSection aboutText={info} />

        {/* Work Experience */}
        <CVSection title={SECTION_LABELS.workExperience[lang]} testId="work-section">
          {user.workExp.map((exp, idx) => (
            <ExperienceItem
              key={`work-${idx}`}
              company={exp.company}
              date={exp.date}
              description={exp.description}
            />
          ))}
        </CVSection>

        {/* Education */}
        <CVSection title={SECTION_LABELS.education[lang]} testId="education-section">
          {user.education.map((edu, idx) => (
            <EducationItem
              key={`edu-${idx}`}
              name={edu.name}
              date={edu.date}
              description={edu.description}
            />
          ))}
        </CVSection>

        {/* Soft Skills */}
        <CVSection title={SECTION_LABELS.softSkills[lang]} testId="skills-section">
          {user.softSkills.map((skill, idx) => (
            <SkillItem key={`skill-${idx}`} name={skill.name} text={skill.text} />
          ))}
        </CVSection>

        {/* Languages */}
        <CVSection title={SECTION_LABELS.languages[lang]} testId="languages-section">
          {user.spokenLangs.map((langObj, idx) => (
            <div key={`lang-${idx}`} className="spoken-lang">
              <p className="lang-line">{lang === 'en' ? langObj.en : langObj.da}</p>
            </div>
          ))}
        </CVSection>

        {/* Spare Time */}
        <CVSection title={SECTION_LABELS.spareTime[lang]} testId="spare-time-section">
          <p>{user.spareTime[lang]}</p>
        </CVSection>

        {/* Other Experience */}
        <CVSection title={SECTION_LABELS.otherExperience[lang]} testId="other-exp-section">
          {user.otherExp.map((exp, idx) => (
            <ExperienceItem
              key={`other-exp-${idx}`}
              company={exp.name}
              date={exp.date}
              description={exp.description}
            />
          ))}
        </CVSection>
      </div>
    </div>
  );
};

export default CV;
