const user = {
  id: 0,
  name: "Niclas",
  lastName: "Juul Schæffer",
  title: { en: "IT Specialist – Development & Support" },
  title2: { en: "Pragmatic, people-focused problem solver" },
  phone: "+45 22 20 78 12",
  mail: "Niclasschaeffer96@gmail.com",
  license: "AM, B",
  webpage: "https://niclasjuul.dk",
  linkedin: "https://www.linkedin.com/in/niclas-juul-schaeffer/",
  github: "https://github.com/Niclasjuul96",
  qoute: {
    en: "Calm, user-focused IT specialist who moves confidently between development, support and operations.",
    da: "Rolig, brugernær IT-professionel, der bevæger sig sikkert mellem udvikling, support og drift."
  },
  info: {
    en:
      "IT generalist with a combined background in full-stack development, IT support and customer-facing work. " +
      "I build and maintain solutions with ASP.NET, C#, SQL Server and Entity Framework, and create intuitive React frontends. " +
      "Through earlier roles in IT support and retail, I am used to meeting users where they are, translating needs into " +
      "practical solutions and following issues through until they are resolved. I enjoy connecting systems, people and " +
      "processes so that everyday work becomes simpler and more reliable.",

    da:
      "IT-generalist med en kombineret baggrund inden for full-stack udvikling, IT-support og kundevendte roller. " +
      "Jeg bygger og vedligeholder løsninger med ASP.NET, C#, SQL Server og Entity Framework og udvikler intuitive " +
      "frontend-grænseflader i React. Gennem tidligere roller i IT-support og detailhandel er jeg vant til at møde " +
      "brugerne i øjenhøjde, omsætte behov til praktiske løsninger og følge sager helt til dørs. Jeg trives med at " +
      "binde systemer, mennesker og processer sammen, så hverdagen bliver enklere og mere driftssikker."
  },

  skillInfo: {
    en:
      "As you explore my profile, you'll see a broad IT skill set that combines software development, support and operations. " +
      "I build scalable backend solutions with ASP.NET, C# and SQL Server and create intuitive frontend interfaces with React, " +
      "JavaScript, HTML and CSS. I also work with WordPress, custom themes and extensions, and use XML and XSLT for data " +
      "transformation and system integration. From debugging incidents and supporting end users to implementing new features, " +
      "I focus on maintainable, efficient solutions that solve real business and day-to-day challenges.",

    da:
      "Når du udforsker min profil, vil du se et bredt IT-kompetencesæt, der kombinerer softwareudvikling, support og drift. " +
      "Jeg bygger skalerbare backend-løsninger med ASP.NET, C# og SQL Server og skaber intuitive frontend-grænseflader med " +
      "React, JavaScript, HTML og CSS. Jeg arbejder også med WordPress, skræddersyede temaer og udvidelser samt XML og XSLT " +
      "til datatransformation og systemintegration. Fra fejlsøgning og bruger-support til implementering af nye funktioner " +
      "har jeg fokus på vedligeholdelige, effektive løsninger, der løser både forretningsmæssige og dagligdags behov."
  },

  softSkills: [
    {
      name: { en: "People-centred coordination (ESFJ-T)", da: "Menneskecentreret koordinering (ESFJ-T)" },
      level: 5,
      text: {
        en: "Warm, inclusive facilitation that builds trust and momentum. Everyone is heard, morale is protected, and collaboration stays smooth.",
        da: "Varm, inkluderende facilitering, der skaber tillid og fremdrift. Alle bliver hørt, trivslen prioriteres, og samarbejdet forbliver smidigt."
      }
    },
    {
      name: { en: "Stakeholder communication & empathy", da: "Interessentkommunikation & empati" },
      level: 5,
      text: {
        en: "Needs are translated into clear, actionable requirements; expectations are aligned early; the user perspective is kept front and centre.",
        da: "Behov oversættes til klare, handlingsorienterede krav; forventninger afstemmes tidligt; brugerperspektivet holdes i fokus."
      }
    },
    {
      name: { en: "Structure & follow-through", da: "Struktur & opfølgning" },
      level: 5,
      text: {
        en: "Plans, priorities, and checklists keep delivery on time. Loose ends are closed and ceremonies run predictably.",
        da: "Planer, prioriteringer og tjeklister sikrer rettidig levering. Løse ender lukkes, og ceremonier kører forudsigeligt."
      }
    },
    {
      name: { en: "Quality & consistency", da: "Kvalitet & konsistens" },
      level: 4,
      text: {
        en: "Clear standards, naming, documentation, and acceptance criteria. Pragmatic quality that supports maintainability.",
        da: "Tydelige standarder, navngivning, dokumentation og acceptkriterier. Pragmatisk kvalitet, der understøtter vedligeholdelse."
      }
    },
    {
      name: { en: "Feedback-driven growth", da: "Feedback-drevet udvikling" },
      level: 4,
      text: {
        en: "Feedback is actively sought and turned into concrete improvements. Sensitive to signals yet resilient and adaptive.",
        da: "Feedback opsøges aktivt og omsættes til konkrete forbedringer. Følsom for signaler, men robust og omstillingsparat."
      }
    },
    {
      name: { en: "Team dynamics (ESFJ-T)", da: "Teamdynamik (ESFJ-T)" },
      level: 5,
      text: {
        en: "Pairs well with analysts by humanising data; with ideators by turning ideas into clear plans; with drivers by aligning people and process. Creates psychological safety and sustained pace.",
        da: "Matcher godt med analytikere (præcision) ved at humanisere data; med idéskabere (vision) ved at omsætte idéer til klare planer; med drivere (tempo) ved at skabe alignment mellem mennesker og proces. Skaber psykologisk tryghed og vedvarende tempo."
      }
    }
  ],

  workExp: [
  {
    date: "Mar. 2025 - December 2025",
    company: "Developer - ITAGIL",
    description: {
      en:
        "At ITAGIL, tailored software solutions are developed for clients. The company's CMS is enhanced," +
        " and client websites are built and maintained to meet specific requirements. New features are delivered," +
        " existing systems are maintained and optimized, and issues are diagnosed and resolved to ensure reliability." +
        " Projects are delivered efficiently and to a high standard through close team collaboration.",
      da:
        "Hos ITAGIL udvikles skræddersyede softwareløsninger til kunder. Virksomhedens CMS videreudvikles," +
        " og kunders hjemmesider bygges og vedligeholdes efter deres behov. Nye funktioner leveres, eksisterende" +
        " systemer vedligeholdes og optimeres, og problemer diagnosticeres og løses for at sikre stabil drift. " +
        "Projekter leveres effektivt og i høj kvalitet gennem tæt samarbejde i teamet."
    }
  },
  {
    date: "Jun. 2022 - Aug. 2023",
    company: "Webshop Assistant - Alex Cykler (Part time)",
    description: {
      en:
        "At Alex Cykler, the e-commerce webshop was established and maintained. Product listings were created" +
        " and kept up to date to ensure accurate information across the platform. Warehouse operations were supported," +
        " including packing and shipping customer orders.",
      da:
        "Hos Alex Cykler blev e-commerce-webshoppen etableret og vedligeholdt. Produktlister blev oprettet og " +
        "løbende opdateret for at sikre korrekte oplysninger på platformen. Lageropgaver blev understøttet, herunder " +
        "pakning og forsendelse af kundeordrer."
    }
  },
  {
    date: "Aug. 2016 - May. 2022",
    company: "IT Support Specialist - Technical Education Copenhagen",
    description: {
      en:
        "First- and second-level support was provided, with hardware and software issues diagnosed and resolved and " +
        "technical assistance delivered to users. System maintenance and optimization were carried out, while experience " +
        "was gained in web development and IT service management.",
      da:
        "1. og 2. level support blev ydet, hvor hardware- og softwareproblemer blev diagnosticeret og løst, og " +
        "teknisk assistance blev leveret til brugere. Systemvedligeholdelse og optimering blev udført, og der blev " +
        "opnået erfaring med webudvikling og IT-service management."
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
        en:
          "At DTU, a solid foundation in software engineering was established. Coursework included algorithms and data structures," +
          " computer systems, distributed applications, UX design and prototyping, and software engineering methodologies. " +
          "Project management skills were developed, and practical programming assignments connected theory with application.",
        da:
          "På DTU blev der opbygget et solidt fundament i software engineering. Forløbet omfattede algoritmer og datastrukturer," +
          " computersystemer, distribuerede applikationer, UX-design og prototypeudvikling samt software engineering-metoder. " +
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
        en:
          "At EUX TEC Ballerup, a specialization as a datatechnician in programming was completed. " +
          "Broad exposure was gained across IT disciplines, including Java and C# programming, database systems, " +
          "Linux and Windows server technologies, virtualization, embedded systems, and mobile application development. " +
          "Emphasis was also placed on IT service management, networking, and system development through project-oriented work.",
        da:
          "På EUX TEC Ballerup blev en specialisering som datatekniker med fokus på programmering gennemført. " +
          "Der blev opnået bred indsigt i IT-discipliner, herunder programmering i Java og C#, databasesystemer, " +
          "Linux- og Windows-serverteknologier, virtualisering, indlejrede systemer og udvikling af mobile applikationer. " +
          "Der blev også lagt vægt på IT-service management, netværk og systemudvikling gennem projektorienteret arbejde."
      }
    }
  ],

otherExp: [
  {
    // Multiple periods in the same role
    date: ["Dec. 2019 - Mar. 2025", "Dec. 2025 - Dec. 2025"],
    name: "Bog og Ide",
    description: {
      en:
        "Sales and customer service activities were handled, including selling books, board games, and toys " +
        "and assisting customers with their requests. Communication skills were strengthened and a service-minded " +
        "approach was reinforced.",
      da:
        "Salg og kundeservice blev håndteret, herunder salg af bøger, brætspil og legetøj samt hjælp til " +
        "kunders forespørgsler. Kommunikationsevner blev styrket, og en serviceorienteret tilgang blev understøttet."
    }
  },
  {
    date: "Apr. 2017 - Jun. 2021",
    name: "Beredskabets venner",
    description: {
      en:
        "Tasks related to customer service, communications, and situation handling were supported, fostering a " +
        "calm and solution-oriented approach to unexpected challenges.",
      da:
        "Opgaver inden for kundeservice, kommunikation og situationshåndtering blev understøttet, " +
        "hvilket styrkede en rolig og løsningsorienteret tilgang til uventede udfordringer."
    }
  }
],



  spareTime: {
    en:
      "I spend most of my spare time with my family, including my two kids, " +
      "enjoying quality moments together. Additionally, I prioritize staying active by " +
      "running and going to the gym, which helps me maintain both physical and mental well-being.",
    da:
      "Jeg bruger det meste af min fritid sammen med min familie, herunder mine to børn, " +
      "hvor vi nyder kvalitetstid sammen. Derudover prioriterer jeg at holde mig aktiv ved at løbe " +
      "og gå i fitness, hvilket hjælper mig med at opretholde både fysisk og mental velvære."
  },

  spokenLangs: [
    { en: "Danish - Native", da: "Dansk - Modersmål" },
    { en: "English - Fluent", da: "Engelsk - Flydende" }
  ]
};

export default user;
