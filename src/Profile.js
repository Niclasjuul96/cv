const user = {
    id: 0,
    name: "Niclas",
    lastName: "Juul Schæffer",
    title: { en: "Full-Stack Developer" },
    title2: { en: "Pragmatic problem solver" },
    phone: "+45 22 20 78 12",
    mail: "Niclasschaeffer96@gmail.com",
    license: "AM, B",
    webpage: "https://niclasjuul.dk",
    linkedin: "https://www.linkedin.com/in/niclas-juul-schaeffer/",
    github: "https://github.com/Niclasjuul96",
    qoute: {
        en: "Calm, user-focused developer with a bias for action and continuous learning.",
        da: "Udvikling handler om at skabe løsninger, der ikke kun er funktionelle, men også skalerbare, brugervenlige og bygget til at holde."
    },
    info: {
        en: "Full-stack developer specializing in ASP.NET, C#, SQL Server, and Entity Framework. I build APIs, "+
        "integrate XML and legacy systems, and craft intuitive React frontends. I also develop custom WordPress "+
        "plugins and extend functionality beyond standard templates. I write clean, maintainable code and enjoy "+
        "turning complex challenges into practical, robust solutions.",

        en: "Full-stack developer with broad knowledge across different technologies and frameworks. I have worked most with " +
        "ASP.NET, C#, SQL Server, and Entity Framework for backend development, and React, JavaScript, HTML, and CSS for building " +
        "frontend interfaces. I also have experience with WordPress (custom themes/plugins) and data integration using XML/XSLT. " +
        "I focus on writing clean, maintainable code and enjoy solving complex problems with practical solutions.",

        da: "Full-stack udvikler med bred viden indenfor forskellige teknologier og frameworks. Jeg har især arbejdet med " +
        "ASP.NET, C#, SQL Server og Entity Framework til backend-udvikling samt React, JavaScript, HTML og CSS til at bygge " +
        "frontend-grænseflader. Jeg har også erfaring med WordPress (custom temaer/plugins) og dataintegration med XML/XSLT. " +
        "Jeg fokuserer på at skrive ren, vedligeholdelig kode og nyder at løse komplekse problemer med praktiske løsninger."
    },

    skillInfo: {
        en: "As you explore my profile, you'll discover my comprehensive skills as a full-stack developer. " +
        "From building scalable backend solutions with ASP.NET, C# and SQL Server to creating intuitive " +
        "frontend interfaces with React, JavaScript, HTML and CSS, I deliver clean and user-focused web applications. " +
        "I also have experience with WordPress, developing custom themes and extending functionality, as well as " +
        "working with XML and XSLT for data transformation and system integration. I am committed to continuous learning " +
        "and take pride in writing maintainable, efficient code that solves real business challenges.",

        da: "Når du udforsker min profil, vil du opdage mine omfattende færdigheder som full-stack udvikler. " +
        "Fra at bygge skalerbare backend-løsninger med ASP.NET, C# og SQL Server til at skabe intuitive " +
        "frontend-grænseflader med React, JavaScript, HTML og CSS leverer jeg rene og brugervenlige webapplikationer. " +
        "Jeg har også erfaring med WordPress, hvor jeg har udviklet skræddersyede temaer og udvidet funktionalitet, " +
        "samt arbejdet med XML og XSLT til datatransformation og systemintegration. Jeg er engageret i løbende læring " +
        "og sætter en ære i at skrive vedligeholdelig og effektiv kode, der løser reelle forretningsbehov."
    },

    softSkills: [
    {
        name: { en: "Supporter (Green) profile", da: "Supporter (Grøn) profil" },
        level: 5,
        text: {
        en: "A steady, people-first style that builds trust and harmony. I bring calm and stability "+
        "to delivery and keep relationships strong over time.",
        da: "En stabil, menneskefokuseret stil, der skaber tillid og harmoni. Jeg bidrager med ro og "+
        "stabilitet i leverancer og vedligeholder stærke relationer over tid."
        }
    },
    {
        name: { en: "Empathy & active listening", da: "Empati & aktiv lytning" },
        level: 5,
        text: {
        en: "Stakeholder needs are heard and translated into practical solutions, so users feel included and understood.",
        da: "Interessenters behov bliver hørt og oversat til praktiske løsninger, så brugerne føler sig inkluderet og forstået."
        }
    },
    {
        name: { en: "Reliability & follow-through", da: "Pålidelighed & opfølgning" },
        level: 5,
        text: {
        en: "Commitments are kept, expectations set early, and loops closed. Teammates can depend on me—especially under pressure.",
        da: "Aftaler bliver overholdt, forventninger afstemt tidligt, og der følges op. Teamet kan regne med mig—særligt under pres."
        }
    },
    {
        name: { en: "Calm, patient collaboration", da: "Roligt, tålmodigt samarbejde" },
        level: 4,
        text: {
        en: "Conflicts are de-escalated and different views mediated to keep momentum without friction.",
        da: "Konflikter nedtrappes, og forskellige synspunkter mægles, så fremdriften bevares uden friktion."
        }
    },
    {
        name: { en: "Quality & consistency", da: "Kvalitet & konsistens" },
        level: 4,
        text: {
        en: "Maintainable solutions, clear naming, and predictable processes. Decisions are documented to support continuity.",
        da: "Vedligeholdelige løsninger, klare navngivninger og forudsigelige processer. Beslutninger dokumenteres for at sikre kontinuitet."
        }
    },
    {
        name: { en: "Team dynamics", da: "Teamdynamik" },
        level: 5,
        text: {
        en: "Pairs well with Red drivers (speed) by adding risk-awareness and stakeholder care; with Blue analysts "+
        "(precision) by connecting details to user impact; with Yellow ideators (energy) by grounding ideas in "+
        "executable plans. Best with clear goals, time to prepare, and open, respectful communication.",
        da: "Matcher godt med Rød (tempo) ved at tilføre risikobevidsthed og fokus på interessenter; med "+
        "Blå (præcision) ved at koble detaljer til brugerimpact; med Gul (energi) ved at forankre idéer i "+
        "gennemførlige planer. Arbejder bedst med tydelige mål, forberedelsetid og åben, respektfuld kommunikation."
        }
    }
    ],


    workExp: [
  {
    date: "Mar. 2025 - now",
    company: "Developer - ITAGIL",
    description: {
      en: "At ITAGIL, tailored software solutions are developed for clients. The company's CMS is enhanced,"+
      " and client websites are built and maintained to meet specific requirements. New features are delivered,"+
      " existing systems are maintained and optimized, and issues are diagnosed and resolved to ensure reliability."+
      " Projects are delivered efficiently and to a high standard through close team collaboration.",
      da: "Hos ITAGIL udvikles skræddersyede softwareløsninger til kunder. Virksomhedens CMS videreudvikles,"+
      " og kunders hjemmesider bygges og vedligeholdes efter deres behov. Nye funktioner leveres, eksisterende"+
      " systemer vedligeholdes og optimeres, og problemer diagnosticeres og løses for at sikre stabil drift. "+
      "Projekter leveres effektivt og i høj kvalitet gennem tæt samarbejde i teamet."
    }
  },
  {
    date: "Jun. 2022 - Aug. 2023",
    company: "Webshop Assistant - Alex Cykler (Part time)",
    description: {
      en: "At Alex Cykler, the e-commerce webshop was established and maintained. Product listings were created"+
      " and kept up to date to ensure accurate information across the platform. Warehouse operations were supported,"+
      " including packing and shipping customer orders.",
      da: "Hos Alex Cykler blev e-commerce-webshoppen etableret og vedligeholdt. Produktlister blev oprettet og "+
      "løbende opdateret for at sikre korrekte oplysninger på platformen. Lageropgaver blev understøttet, herunder "+
      "pakning og forsendelse af kundeordrer."
    }
  }
],

education: [
  {
    date: "Jun. 2022 - Feb. 2025",
    name: {
      en: "Software engineering at DTU",
      da: "Software Engineering på DTU"
    },
    description: {
      en: "At DTU, a solid foundation in software engineering was established. Coursework included algorithms and data structures,"+
      " computer systems, distributed applications, UX design and prototyping, and software engineering methodologies. "+
      "Project management skills were developed, and practical programming assignments connected theory with application.",
      da: "På DTU blev der opbygget et solidt fundament i software engineering. Forløbet omfattede algoritmer og datastrukturer,"+
      " computersystemer, distribuerede applikationer, UX-design og prototypeudvikling samt software engineering-metoder. "+
      "Projektledelseskompetencer blev udviklet, og praktiske programmeringsopgaver bandt teori sammen med anvendelse."
    }
  },
  {
    date: "Jan. 2016 - Jun. 2021",
    name: {
      en: "Datatechnitian specialized in Programming - EUX TEC Ballerup",
      da: "Datatekniker med speciale i programmering - EUX TEC Ballerup"
    },
    description: {
      en: "At EUX TEC Ballerup, a specialization as a datatechnician in programming was completed. "+
      "Broad exposure was gained across IT disciplines, including Java and C# programming, database systems, "+
      "Linux and Windows server technologies, virtualization, embedded systems, and mobile application development. "+
      "Emphasis was also placed on IT service management, networking, and system development through project-oriented work.",
      da: "På EUX TEC Ballerup blev en specialisering som datatekniker med fokus på programmering gennemført. "+
      "Der blev opnået bred indsigt i IT-discipliner, herunder programmering i Java og C#, databasesystemer, "+
      "Linux- og Windows-serverteknologier, virtualisering, indlejrede systemer og udvikling af mobile applikationer. "+
      "Der blev også lagt vægt på IT-service management, netværk og systemudvikling gennem projektorienteret arbejde."
    }
  }
],

otherExp: [
  {
    date: "Dec. 2019 - Mar. 2025",
    name: "Bog og Ide",
    description: {
      en: "Sales and customer service activities were handled, including selling books, board games, and toys "+
      "and assisting customers with their requests. Communication skills were strengthened and a service-minded "+
      "approach was reinforced.",
      da: "Salg og kundeservice blev håndteret, herunder salg af bøger, brætspil og legetøj samt hjælp til "+
      "kunders forespørgsler. Kommunikationsevner blev styrket, og en serviceorienteret tilgang blev understøttet."
    }
  },
  {
    date: "Aug. 2016 - May. 2022",
    name: "IT Support Specialist - Technical Education Copenhagen",
    description: {
      en: "First- and second-level support was provided, with hardware and software issues diagnosed and resolved and "+
      "technical assistance delivered to users. System maintenance and optimization were carried out, while experience "+
      "was gained in web development and IT service management.",
      da: "1. og 2. level support blev ydet, hvor hardware- og softwareproblemer blev diagnosticeret og løst, og "+
      "teknisk assistance blev leveret til brugere. Systemvedligeholdelse og optimering blev udført, og der blev "+
      "opnået erfaring med webudvikling og IT-service management."
    }
  },
  {
    date: "Apr. 2017 - Jun. 2021",
    name: "Beredskabets venner",
    description: {
      en: "Tasks related to customer service, communications, and situation handling were supported, fostering a "+
      "calm and solution-oriented approach to unexpected challenges.",
      da: "Opgaver inden for kundeservice, kommunikation og situationshåndtering blev understøttet, "+
      "hvilket styrkede en rolig og løsningsorienteret tilgang til uventede udfordringer."
    }
  }
],


    spareTime: {
        en: "I spend most of my spare time with my family, including my two kids, "+
        "enjoying quality moments together. Additionally, I prioritize staying active by "+
        "running and going to the gym, which helps me maintain both physical and mental well-being.",
        da: "Jeg bruger det meste af min fritid sammen med min familie, herunder mine to børn, "+
        "hvor vi nyder kvalitetstid sammen. Derudover prioriterer jeg at holde mig aktiv ved at løbe "+
        "og gå i fitness, hvilket hjælper mig med at opretholde både fysisk og mental velvære."
    },

    spokenLangs: [
        { en: "Danish - Native", da: "Dansk - Modersmål" },
        { en: "English - Fluent", da: "Engelsk - Flydende" }
    ]
}

export default user;
