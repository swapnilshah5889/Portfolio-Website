/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Swapnil's Portfolio",
  description:
    "Full-Stack Developer with 5+ years of experience in software design, development, and testing. Expertise in Java/J2EE, Spring frameworks, front-end technologies (React, Angular, HTML, CSS, Bootstrap), and cloud services (AWS). Proven ability in project management, leading teams, and agile development. Adept at building scalable web and mobile applications with strong problem-solving, time management, and troubleshooting skills.",
  og: {
    title: "Swapnil Shah Portfolio",
    type: "website",
    url: "https://swapnilshah5889.github.io/",
  },
};

//Home Page
const greeting = {
  title: "Swapnil Shah",
  logo_name: "SwapnilShah",
  subTitle:
    "Full-Stack Developer with 5+ years of experience in software design, development, and testing. Expertise in Java/J2EE, Spring frameworks, front-end technologies (React, Angular, HTML, CSS, Bootstrap), and cloud services (AWS). Proven ability in project management, leading teams, and agile development. Adept at building scalable web and mobile applications with strong problem-solving, time management, and troubleshooting skills.",
  resumeLink:
    "https://drive.google.com/file/d/1v8UTTl64Yk0mX0h-ufsYI015-glwF1v5/view?usp=sharing",
  portfolio_repository: "https://github.com/swapnilshah5889",
  githubProfile: "https://github.com/swapnilshah5889",
};

const socialMediaLinks = [
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
          "⚡ Proficient in full-stack development with 5+ years of experience in Java/J2EE, Spring frameworks (Spring Boot, Spring Security, etc.), and front-end technologies (React, Angular, HTML, CSS, Bootstrap).",
          "⚡ Skilled in developing and testing robust back-end systems using Node.js, Express, Python, Flask, and using testing frameworks like Jasmine, Karma, Mocha, and Chai.",
          "⚡ Experienced in cloud services (AWS), deploying Microservices with Docker, and managing databases such as Oracle, DB2, MySQL, PL/SQL, and MS SQL Server.",
        ],
        softwareSkills: [
          {
            skillName: "Spring",
            fontAwesomeClassname: "devicon:spring",
            style: {
              backgroundColor: "#00000000",
            },
          },
          {
            skillName: "Spring Boot",
            fontAwesomeClassname: "simple-icons:springboot",
            style: {
              backgroundColor: "#00000000",
              color: "#6cb33e",
            },
          },
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
          {
            skillName: "Prisma",
            fontAwesomeClassname: "skill-icons:prisma",
            style: {
              color: "#1572B6",
            },
          },
          {
            skillName: "Docker",
            fontAwesomeClassname: "skill-icons:docker",
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
      title: "New Jersey Institute of Technology",
      subtitle: "M.S. in Computer Science",
      logo_path: "njit.png",
      alt_name: "New Jersey Institute of Technology",
      duration: "2022 - 2024",
      descriptions: [
        "⚡ Maintained an exceptional GPA of 3.8, achieving Grade A in all core computer science subjects, including Operating Systems, Database Management, Data Structures and Algorithms, and Advanced Database System Design.",
        "⚡ Served as a Teaching Assistant for Operating Systems and Data Structures and Algorithms, providing support to professors and assisting students in understanding complex concepts.",
        "⚡ Expanded my knowledge beyond computer science by enrolling in additional subjects such as Cloud Computing, System Design, Network Management, and Security.",
        "⚡ Utilized online platforms for self-learning, such as MOOCs (Massive Open Online Courses), to gain expertise in emerging technologies like React and Next.js, as well as important software development concepts like low-level design and high-level design of applications. This comprehensive learning approach ensures up-to-date knowledge and proficiency in both the latest technologies and the essential architectural principles of software development.",
      ],
      website_link: "https://www.njit.edu/",
    },
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
  ],
};

