import image from "./Profile.jpg"

const user = {
    id: 0,
    name: "Niclas",
    lastName: "Juul Schæffer",
    mail: "ns@stablestack.dk",
    license: "AM, B",
    image: {image},
    title: {
        en: "Partner",
        da: "Partner"
    },
    title2: {
        en: "IT Support Specialist",
        da: "IT Support Specialist"
    },
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
            name: "csharp",
            level: 3
        },
        {
            name: "python",
            level: 3
        },
        {
            name: "typescript",
            level: 2
        },
        {
            name: "css",
            level: 3
        },
        {
            name: "git",
            level: 4
        },
        {
            name: "java",
            level: 3
        },
        {
            name: "js",
            level: 4
        },
        {
            name: "php",
            level: 1
        },
        {
            name: "powershell",
            level: 2
        },
        {
            name: "mysql",
            level: 3
        },
        {
            name: "react",
            level: 3
        },
        {
            name: "springboot",
            level: 2
        },
        {
            name: "electron",
            level: 2
        }
    ],
    software: [
        {
            name: "android",
            level: 3
        },
        {
            name: "azure",
            level: 2
        },
        {
            name: "github",
            level: 4
        },
        {
            name: "intellij",
            level: 2
        },
        {
            name: "vs code",
            level: 4
        },
        {
            name: "vs community",
            level: 4
        },
        {
            name: "wordpress",
            level: 2
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
                { en: "IT-Support internship", da: "IT-Support Elev" },
                { en: "Web Developer", da: "Web udvikler" },
                { en: "As an IT intern with 6 years on and off experience, while I was completing my Data technician education, I provided comprehensive 1st and 2nd level support, "+ 
                    "addressing a wide range of technical issues and ensuring smooth IT operations. I excelled in troubleshooting hardware and software problems, assisting users with technical challenges, "+
                    "and maintaining system functionality.", 
                da: "Som IT-praktikant med 6 års on and off-erfaring, mens jeg gennemførte min datateknikeruddannelse, leverede jeg omfattende support på 1. og 2. niveau, løste en bred vifte af tekniske problemer "+
                "og sikrede en problemfri IT-drift. Jeg udmærkede mig ved at fejlfinde hardware- og softwareproblemer, hjælpe brugere med tekniske udfordringer og vedligeholde systemets funktionalitet. "}
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
                en: "EUX TEC Ballerup - Datatechnitian specialized in development",
                da: "EUX TEC Ballerup - Datatekniker med speciale i programmering"
            },
            subjects: [
                "Basic Networking (Cisco)",
                "OS (Linux, Windows)",
                "Development (C#, JavaScript)",
                "Computing and Infrastructure"
            ]
        }
    ],
    otherExp: [
        {
            date: "Dec. 2019 - currently",
            name: "Bog og Ide", 
            assignments: [
                {
                    en: "Sales of books, board games, toys etc. and Assisting Customers requests.",
                    da: "Salg af bøger og brætspil, samt legetøj."
                }
            ]
        },
        {
            date: "Apr. 2017 - Jun. 2021",
            name: "Beredskabets venner",
            assignments: [
                {
                    en: "Customer service, Communications, overview of a situation",
                    da: "Kundeservice, kommunikation, overblik over en situation."
                }
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