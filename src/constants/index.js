import hero from "../assets/hero.jpg";
import full_stack from "../assets/full_stack.png";
import data_science from "../assets/data_science.png";
import Networking from "../assets/networking.png";

import portfolio1 from "../assets/portfolio1.jpeg";
import portfolio2 from "../assets/portfolio2.jpeg";
import portfolio3 from "../assets/portfolio3.jpeg";
import portfolio4 from "../assets/portfolio4.jpeg";
import portfolio5 from "../assets/portfolio5.jpeg";
import portfolio6 from "../assets/portfolio6.jpeg";
import portfolio7 from "../assets/portfolio7.jpeg";
import portfolio8 from "../assets/portfolio8.jpeg";

import awsCert from "../assets/awsCert.jpg";
import ciscoCert from "../assets/ciscoCert.jpg";
import codeacademyLogo from "../assets/codeacademyLogo.jpg";
import universityLogo from "../assets/universityLogo.jpg";
import googleCert from "../assets/googleCert.jpg";

export const LINKS = [
  {
    name: "Services",
    link: "#services",
  },
  {
    name: "Portfolio",
    link: "#portfolio",
  },
  {
    name: "About",
    link: "#about",
  },
  {
    name: "Skills Certifications",
    link: "#Skills_Certifications",
  },
  {
    name: "Contact",
    link: "#contact",
  },
];

export const HERO_CONTENT = {
  title: "YR Yancy Raven",
  subtitle: "The  latest in the world of internet",
  image: hero,
};

export const SERVICES_CONTENT = [
  {
    title: "Full Stack Development",
    description:
      "Build dynamic, scalable, and responsive web applications with our full stack development services. We specialize in both front-end and back-end technologies, delivering seamless user experiences and robust server-side solutions.",
    image: full_stack, // You can update the image to something relevant, like a coding or web development image
    alt: "Full Stack Development",
  },
  {
    title: "Data Science",
    description:
      "Unlock the power of your data with our data science services. From data analysis and machine learning to predictive modeling, we help you make data-driven decisions and gain actionable insights for your business.",
    image: data_science, // Update this image to something relevant, like a data visualization or analytics image
    alt: "Data Science",
  },
  {
    title: "Networking",
    description:
      "Optimize your network infrastructure with our networking services. We provide solutions for network design, security, and maintenance to ensure reliable and secure connectivity for your business operations.",
    image: Networking, // Update this image to something relevant, like a network diagram or server setup image
    alt: "Networking",
  },
];

export const PORTFOLIO_PROJECTS = [
  {
    id: 1,
    name: "Personal Portfolio Website",
    description:
      "Designed and developed a responsive portfolio website to showcase technical skills, projects, and services using React.js, Tailwind CSS, and Figma.",
    image: portfolio1, // Replace with a screenshot of your portfolio
    link: "#",
  },
  {
    id: 2,
    name: "Business Landing Page",
    description:
      "Built a modern landing page for a local restaurant, including menu integration, contact forms, and mobile-first design with HTML, CSS, and JavaScript.",
    image: portfolio2, // Replace with a screenshot of a landing page
    link: "#",
  },
  {
    id: 3,
    name: "E-commerce Website (Basic)",
    description:
      "Created a small-scale e-commerce site for handmade crafts using WordPress and WooCommerce, featuring product listings and a checkout system.",
    image: portfolio3, // Replace with an e-commerce screenshot
    link: "#",
  },
  {
    id: 4,
    name: "Data Analysis Dashboard",
    description:
      "Developed a sales data dashboard using Python (Pandas, Matplotlib) to visualize trends and insights for a small retail business.",
    image: portfolio4, // Replace with a data visualization screenshot
    link: "#",
  },
  {
    id: 5,
    name: "Network Setup for Small Office",
    description:
      "Configured a secure LAN network for a startup, including router setup, firewall configuration, and Wi-Fi optimization.",
    image: portfolio5, // Replace with a networking diagram/image
    link: "#",
  },
  {
    id: 6,
    name: "Customer Segmentation Model",
    description:
      "Built a machine learning model (K-Means clustering) to segment customers for targeted marketing campaigns using Python and Scikit-learn.",
    image: portfolio6, // Replace with a clustering visualization
    link: "#",
  },
  {
    id: 7,
    name: "Blog Platform with CMS",
    description:
      "Developed a custom blog with a content management system (CMS) using Node.js, Express, and MongoDB for a freelance client.",
    image: portfolio7, // Replace with a blog screenshot
    link: "#",
  },
  {
    id: 8,
    name: "Network Security Audit",
    description:
      "Performed vulnerability assessments and implemented security protocols for a local business network to prevent unauthorized access.",
    image: portfolio8, // Replace with a cybersecurity-themed image
    link: "#",
  },
];

export const SKILLS_CERTIFICATIONS = {
  intro:
    "Here's a showcase of my technical expertise, professional certifications, and educational background.",
  skills: [
    {
      name: "Web Development",
      level: "Advanced",
      description: "HTML, CSS, JavaScript, React, Node.js, Express, MongoDB",
    },
    {
      name: "Data Science",
      level: "Intermediate",
      description:
        "Python, Pandas, NumPy, Machine Learning, Data Visualization",
    },
    {
      name: "Networking",
      level: "Intermediate",
      description: "CCNA, Network Security, TCP/IP, Cloud Infrastructure",
    },
  ],
  certifications: [
    {
      title: "AWS Certified Developer",
      issuer: "Amazon Web Services",
      date: "2023",
      image: awsCert,
    },
    {
      title: "Google Data Analytics",
      issuer: "Google Career Certificates",
      date: "2022",
      image: googleCert,
    },
    {
      title: "Cisco CCNA",
      issuer: "Cisco Networking Academy",
      date: "2021",
      image: ciscoCert,
    },
  ],
  education: [
    {
      institution: "Tech University",
      degree: "BSc in Computer Science",
      dates: "2018-2022",
      image: universityLogo,
    },
    {
      institution: "Code Academy",
      degree: "Full Stack Development Bootcamp",
      dates: "2022",
      image: codeacademyLogo,
    },
  ],
};

export const CONTACT_INFO = {
  text: "Have questions or need more information? Get in touch with us, and we ll be happy to assist you.",
  phone: {
    label: "Phone",
    value: "(123) 456-7890",
  },
  email: {
    label: "Email",
    value: "info@vastuspaze.com",
  },
  address: {
    label: "Address",
    value: "1234 Renovation Ave, Suite 100, Your City, ST 56789",
  },
};