const certifications = {
  certifications: [
    {
      title: "Problem Solving",
      subtitle: "- Hackerrank",
      logo_path: "hackerrank.png",
      certificate_link: "https://www.hackerrank.com/certificates/fefff6d24caa",
      alt_name: "Hackerrank",
      color_code: "#0d141e",
    },
    {
      title: "Python Specialization",
      subtitle: "- University of Michigan",
      logo_path: "umich.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/T8NQN2398DT4",
      alt_name: "University of Michigan",
      color_code: "#121849",
    },
    {
      title: "Java",
      subtitle: "- Hackerrank",
      logo_path: "hackerrank.png",
      certificate_link: "https://www.hackerrank.com/certificates/52b9310d1748",
      alt_name: "Hackerrank",
      color_code: "#0d141e",
    },
    {
      title: "React",
      subtitle: "- Hackerrank",
      logo_path: "hackerrank.png",
      certificate_link: "https://www.hackerrank.com/certificates/e58b29d77b6c",
      alt_name: "Hackerrank",
      color_code: "#0d141e",
    },
    {
      title: "Tensorflow",
      subtitle: "- DeepLearning.ai",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/WM34JQLR3WSB",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "Javascript",
      subtitle: "- Hackerrank",
      logo_path: "hackerrank.png",
      certificate_link: "https://www.hackerrank.com/certificates/7844b4bda21a",
      alt_name: "Hackerrank",
      color_code: "#0d141e",
    },
    {
      title: "Python",
      subtitle: "- Hackerrank",
      logo_path: "hackerrank.png",
      certificate_link: "https://www.hackerrank.com/certificates/546dd96316d1",
      alt_name: "Hackerrank",
      color_code: "#0d141e",
    },
    {
      title: "Data Science",
      subtitle: "- University of Michigan",
      logo_path: "umich.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/87JTGQE8RV6J",
      alt_name: "University of Michigan",
      color_code: "#121849",
    },
    {
      title: "REST API",
      subtitle: "- Hackerrank",
      logo_path: "hackerrank.png",
      certificate_link: "https://www.hackerrank.com/certificates/1daf2ec733dd",
      alt_name: "Hackerrank",
      color_code: "#0d141e",
    },
    {
      title: "SQL",
      subtitle: "- Hackerrank",
      logo_path: "hackerrank.png",
      certificate_link: "https://www.hackerrank.com/certificates/313f01aa002a",
      alt_name: "Hackerrank",
      color_code: "#0d141e",
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
          title: "Full Stack Developer",
          company: "Metlife, USA",
          company_url: "https://www.metlife.com/",
          logo_path: "metlife.webp",
          duration: "January 2024 - Present",
          location: "USA",
          description:
            "I contributed to all phases of the Software Development Life Cycle (SDLC), utilizing agile methodology (SCRUM) for efficient application development. Designed responsive User Interfaces using HTML5, CSS3, jQuery, JavaScript, Ajax, Angular.JS, Node.JS, and XML. Simplified application complexities with JSP Tag libraries and JavaScript. Architected critical clearing systems with Spring, REST, SQL, Hibernate, MyBatis, and MQ for global markets, ensuring scalability and robustness. Implemented secure applications using Spring MVC, Spring Boot, and Spring Security, leveraging AWS Lambdas for file transfers. Conducted performance analysis and optimization to enhance system scalability and efficiency. Deployed Spring web services on AWS cloud using Docker Swarm, and performed MongoDB CRUD operations. Additionally, built applications using React.JS and managed version control using GitHub bash and Terminal commands.",
          color: "#0879bf",
        },
        {
          title: "Software Developer",
          company: "Fluvina Technologies Pvt. Ltd.",
          company_url: "http://www.fluvina.com/",
          logo_path: "fluvina-technologies.jpeg",
          duration: "May 2019 - August 2022",
          location: "Ahmedabad, Gujarat, India",
          description:
            "I led the development of robust data extraction and transformation scripts for government-authorized APIs, achieving an 80% reduction in processing time for large datasets and enabling data-driven decision-making. Leveraged Java8 features like Lambda expressions and resource handling for efficient code development. Engineered backend infrastructure with Express, PostgreSQL, and AWS EC2, deploying Redis cache via Jenkins CI/CD to enhance system stability and reduce downtime by 25%. Spearheaded Mobihealth, a comprehensive mobile app suite for healthcare professionals and patients. Implemented rigorous unit testing with Spring Boot Test, Mockito, and JUnit, ensuring high code quality. Developed microservices using Spring Boot and Spring Cloud, optimized Java performance, and debugged memory issues. Managed CI/CD pipelines with Jenkins, automating build and deployment processes, and designed user-controlled personalized interfaces for enhanced user satisfaction. Led software development for MAHI, an IoT-based Pill Dispensing Device, and created a Patient Relation Management module for diabetic patient interactions, integrating machine learning for risk prediction.",
          color: "#0879bf",
        },
        {
          title: "Full Stack Developer",
          company: "Nevina Infotech Pvt. Ltd",
          company_url: "https://www.nevinainfotech.com/",
          logo_path: "nevinainfotech_com_logo.jpeg",
          duration: "January 2018 - April 2019",
          location: "Ahmedabad, Gujarat, India",
          description:
            "During my professional tenure, I specialized in developing robust microservices and APIs using Spring Boot, leveraging Apache Kafka for efficient messaging between services. I utilized Spring Core's IOC and AOP features alongside Spring JDBC for seamless application development, focusing on high-concurrency environments with multi-threaded server-side components to ensure optimal responsiveness and reliability. My experience includes implementing microservices in a serverless architecture using Node.js and Lambda functions, and integrating disparate pages into cohesive single-page applications with Angular and TypeScript. I conducted thorough unit testing, debugging, and performance profiling to deliver resilient, defect-free code. Additionally, I developed web pages utilizing HTML, CSS, jQuery, JavaScript, and frameworks like Angular and React.js, and deployed server-side modules and client-side components on AWS's Compute Cloud.",
          color: "#000000",
        },
      ],
    },
    // {
    //   title: "Internships",
    //   experiences: [
    //     {
    //       title: "Android Developer",
    //       company: "Techmicra",
    //       company_url: "https://techmicra.co.in/",
    //       logo_path: "techmicra.jpeg",
    //       duration: "May 2019 - November 2019",
    //       location: "Ahmedabad, Gujarat, India",
    //       description:
    //         "As an Android developer with full-stack responsibilities, I planned and developed complete applications, including database structure, frontend, backend in Android, and API structure. Utilizing Android Studio, I built Android applications with Java for the backend and XML for the frontend. Additionally, I created Restful APIs using PHP and managed databases in MySQL. I excelled in debugging applications and effectively coordinated tasks with other teams to ensure seamless application performance.",
    //       color: "#9b1578",
    //     },
    //   ],
    // },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "As a versatile developer, I specialize in creating a wide range of projects, including user-centric web applications, mobile applications for Android, and full-stack solutions. With expertise in technologies such as React, JavaScript, Node.js, Express, and MongoDB, I am dedicated to delivering seamless and innovative applications that prioritize user experience and performance. My projects encompass diverse functionalities, from interactive web interfaces to intuitive mobile apps, showcasing my commitment to crafting impactful and visually appealing solutions across different platforms.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked on and published a few research papers and publications of my own.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "swapnil.jpg",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, React, Android, Cloud and Opensource Development.",
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
