import profileImage from "./Profile.jpg";

const user = {
    id: 0,
    name: "Niclas",
    lastName: "Juul Schæffer",
    image: profileImage,
    title: { en: "IT Support Specialist" },
    title2: { en: "Problem-Solver" },
    phone: "+45 22 20 78 12",
    mail: "Niclasschaeffer96@gmail.com",
    license: "AM, B",
    qoute: {
        en: "IT support is about empowering users and ensuring technology works seamlessly in their favor.",
        da: "IT-support handler om at give brugerne muligheder og sikre, at teknologien fungerer gnidningsfrit for dem."
    },
    info: {
        en: "I am a dedicated IT Support Specialist with a passion for troubleshooting and solving technical challenges. "+
        "My expertise lies in helping users efficiently, maintaining systems, and ensuring smooth operations. "+
        "I thrive on diagnosing and resolving issues, enabling teams to stay productive. With strong organizational skills and a drive for continuous improvement, "+
        "I aim to bridge the gap between people and technology.",

        da: "Jeg er en dedikeret IT-supportspecialist med en passion for fejlfinding og løsning af tekniske udfordringer. "+
        "Min ekspertise ligger i effektivt at hjælpe brugere, vedligeholde systemer og sikre gnidningsfri drift. "+
        "Jeg trives med at diagnosticere og løse problemer, så teams kan forblive produktive. Med stærke organisatoriske færdigheder "+
        "og en drivkraft for løbende forbedring stræber jeg efter at bygge bro mellem mennesker og teknologi."
    },
    skillInfo: {
        en: "As you explore my profile, you'll discover my comprehensive skills in IT support. "+
        "From managing Active Directory and troubleshooting hardware to scripting in PowerShell and "+
        "administering cloud platforms, my expertise enables me to deliver effective technical solutions. "+
        "I am committed to continuous learning and take pride in ensuring reliable and user-friendly IT systems.",
        da: "Når du udforsker min profil, vil du opdage mine omfattende færdigheder inden for IT-support. "+
        "Fra styring af Active Directory og fejlfinding af hardware til scripting i PowerShell og administration af "+
        "cloud-platforme, gør min ekspertise mig i stand til at levere effektive tekniske løsninger. "+
        "Jeg er engageret i løbende læring og sætter en ære i at sikre pålidelige og brugervenlige IT-systemer."
    },
    languages: [
        {
            name: "Csharp",
            level: 3
        },
        {
            name: "Python",
            level: 3
        },
        {
            name: "Typescript",
            level: 2
        },
        {
            name: "Css",
            level: 3
        },
        {
            name: "Git",
            level: 4
        },
        {
            name: "Java",
            level: 3
        },
        {
            name: "Js",
            level: 4
        },
        {
            name: "Php",
            level: 1
        },
        {
            name: "Powershell",
            level: 2
        },
        {
            name: "Mysql",
            level: 3
        },
        {
            name: "React",
            level: 3
        },
        {
            name: "Springboot",
            level: 2
        },
        {
            name: "Electron",
            level: 2
        }
    ],
    software: [
        {
            name: "Windows Server"
        },
        {
            name: "Active Directory"
        },
        {
            name: "Microsoft 365"
        },
        {
            name: "PowerShell"
        },
        {
            name: "Remote Desktop"
        },
        {
            name: "Slack"
        },
        {
            name: "Zoom"
        },
        {
            name: "TeamViewer"
        },
        {
            name: "ServiceNow"
        },
        {
            name: "Jira"
        },
        {
            name: "Windows"
        },
        {
            name: "Linux"
        },
        {
            name: "MacOS"
        },
        {
            name: "VMware"
        },
        {
            name: "Android"
        },
        {
            name: "Azure"
        },
        {
            name: "Github"
        },
        {
            name: "Intellij"
        },
        {
            name: "Vs code"
        },
        {
            name: "Vs community"
        },
        {
            name: "Wordpress"
        }
        
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
            date: "Aug. 2016 - May. 2022",
            company: "Technical Education Copenhagen",
            assignments: [
                { en: "IT-Support Internship", da: "IT-Support Elev" },
                { en: "Web Developer", da: "Web udvikler" },
                { en: "1st and 2nd Level IT Support", da: "1. og 2. niveau IT-support" },
                { en: "Troubleshooting hardware and software issues", da: "Fejlfinding af hardware- og softwareproblemer" },
                { en: "Technical assistance for users", da: "Teknisk support til brugere" },
                { en: "System maintenance and optimization", da: "Vedligeholdelse og optimering af systemer" }
            ]
            
        },
        {
            date: "Jun 2022 - Aug 2023",
            company: "Alex Cykler (Part time)",
            assignments: [
                { en: "Assisting to create a webshop (e-commence)", da: "Hjælpe med at lave en webshop (e-commence)"},
                { en: "Creating Items in the webshop (e-commence)", da: "Oprette vare på webshoppen (e-commence)"},
                { en: "Update item informations. (e-commence)", da: "Opdatere genstandes informationer (e-commence)"},
                { en: "Helping on the warehouse", da: "Hjælpe på lageret"},
                { en: "Pack and send packages", da: "Pakke og sende pakker"}
            ]
        }
    ],
    education: [
        {
            date: "Jun. 2022 - Now",
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
            date: "jun 2014 - dec 2015",
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
            date: "jun 2013 - jun 2014",
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
            date: "jun 2003 - jun 2013",
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
            date: "Dec. 2019 - currently",
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