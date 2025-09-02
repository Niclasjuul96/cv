import profileImage from "./Profile.jpg";

const user = {
    id: 0,
    name: "Niclas",
    lastName: "Juul Schæffer",
    image: profileImage,
    title: { en: "Full-Stack Developer" },
    title2: { en: "Pragmatic problem solver" },
    phone: "+45 22 20 78 12",
    mail: "Niclasschaeffer96@gmail.com",
    license: "AM, B",
    webpage: "https://niclasjuul.dk https://niclasjuul.com",
    linkedin: "https://www.linkedin.com/in/niclas-juul-schaeffer/",
    github: "https://github.com/Niclasjuul96",
    qoute: {
        en: "Development is about creating solutions that are not only functional, but also scalable, user-friendly, and built to last.",
        da: "Udvikling handler om at skabe løsninger, der ikke kun er funktionelle, men også skalerbare, brugervenlige og bygget til at holde."
    },
    info: {
        en: "Full-stack developer with broad knowledge across different technologies and frameworks. I have worked most with " +
        "ASP.NET, C#, SQL Server, and Entity Framework for backend development, and React, JavaScript, HTML, and CSS for building " +
        "frontend interfaces. I also have experience with WordPress (custom themes/plugins) and data integration using XML/XSLT. " +
        "I focus on writing clean, maintainable code and enjoy solving complex problems with practical solutions.",

        da: "Full-stack udvikler med bred viden indenfor forskellige teknologier og frameworks. Jeg har især arbejdet med " +
        "ASP.NET, C#, SQL Server og Entity Framework til backend-udvikling samt React, JavaScript, HTML og CSS til at bygge " +
        "frontend-grænseflader. Jeg har også erfaring med WordPress (custom temaer/plugins) og dataintegration med XML/XSLT. " +
        "Jeg fokuserer på at skrive ren, vedligeholdelig kode og nyder at løse komplekse problemer med praktiske løsninger."
    },

    languages: [
        { name: "Csharp", level: 3 },
        { name: "ASP.net", level: 3 },
        { name: "SqlServer", level: 3 },
        { name: "React", level: 3 },
        { name: "Js", level: 4 },
        { name: "Typescript", level: 2 },
        { name: "Css", level: 3 },
        { name: "Html", level: 3 },
        { name: "Git", level: 4 },
        { name: "WordPress", level: 3 },
        { name: "Php", level: 3 },
        { name: "Python", level: 3 },
        { name: "Java", level: 3 },
        { name: "Springboot", level: 2 },
        { name: "Mysql", level: 3 },
        { name: "Electron", level: 2 },
        { name: "Powershell", level: 2 },
        { name: "Xml", level: 3 },
        { name: "Xslt", level: 3 }
    ],
    software: [
        // Core developer stack
        { name: "Visual Studio Community" },
        { name: "VS Code" },
        { name: "IntelliJ" },
        { name: "GitHub" },
        { name: "SQL Server Management Studio" },
        { name: "Entity Framework" },
        { name: "ASP.NET" },
        { name: "Next.js" },
        { name: "NestJS" },
        { name: "Node.js" },
        { name: "npm" },
        { name: "React" },
        { name: "WordPress" },
        { name: "Prism (WPF)" },

        // DevOps & system integration
        { name: "Docker" },
        { name: "Azure" },
        { name: "Postman" },
        { name: "Figma" },

        // Operating systems & platforms
        { name: "Windows" },
        { name: "Linux" },
        { name: "MacOS" },
        { name: "VMware" },
        { name: "Android" },

        // IT-support / infrastructure background
        { name: "Windows Server" },
        { name: "Active Directory" },
        { name: "Microsoft 365" },
        { name: "PowerShell" },
        { name: "Remote Desktop" },
        { name: "TeamViewer" },
        { name: "ServiceNow" },
        { name: "Jira" },
        { name: "Slack" },
        { name: "Zoom" }
    ],

    softSkills: [
        {
            name: "Service-minded",
            level: 4,
            text: {
                en: "Always putting the customer first and focusing on giving the customer the best possible experience.",
                da: "Altid at sætte kunden først og fokusere på at give kunden den bedst mulige oplevelse."
            }
        },
        {
            name: {
                en: "Punctual",
                da: "Punktlig"
            },
            level: 3,
            text: {
                en: "I am detail oriented, would like to achieve a certain standard of what I develop.",
                da: "Jeg er detaljeorienteret, vil gerne opnå en vis standard for det, jeg udvikler."
            }
        },
        {
            name: {
                en: "Passionate",
                da: "Lidenskabelig"
            },
            level: 5,
            text: {
                en: "I have a passion in this profession that makes me love what I do, which evolves into a better product. As it is of great importance to me that the product is made with a good standard.",
                da: "Jeg har en passion i dette erhverv, som får mig til at elske det, jeg gør, og som udvikler sig til et bedre produkt. Da det er af stor betydning for mig, at produktet er lavet med en god standard."
            }
        }
    ],
    workExp: [
        {
            date: "Mar. 2025 - now",
            company: "ITAGIL - Developer",
            assignments: [
                { en: "Software Developer", da: "Softwareudvikler" },
                { en: "Developing software for clients", da: "Udvikle software til kunder" },
                { en: "Maintaining and optimizing software", da: "Vedligeholde og optimere software" },
                { en: "Troubleshooting software issues", da: "Fejlfinding af softwareproblemer" },
                { en: "Collaborating with team members", da: "Samarbejde med teammedlemmer" },
                { en: "Primarily used CI/CD for deployment", da: "Primært brugt CI/CD for udgivelse"}

            ]
        },
        {
            date: "Jun. 2022 - Aug. 2023",
            company: "Alex Cykler (Part time) - Webshop Assistant",
            assignments: [
                { en: "Assisting to create a webshop (e-commence)", da: "Hjælpe med at lave en webshop (e-commence)"},
                { en: "Creating Items in the webshop (e-commence)", da: "Oprette vare på webshoppen (e-commence)"},
                { en: "Update item informations. (e-commence)", da: "Opdatere genstandes informationer (e-commence)"},
                { en: "Helping on the warehouse", da: "Hjælpe på lageret"},
                { en: "Pack and send packages", da: "Pakke og sende pakker"}
            ]
        },
        {
            date: "Aug. 2016 - May. 2022",
            company: "Technical Education Copenhagen - IT Support Specialist",
            assignments: [
                { en: "IT-Support Internship", da: "IT-Support Elev" },
                { en: "Web Developer", da: "Web udvikler" },
                { en: "1st and 2nd Level IT Support", da: "1. og 2. niveau IT-support" },
                { en: "Troubleshooting hardware and software issues", da: "Fejlfinding af hardware- og softwareproblemer" },
                { en: "Technical assistance for users", da: "Teknisk support til brugere" },
                { en: "System maintenance and optimization", da: "Vedligeholdelse og optimering af systemer" }
            ]
            
        } 
    ],
    education: [
        {
            date: "Jun. 2022 - Feb. 2025",
            name: {
                en: "Software engineering at DTU",
                da: "Software Engineering på DTU"
            },
            subjects: [
                "Algorithms and Data Structures",
                "Computer Systems",
                "Introduction to Coordination of Distributed Applications",
                "UX Design and Prototype Development",
                "Software Engineering",
                "Project Management",
                "Physics 1",
                "Introductory Programming"
            ]
        },
        {
            date: "Jan. 2016 - Jun. 2021",
            name: {
                en: "EUX TEC Ballerup - Datatechnitian specialized in Programming",
                da: "EUX TEC Ballerup - Datatekniker med speciale i programmering"
            },
            subjects: [
                "Information Technology.",
                "Technical Subjects - Design and Production",
                "Advanced Operating Systems",
                "Backup Technology",
                "Computer Technology",
                "Server Technology - Linux",
                "Server Technology - Database Server",
                "Programming (Java)",
                "Programming (C#)",
                "Database Systems",
                "IT Requirement Specification",
                "System Development and Project Management",
                "Virtualization",
                "Embedded Controller",
                "Programming of Mobile Applications",
                "IT Service Management",
                "Network Technology",
                "Web Server Technology"
            ]
        },
        {
            date: "Jun. 2014 - Dec. 2015",
            name: {
                en: "STX Ørestad Gymnasium",
                da: "STX Ørestad Gymnasium",
            },
            subjects: [
                "Danish",
                "Mathematics",
                "Physics",
                "BioTechnology"
            ]
        },
        {
            date: "Jun. 2013 - Jun. 2014",
            name: {
                en: "Odsherred Efterskole 10th grade",
                da: "Odsherred Efterskole 10. klasse",
            },
            subjects: [
                "Danish",
                "Mathematics",
                "Photography / Editing",
                "cadet line subject"
            ]
        },
        {
            date: "Jun. 2003 - Jun. 2013",
            name: {
                en: "Public school Løjtegårdsskolen",
                da: "Folkeskole Løjtegårdsskolen",
            },
            subjects: [
                "Many subjects"
            ]
        }
    ],
    otherExp: [
        {
            date: "Dec. 2019 - Mar. 2025",
            name: "Bog og Ide", 
            assignments: [
                { en: "Sales of books", da: "Salg af bøger"}, 
                { en: "Sales of board games", da: "salg af brætspil"},
                { en: "Sales of toys", da: "Salg af legetøj"},
                { en: "Assisting Customers requests.", da: "giver god kundeservice" }

            ]
        },
        {
            date: "Apr. 2017 - Jun. 2021",
            name: "Beredskabets venner",
            assignments: [
                { en: "Customer service", da: "Kundeservice"}, 
                { en: "Communications", da: "kommunikation"},
                { en: "Situation handling", da: "Situations håndtering"},  
            ]
        }
    ],
    spareTime: {
        en: "I spend most of my spare time with my family, including my two kids, " +
        "enjoying quality moments together. Additionally, I prioritize staying active by "+
        "running and going to the gym, which helps me maintain both physical and mental well-being.",
        da: "Jeg bruger det meste af min fritid sammen med min familie, herunder mine to børn, " + 
        "hvor vi nyder kvalitetstid sammen. Derudover prioriterer jeg at holde mig aktiv ved at løbe " + 
        "og gå i fitness, hvilket hjælper mig med at opretholde både fysisk og mental velvære."
    },
    spokenLangs: [
        { en: "Danish - Native", da: "Dansk - Modersmål" },
        { en: "English - Fluent", da: "Engelsk - Flydende" }
    ]
}

export default user;