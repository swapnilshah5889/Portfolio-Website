/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Swapnil's Portfolio",
  description:
    "Computer Science Graduate student with 3+ years of experience in software development including project management, leading team, and agile development of software. Ability to build user-centric web applications, mobile applications, and more designed to scale leveraging my problem-solving skills. A fast learner with strong time management, multi-tasking, and troubleshooting skills with an analytical mindset.",
  og: {
    title: "Swapnil Shah Portfolio",
    type: "website",
    url: "",
  },
};

//Home Page
const greeting = {
  title: "Swapnil Shah",
  logo_name: "SwapnilShah",
  nickname: "swapnilshah5889",
  subTitle:
    "Computer Science Graduate student with 3+ years of software development experience, adept at leading teams in agile environments. Skilled in building user-centric web and mobile applications designed to scale. Fast learner with strong time management, multi-tasking, and troubleshooting abilities, and a full stack development expertise in React, TypeScript, JavaScript, Node.js, Express, Python, Flask, HTML, CSS, and Bootstrap.",
  resumeLink:
    "https://drive.google.com/file/d/1v8UTTl64Yk0mX0h-ufsYI015-glwF1v5/view?usp=sharing",
  portfolio_repository: "https://github.com/swapnilshah5889",
  githubProfile: "https://github.com/swapnilshah5889",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/swapnilshah5889",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/swapnilshah0208/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:swapnilshah5889@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Twitter",
    link: "https://twitter.com/swapnil5889",
    fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
    backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/swapnil.shah.509/",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/swapnil_0208/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skillList = [
  {
    title: "What I do ?",
    data: [
      {
        title: "Full Stack Development",
        fileName: "FullStackImg",
        skills: [
          "⚡ Proficient in building interactive and responsive web applications using React, TypeScript, JavaScript, HTML, CSS, and Bootstrap for a seamless user experience.",
          "⚡ Experienced in developing robust back-end systems with Node.js, Express, Python, and Flask to handle data and API integration.",
          "⚡ Skilled in designing and implementing full-stack solutions, utilizing various databases and cloud platforms, while prioritizing user-friendly and visually appealing interfaces.",
        ],
        softwareSkills: [
          {
            skillName: "JavaScript",
            fontAwesomeClassname: "simple-icons:javascript",
            style: {
              backgroundColor: "#000000",
              color: "#F7DF1E",
            },
          },
          {
            skillName: "ReactJS",
            fontAwesomeClassname: "simple-icons:react",
            style: {
              color: "#61DAFB",
            },
          },
          {
            skillName: "TypeScript",
            fontAwesomeClassname: "logos:typescript-icon",
            style: {
              color: "#CB3837",
            },
          },
          {
            skillName: "ExpressJS",
            fontAwesomeClassname: "skill-icons:expressjs-dark",
            style: {
              color: "#CB3837",
            },
          },
          {
            skillName: "NodeJS",
            fontAwesomeClassname: "logos:nodejs",
            style: {
              color: "#CB3837",
            },
          },
          {
            skillName: "Flask",
            fontAwesomeClassname: "logos:flask",
            style: {
              color: "#CC6699",
            },
          },
          {
            skillName: "PHP",
            fontAwesomeClassname: "skill-icons:php-dark",
            style: {
              color: "#CC6699",
            },
          },
          {
            skillName: "Redux",
            fontAwesomeClassname: "skill-icons:redux",
            style: {
              color: "#2C8EBB",
            },
          },
          {
            skillName: "Jenkins",
            fontAwesomeClassname: "logos:jenkins",
            style: {
              color: "#2C8EBB",
            },
          },
          {
            skillName: "MySQL",
            fontAwesomeClassname: "logos:mysql",
            style: {
              color: "#4285F4",
            },
          },

          {
            skillName: "Firebase",
            fontAwesomeClassname: "simple-icons:firebase",
            style: {
              color: "#FFCA28",
            },
          },
          {
            skillName: "MongoDB",
            fontAwesomeClassname: "simple-icons:mongodb",
            style: {
              color: "#47A248",
            },
          },
          {
            skillName: "HTML5",
            fontAwesomeClassname: "simple-icons:html5",
            style: {
              color: "#E34F26",
            },
          },
          {
            skillName: "CSS3",
            fontAwesomeClassname: "fa-css3",
            style: {
              color: "#1572B6",
            },
          },
        ],
      },
      {
        title: "Mobile Application Development",
        fileName: "MobileDev",
        skills: [
          "⚡ Proven track record of delivering high-quality apps on time and within budget, with a keen eye for detail and a focus on meeting user requirements.",
          "⚡ Extensive experience in integrating APIs, third-party libraries, and various SDKs to enhance app functionality and performance like Agora for video conferencing, Google Maps SDK, RazorPay SDK to manage payments and more.",
          "⚡ Expertise in Java programming language, utilizing their full potential to build efficient and robust Android applications. Strong understanding of the Android ecosystem, including the latest design guidelines, platform capabilities, and best practices for optimal app performance and user engagement.",
        ],
        softwareSkills: [
          {
            skillName: "Android",
            fontAwesomeClassname: "devicon:android",
            style: {
              color: "#E34F26",
            },
          },
          {
            skillName: "Java",
            fontAwesomeClassname: "devicon:java-wordmark",
            style: {
              color: "#1572B6",
            },
          },
          {
            skillName: "Gradle",
            fontAwesomeClassname: "skill-icons:gradle-dark",
            style: {
              color: "#1572B6",
            },
          },
          {
            skillName: "XML",
            fontAwesomeClassname: "mdi:file-xml-box",
            style: {
              color: "#1572B6",
            },
          },
          {
            skillName: "SQLite",
            fontAwesomeClassname: "skill-icons:sqlite",
            style: {
              color: "#FF9900",
            },
          },
          {
            skillName: "Firebase",
            fontAwesomeClassname: "simple-icons:firebase",
            style: {
              color: "#FFCA28",
            },
          },
        ],
      },
    ],
  },
  {
    title: "Technical Skills & Frameworks",
    data: [
      {
        title: "Proficient Languages",
        fileName: "FullStackImg",
        skills: [],
        softwareSkills: [
          {
            skillName: "JavaScript",
            fontAwesomeClassname: "simple-icons:javascript",
            style: {
              backgroundColor: "#000000",
              color: "#F7DF1E",
            },
          },
          {
            skillName: "Java",
            fontAwesomeClassname: "devicon:java-wordmark",
            style: {
              color: "#61DAFB",
            },
          },
          {
            skillName: "TypeScript",
            fontAwesomeClassname: "logos:typescript-icon",
            style: {
              color: "#CB3837",
            },
          },
          {
            skillName: "Python",
            fontAwesomeClassname: "logos:python",
            style: {
              color: "#CB3837",
            },
          },
          {
            skillName: "C#",
            fontAwesomeClassname: "logos:c-sharp",
            style: {
              color: "#CB3837",
            },
          },
          {
            skillName: "PHP",
            fontAwesomeClassname: "skill-icons:php-dark",
            style: {
              color: "#CC6699",
            },
          },
        ],
      },
      {
        title: "Mobile Application Development",
        fileName: "MobileDev",
        skills: [
          "⚡ Building responsive website front end using React-Redux",
          "⚡ Developing mobile applications using Flutter, React Native and solo android apps using Kotlin",
          "⚡ Creating application backend in Node, Express & Flask",
        ],
        softwareSkills: [
          {
            skillName: "Android",
            fontAwesomeClassname: "devicon:android",
            style: {
              color: "#E34F26",
            },
          },
          {
            skillName: "Java",
            fontAwesomeClassname: "devicon:java-wordmark",
            style: {
              color: "#1572B6",
            },
          },
          {
            skillName: "Gradle",
            fontAwesomeClassname: "skill-icons:gradle-dark",
            style: {
              color: "#1572B6",
            },
          },
          {
            skillName: "XML",
            fontAwesomeClassname: "mdi:file-xml-box",
            style: {
              color: "#1572B6",
            },
          },
        ],
      },
      {
        title: "Database Management",
        fileName: "CloudInfraImg",
        skills: [
          "⚡ Experience working on multiple cloud platforms",
          "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
          "⚡ Deploying deep learning models on cloud to use on mobile devices",
          "⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS",
        ],
        softwareSkills: [
          {
            skillName: "MySQL",
            fontAwesomeClassname: "logos:mysql",
            style: {
              color: "#4285F4",
            },
          },
          {
            skillName: "SQLite",
            fontAwesomeClassname: "skill-icons:sqlite",
            style: {
              color: "#FF9900",
            },
          },
          {
            skillName: "Firebase",
            fontAwesomeClassname: "simple-icons:firebase",
            style: {
              color: "#FFCA28",
            },
          },
          {
            skillName: "MongoDB",
            fontAwesomeClassname: "simple-icons:mongodb",
            style: {
              color: "#47A248",
            },
          },
        ],
      },
    ],
  },
];

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/swapnilshah5889/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/swapnilshah5889",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Dharmsinh Desai Institute of Technology",
      subtitle: "B.Tech. in Computer Engineering",
      logo_path: "dharmish-college-logo.png",
      alt_name: "DDIT",
      duration: "2015 - 2019",
      descriptions: [
        "⚡ Proficient in fundamental software engineering subjects, including Data Structures, Algorithms, Database Management Systems, Operating Systems, Computer Architecture, and Artificial Intelligence.",
        "⚡  Developed full stack projects during coursework, showcasing expertise in ASP.NET. Notable projects include 'Medigo' - a Doctor Appointment booking application, and a comprehensive E-Commerce website.",
        "⚡ Gained hands-on experience through an internship at a leading IT service company. Contributed to the development of a full stack Android application focused on food catering. Involved in the design process, API building, database management, and Android application development.",
      ],
      website_link: "https://www.ddu.ac.in/",
    },
    {
      title: "New Jersey Institute of Technology",
      subtitle: "M.S. in Computer Science",
      logo_path: "njit.png",
      alt_name: "New Jersey Institute of Technology",
      duration: "2022 - 2024",
      descriptions: [
        "⚡ Maintained an exceptional GPA of 3.75, achieving Grade A in all core computer science subjects, including Operating Systems, Database Management, Data Structures and Algorithms, and Advanced Database System Design.",
        "⚡ Expanded my knowledge beyond computer science by enrolling in additional subjects such as Cloud Computing, System Design, Network Management, and Security.",
        "⚡ Utilized online platforms for self-learning, such as MOOCs (Massive Open Online Courses), to gain expertise in emerging technologies like React and Next.js, as well as important software development concepts like low-level design and high-level design of applications. This comprehensive learning approach ensures up-to-date knowledge and proficiency in both the latest technologies and the essential architectural principles of software development.",
      ],
      website_link: "https://www.njit.edu/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Machine Learning",
      subtitle: "- Andrew Ng",
      logo_path: "stanford_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
      alt_name: "Stanford University",
      color_code: "#8C151599",
    },
    {
      title: "Deep Learning",
      subtitle: "- Andrew Ng",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/H8CPSFXAJD2G",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "ML on GCP",
      subtitle: "- GCP Training",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/EB4VJARK8647",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "Data Science",
      subtitle: "- Alex Aklson",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/PLEAPCSJBZT5",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Big Data",
      subtitle: "- Kim Akers",
      logo_path: "microsoft_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/164zKCFOsI4vGqokc-Qj-e_D00kLDHIrG/view",
      alt_name: "Microsoft",
      color_code: "#D83B0199",
    },
    {
      title: "Advanced Data Science",
      subtitle: "- Romeo Kienzler",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/BH2T9BRU87BH",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Advanced ML on GCP",
      subtitle: "- GCP Training",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/5JZZM7TNQ2AV",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "DL on Tensorflow",
      subtitle: "- Laurence Moroney",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/6T4DCUGNK8J8",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "Fullstack Development",
      subtitle: "- Jogesh Muppala",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/NRANJA66Y2YA",
      alt_name: "Coursera",
      color_code: "#2A73CC",
    },
    {
      title: "Kuberenetes on GCP",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://google.qwiklabs.com/public_profiles/e4d5a92b-faf6-4679-a70b-a9047c0cd750",
      alt_name: "GCP",
      color_code: "#4285F499",
    },
    {
      title: "Cryptography",
      subtitle: "- Saurabh Mukhopadhyay",
      logo_path: "nptel_logo.png",
      certificate_link:
        "https://drive.google.com/open?id=1z5ExD_QJVdU0slLkp8CBqSF3-C3g-ro_",
      alt_name: "NPTEL",
      color_code: "#FFBB0099",
    },
    {
      title: "Cloud Architecture",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://google.qwiklabs.com/public_profiles/5fab4b2d-be6f-408c-8dcb-6d3b58ecb4a2",
      alt_name: "GCP",
      color_code: "#4285F499",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work and Internship",
  description:
    "During my work experience and internship, I have thrived as a software developer, specializing in building full stack, user-centric web applications. With a strong foundation in software engineering and a passion for problem-solving, I have contributed to the development of innovative and intuitive applications that prioritize user experience. Through my expertise in various front-end and back-end technologies, coupled with an analytical mindset, I have successfully delivered projects that are not only robust and scalable but also tailored to meet the unique needs of the end-users.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Software Developer",
          company: "Fluvina Technologies Pvt. Ltd.",
          company_url: "http://www.fluvina.com/",
          logo_path: "fluvina-technologies.jpeg",
          duration: "December 2019 - August 2022",
          location: "Ahmedabad, Gujarat, India",
          description:
            "During my tenure at Fluvina Technologies, a dynamic product-based startup, I gained valuable insights into an evolving company and led multiple end-to-end projects as a software developer. Notable achievements include spearheading the development of the ZeroSugar mobile app for diabetic patients, revamping the user flow of the Mobihealth suite, and conducting a machine learning project for health risk prediction. With expertise in software development, project leadership, and problem-solving, I am well-prepared to excel in SDE roles and eager to contribute to organizational success.",
          color: "#0879bf",
        },
        {
          title: "Android Developer",
          company: "Techmicra",
          company_url: "https://techmicra.co.in/",
          logo_path: "techmicra.jpeg",
          duration: "May 2019 - November 2019",
          location: "Ahmedabad, Gujarat, India",
          description:
            "As an Android developer with full-stack responsibilities, I planned and developed complete applications, including database structure, frontend, backend in Android, and API structure. Utilizing Android Studio, I built Android applications with Java for the backend and XML for the frontend. Additionally, I created Restful APIs using PHP and managed databases in MySQL. I excelled in debugging applications and effectively coordinated tasks with other teams to ensure seamless application performance.",
          color: "#9b1578",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Android Developer",
          company: "Techmicra",
          company_url: "https://techmicra.co.in/",
          logo_path: "techmicra.jpeg",
          duration: "December 2018 - April 2019",
          location: "Ahmedabad, Gujarat, India",
          description:
            "During my internship as an Android developer, I had the opportunity to work on building full-stack applications for our clients. My primary responsibilities included managing the backend using PHP and ensuring smooth database operations in MySQL. One of the notable projects I worked on was the development of a custom cuisine app, designed to streamline the process of placing catering orders. Throughout the internship, I gained valuable hands-on experience in Android development and honed my skills in backend management and database integration, contributing to the successful delivery of user-friendly and efficient mobile applications.",
          color: "#000000",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked on and published a few research papers and publications of my own.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzQ=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzi=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNze=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzt=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzb=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated_ashutosh.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, React, Android, Cloud and Opensource Development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
    link: "https://blogs.ashutoshhathidara.com/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle:
      "Ambavadi vas, Kanodar, T.A.-Palanpur, Dist.-Banaskantha, Gujarat - 385520",
    locality: "Kanodar",
    country: "IN",
    region: "Gujarat",
    postalCode: "385520",
    streetAddress: "Ambavadi vas",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/MpMqtRZytFchMkZ76",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skillList,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
