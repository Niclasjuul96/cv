// Role-specific content configurations
export const getRoleSpecificContent = (role, lang = 'en') => {
  if (role === 'developer') {
    return {
      title: 'Full Stack Developer',
      quote: {
        en: "Passionate developer building scalable web solutions with modern technology. Frontend-focused with strong backend fundamentals.",
        da: "Dedikeret udvikler der bygger skalerbare web-løsninger med moderne teknologi. Frontend-fokuseret med stærk backend-viden."
      },
      info: {
        en:
          "Full stack developer with expertise in building responsive web applications using React, JavaScript, HTML, and CSS. " +
          "I design and implement scalable backend solutions using ASP.NET and C# with SQL Server databases. " +
          "Experienced with WordPress customization and XML/XSLT for data transformation. " +
          "I focus on clean, maintainable code that delivers real value, from architectural decisions to final deployment.",
        da:
          "Full stack-udvikler med ekspertise i at bygge responsive web-applikationer med React, JavaScript, HTML og CSS. " +
          "Jeg designer og implementerer skalerbare backend-løsninger med ASP.NET og C# med SQL Server-databaser. " +
          "Erfaring med WordPress-tilpasning og XML/XSLT til datatransformation. " +
          "Jeg fokuserer på ren, vedligeholdelig kode, der leverer reel værdi fra arkitektur til deployment."
      },
      skillInfo: {
        en:
          "My development stack includes React for dynamic frontend interfaces, C# and ASP.NET for robust backend services, " +
          "and SQL Server for data management. I'm comfortable with full development lifecycle including design, implementation, " +
          "testing, and deployment. I value clean code, performance optimization, and creating intuitive user experiences.",
        da:
          "Mit udviklings-stakk includes React til dynamiske frontend-grænseflader, C# og ASP.NET til robuste backend-services, " +
          "og SQL Server til datastyring. Jeg er fortrolig med hele udviklingscyklus inklusive design, implementering, " +
          "test og deployment. Jeg værdisætter ren kode, performance-optimering og intuitive brugeroplevelser."
      }
    };
  } else if (role === 'it-support') {
    return {
      title: 'IT Support Specialist',
      quote: {
        en: "Service-minded IT supporter who takes ownership, solves issues thoroughly and makes technology feel simple.",
        da: "Serviceminded IT-supporter, der tager ansvar, løser problemer grundigt og gør teknologi enkel for brugeren."
      },
      info: {
        en:
          "IT supporter with experience in both 1st and 2nd level support and technical problem-solving. " +
          "I work structured and take ownership of cases from first contact to final resolution. " +
          "With a background in both IT and customer-facing roles, I am used to explaining technical issues " +
          "in a clear and calm way, even when things are busy. My technical foundation in systems and development " +
          "gives me a strong understanding of how solutions are built, but my focus is always on creating a smooth " +
          "and reliable experience for the end user.",
        da:
          "IT-supporter med erfaring inden for både 1st og 2nd level support og teknisk fejlfinding. " +
          "Jeg arbejder struktureret og tager ansvar for mine sager fra første henvendelse til endelig løsning. " +
          "Med baggrund i både IT og kundevendte roller er jeg vant til at forklare tekniske problemstillinger " +
          "klart og roligt, også når der er travlt. Min tekniske forståelse giver mig et solidt fundament, " +
          "men mit fokus er altid at skabe en stabil og tryg oplevelse for brugeren."
      },
      skillInfo: {
        en:
          "I combine technical support expertise with problem-solving abilities. My experience spans system troubleshooting, " +
          "user support, and technical documentation. I'm skilled at diagnosing issues quickly, communicating solutions clearly, " +
          "and maintaining systems to prevent problems. My development background helps me understand technical challenges deeply " +
          "and provide reliable, long-term solutions.",
        da:
          "Jeg kombinerer teknisk support-ekspertise med problemløsningsevner. Min erfaring omfatter system-fejlfinding, " +
          "bruger-support og teknisk dokumentation. Jeg kan diagnosticere problemer hurtigt, kommunikere løsninger klart " +
          "og vedligeholde systemer for at forhindre problemer. Min udviklings-baggrund hjælper mig med at forstå tekniske " +
          "udfordringer grundigt og give pålidelige, langsigtede løsninger."
      }
    };
  } else if (role === 'general') {
    return {
      title: 'Professional Profile',
      quote: {
        en: "Versatile professional with a diverse skill set, combining technical expertise with strong problem-solving and communication abilities.",
        da: "Alsidig professionel med et bredt kompetencesæt, der kombinerer teknisk ekspertise med stærke problemløsnings- og kommunikationsevner."
      },
      info: {
        en:
          "Professional with a comprehensive background spanning IT support, software development, and diverse project work. " +
          "I bring technical depth combined with a service-minded approach to solving challenges. " +
          "Experienced in both technical implementation and user-focused problem solving, I excel at bridging the gap between complex technical concepts " +
          "and practical business needs. My background enables me to work effectively across different roles and industries.",
        da:
          "Professionel med en omfattende baggrund inden for IT support, softwareudvikling og varieret projektarbejde. " +
          "Jeg bringer teknisk dybde kombineret med en serviceminded tilgang til problemløsning. " +
          "Erfaring med både teknisk implementering og brugerfokuseret problemløsning gør mig i stand til at bygge bro mellem komplekse tekniske koncepter " +
          "og praktiske forretningsbehov. Min baggrund gør mig i stand til at arbejde effektivt på tværs af forskellige roller og brancher."
      },
      skillInfo: {
        en:
          "My professional toolkit includes both technical development skills (frontend, backend, databases) and support expertise (troubleshooting, user support, systems administration). " +
          "I combine these with strong soft skills: clear communication, structured problem-solving, and the ability to adapt to different environments. " +
          "Whether building solutions, supporting users, or coordinating across teams, I bring the same commitment to quality and continuous improvement.",
        da:
          "Mit professionelle værktøj omfatter både tekniske udviklingsfærdigheder (frontend, backend, databaser) og support-ekspertise (fejlfinding, bruger-support, systemadministration). " +
          "Jeg kombinerer disse med stærke personlige kompetencer: klar kommunikation, struktureret problemløsning og evnen til at tilpasse mig forskellige miljøer. " +
          "Uanset om jeg bygger løsninger, supporter brugere eller koordinerer på tværs af teams, bringer jeg samme dedikation til kvalitet og kontinuerlig forbedring."
      }
    };
  }

  return null;
};

// Role-specific emphasis for sections
export const getExperienceEmphasis = (role) => {
  if (role === 'developer') {
    return {
      highlightKeywords: ['development', 'built', 'designed', 'implemented', 'frontend', 'backend', 'API', 'react', 'database'],
      descriptionFocus: 'technical'
    };
  } else if (role === 'it-support') {
    return {
      highlightKeywords: ['support', 'resolved', 'troubleshot', 'maintained', 'user support', 'systems', 'documented', 'trained'],
      descriptionFocus: 'support'
    };
  } else if (role === 'general') {
    return {
      highlightKeywords: ['developed', 'supported', 'managed', 'implemented', 'solved', 'coordinated', 'optimized', 'improved'],
      descriptionFocus: 'balanced'
    };
  }

  return null;
};
