// src/data/data.jsx
import personImage from "../assets/images/person.jpg";
import abcUniversityLogo from "../assets/images/logo_abc_university.png";
import toDoApp from "../assets/images/to-do app.png"; // Placeholder image
import portfolio from "../assets/images/portfolio.png"; // Placeholder image
import htmlImage from "../assets/images/html5.png"; // Add correct image paths
import jsImage from "../assets/images/javascript.png";
import reactImage from "../assets/images/react.png";
import javaImage from "../assets/images/java.png";
import pythonImage from "../assets/images/python.png";
import sqlImage from "../assets/images/mysql.png";
import cssImage from "../assets/images/css.png"; // Import any missing images
import rawalSchool from "../assets/images/rawalSchool.jpg";
import kundanSchool from "../assets/images/kundanSchool.jpg";
import bootstrapImage from "../assets/images/bootstrap.png";
import hibernateImage from "../assets/images/hibernate.png";
import springbootImage from "../assets/images/springboot.png";
import postmanImage from "../assets/images/postman.png";
import restapiImage from "../assets/images/restapi.png";
import mongodbImage from "../assets/images/mongodb.png";
import gitImage from "../assets/images/git.png";
import githubImage from "../assets/images/github.png";
import tailwindcssImage from "../assets/images/tailwindcss.png";

const userData = {
    name: "Sachin Chaudhary",
    title: "Software Developer",
    summary: "Full Stack Web Developer and Data Analyst skilled in Java, Spring Boot, React.js, and MySQL. Experienced in building scalable, secure applications with expertise in REST APIs, database management, and responsive UI design. Proven track record with projects like Employee Management System, Attendance Portal, and To-Do App. Currently interning at Test Yantra Software Solutions as a Java Full Stack Developer, gaining hands-on enterprise development experience.",

    image: personImage, // Imported image

    skills: [
        { name: "HTML", level: "Expert", percentage: 95, image: htmlImage },
        { name: "CSS", level: "Expert", percentage: 90, image: cssImage },
        { name: "Bootstrap", level: "Intermediate", percentage: 70, image: bootstrapImage },
        { name: "TailWind CSS", level: "Intermediate", percentage: 70, image: tailwindcssImage },
        { name: "JavaScript", level: "Expert", percentage: 95, image: jsImage },
        { name: "React", level: "Intermediate", percentage: 80, image: reactImage },
        { name: "Java", level: "Expert", percentage: 95, image: javaImage },
        { name: "Hibernate", level: "Intermediate", percentage: 70, image: hibernateImage },
        { name: "Spring-Boot", level: "Intermediate", percentage: 70, image: springbootImage },
        { name: "Python", level: "Intermediate", percentage: 70, image: pythonImage },
        { name: "Mongo DB", level: "Intermediate", percentage: 70, image: mongodbImage },
        { name: "SQL", level: "Beginner", percentage: 60, image: sqlImage },
        { name: "REST API", level: "Intermediate", percentage: 70, image: restapiImage },
        { name: "PostMan", level: "Intermediate", percentage: 70, image: postmanImage },
        { name: "Git", level: "Intermediate", percentage: 70, image: gitImage },
        { name: "Github", level: "Intermediate", percentage: 70, image: githubImage },
    ],

    education: [
        {
            institution: "J C Bose University of Science and Technology",
            logo: abcUniversityLogo, // Imported image
            course: "B.Tech Computer Science",
            specialization: "Computer Science and Engineering",
            cgpa: "7.5 CGPA",
            location: "Faridabad, Haryana",
            passout: "2025",
        },
        {
            institution: "Rawal International School",
            logo: rawalSchool, // Use a generic logo or create another
            course: "Senior Secondary Education",
            specialization: "Science Stream",
            percentage: "84%",
            location: "Faridabad, Haryana",
            passout: "2021",
        },
        {
            institution: "Kundan Green Valley School",
            logo: kundanSchool, // Use a generic logo or create another
            course: "Senior Secondary Education",
            specialization: "High School",
            percentage: "86.2%",
            location: "Faridabad, Haryana",
            passout: "2019",
        },
    ],

    projects: [
        {
            name: "Portfolio Website",
            github: "https://sachinchaudhary-portfolio.vercel.app/",
            description: "A personal portfolio site built with React and Vite, showcasing my skills and projects.",
            tech: ["React", "Vite", "CSS Modules", "Framer Motion"],
            screenshot: portfolio, // Imported image
        },
        {
            name: "TO-DO App",
            github: "https://sachinchaudhary8510.github.io/TO-DO-App/",
            description: "A modern, responsive To-Do App built with React (Vite) and TailwindCSS. Features include task creation with optional deadlines, inline editing, deletion, and a real-time clock component.",
            tech: ["HTML5", "CSS3", "JavaScript", "ReactJS", "Github Pages"],
            screenshot: toDoApp, // Placeholder
        },
    ],

    experience: [
        {
            organization: "Qspider Jspider",
            role: "Java Full Stack Developer Intern",
            duration: "Feb 2025 - Present",
            responsibilities: [
                "Assisted in developing and maintaining front-end components using React.js.",
                "Contributed to backend development with Java and Spring Boot.",
                "Worked with MySQL for database operations and data management.",
                "Tested, debugged, and fixed issues under guidance of senior developers.",
                "Collaborated with the team to integrate REST APIs with front-end modules.",
            ]
        },
    ],

    resume: {
        url: "/path/to/your/resume.pdf", // Place your resume PDF in the public folder
    },

    contact: {
        phone: "+91 8510829569",
        email: "sachinchaudhary9718@gmail.com",
        github: "https://github.com/SachinChaudhary8510",
        linkedin: "https://www.linkedin.com/in/sachinchaudhary8510",
        instagram: "https://www.instagram.com/sachin_chaudhary8510/",
        leetcode: "https://leetcode.com/u/sachinchaudhary9718/",
    },
};

export default userData;
