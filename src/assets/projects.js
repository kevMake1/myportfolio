
const projects = [
    {
        ID: "1",
        imgPath: require("../assets/imgs/proj1.png"),
        title: "Praise Temple Apostolic",
        description: "Website for Praise Temple Apostolic, where users can learn about the church and keep up with their events",
        techUsed: ["HTML, ", "CSS, ", "JavaScript, ", "BootStrap, ", "MongoDB"],
        hasLink: true,
        linkToProj: "http://praisetempleapostolic.org/",
        demoPath: "",
        buttonContent: "Go to site",
        gitHubLink: "https://github.com/kevMake1/PraiseTempleApostolicWebsite"
    },
    {
        ID: "2",
        imgPath: require("../assets/imgs/proj2.png"),
        title: "DTR PDF Exporter",
        description: "Software where user fills in data to be exported out on a PDF file. User also has the option to " + 
                    "add in data to be used to prefill in certain inputs. As the user types it will search through the database "
                    + "and display to them to select to prefill the data in the input. User also has options to edit and delete "
                    + "this data.",
        techUsed: ["C# (.NET), ", "XML, ", "PDFSharp, ", "SQLite, ", "Visual Studio"],
        hasLink: false,
        linkToProj: "http://praisetempleapostolic.org/",
        demoPath: require("../assets/videos/DTRDemo.MP4"),
        buttonContent: "Play Demo",
        gitHubLink: "#"
    },
    {
        ID: "3",
        imgPath: require("../assets/imgs/proj3.png"),
        title: "My Portfolio",
        description: "My portfolio",
        techUsed: ["ReactJS, ", "HTML, ", "CSS, ", "ReactBootStrap"],
        hasLink: true,
        linkToProj: "",
        demoPath: "",
        buttonContent: "Go to site",
        gitHubLink: "#"
    }

]


export default projects;