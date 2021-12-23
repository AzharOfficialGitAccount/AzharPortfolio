/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Ajharudin Ansari",
  title: "Hi all, I'm Ajharudin Ansari",
  subTitle: emoji(
    "A passionate Full MERN Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / React-Native / Node.js / Express.js / React.js  and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1-Oq7fMKVQeV4kRGB-lwrf76NGeXqKm0d/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/AzharOfficialGitAccount",
  linkedin: "https://www.linkedin.com/in/azhar-ansari-083238206/",
  gmail: "azharofficial599@gmail.com",
  gitlab: "https://github.com/AzharOfficialGitAccount",
  facebook: "https://www.facebook.com/azzubachu",
  medium: "https://medium.com/@azharofficial599",
  stackoverflow: "https://stackoverflow.com/users/16339619/azhar-ansari",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "FULL MERN STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces & Back end for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "HTML-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "CSS3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "Bootstrap",
      fontAwesomeClassname: "fab fa-bootstrap"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "React.js",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "React-Native",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Node.js, Express.js",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "SQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "JAVA",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "NPM",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "mongoDB-Database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "Firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "PHP",
      fontAwesomeClassname: "fab fa-php"
    },
    {
      skillName: "Android Studio",
      fontAwesomeClassname: "fab fa-android"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "MCRP University Bhopal, M.P. India",
      logo: require("./assets/images/mcrp.jpeg"),
      subHeader: "Bachelor of Computer Applications (BCA)",
      duration: "June 2017 - June 2019",
      desc: "Participated in the live sessions of Big Data Analytics (Hadoop) and got certified",
      descBullets: [
        "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
        "Ranked top 5 in MCRP University."
      ]
    },
    {
      schoolName: "Profound Edutech Pvt Ltd. Dadar, mumbai, Maharashtra. India",
      logo: require("./assets/images/profound-logo.png"),
      subHeader: "Advance Java Technology",
      duration: "September 2019 - March 2020",
      desc: "Ranked top 20 in the program. done many projects & seminars, ...",
      descBullets: ["Done Online Book Shop Projects"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "70%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "90%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "MERN STACK Developer",
      company: "GosaCorp Pvt Ltd",
      companylogo: require("./assets/images/gosacorp.jpg"),
      date: "October 2020 – March 2021",
      desc: "GosaCorp is an IT company based in Sohna-Gurgaon. 4+ years of experience, They have provided comprehensive, customer-centric cloud services to businesses of all sizes, from startups to Fortune 15+ companies.",
      descBullets: [
        "Worked as MERN STACK Developer from October 2020 - March 2021",
        "Done many projects ie, bookMyPhysio etc."
      ]
    },
    {
      role: "Full MERN STACK Developer",
      company: "Sun 9 Services Technology Pvt Ltd",
      companylogo: require("./assets/images/id.jpeg"),
      date: "March 2021 – Jan 2022",
      desc: "At InnerDots, Their mission is to put creativity at the core of human development and happiness. This exciting journey of unleashing your inner creativity.",
      descBullets: [
        "Working as  Full MERN STACK Developer from March 2021 - Present",
        "Done many projects ie, InnerDots, E-Cart etc."
      ]
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/id.jpeg"),
      projectName: "InnerDots",
      projectDesc: "InnerDots App is a Live Creating Classes App, It Provides Live intracting Classes for many courses",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://innerdots.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/gosacorp.jpg"),
      projectName: "bookMyPhysio",
      projectDesc: "PhysiApp is the companion app to Physitrack, the platform that lets healthcare providers such as physiotherapists and others create and prescribe clinical exercise programs",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://gosacorp.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "AWS Cloud Practitioner",
      subtitle:
        "A contineous learner to be certified as AWS Cloud Practitioner from Great Learning.",
      image: require("./assets/images/aws.jpeg"),
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1LeHDHwOAkfZ5DHb_QmbnWcYNl9gfmlrr/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/1LeHDHwOAkfZ5DHb_QmbnWcYNl9gfmlrr/view?usp=sharing"
        },
      ]
    },
    {
      title: "Ethical Hacking",
      subtitle:
        "A contineous learner to be certified as Ethical Hacking from Great Learning.",
      image: require("./assets/images/ethic.jpeg"),
      footerLink: [
        {
          name: "Ethical Hacking",
          url: "https://drive.google.com/file/d/1MwkFqkUJXk6gRUvzCWbbd6-RHFCKdZJQ/view?usp=sharing"
        }
      ]
    },

    {
      title: "Python Developer",
      subtitle: "Completed Certifcation from BIGSHYFT for Python Developer",
      image: require("./assets/images/py.jpg"),
      footerLink: [
        { name: "Certification", url: "" },
        {
          name: "Python Developer",
          url: "https://drive.google.com/file/d/1-yBk7YZrTAsFxASntnCaG_7Ht-zi5xK_/view?usp=sharing"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-8887930942",
  email_address: "azharofficial599@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
