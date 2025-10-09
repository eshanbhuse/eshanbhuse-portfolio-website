import user_image from './user-image.png';
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.png';
import firebase from './firebase.png';
import figma from './figma.png';
import git from './git.png';
import mongodb from './mongodb.png';
import right_arrow_white from './right-arrow-white.png';
import logo from './logo.png';
import logo_dark from './logo_dark.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img from './profile-img.png';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import web_icon from './web-icon.png';
import mobile_icon from './mobile-icon.png';
import ui_icon from './ui-icon.png';
import graphics_icon from './graphics-icon.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';
import postman from './postman.png';
import docker from './docker.png';
import aws from './aws.png';
import redis from './redis.png';
import react from './react.png';
import start from './start.png';
import first from './first.png';
import internship from './internship.png';
import professional from './professional.png';
import start_dark from './start_dark.png';
import first_dark from './first_dark.png';
import internship_dark from './internship_dark.png';
import professional_dark from './professional_dark.png';

export const assets = {
    user_image,
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    postman,
    docker,
    aws,
    redis,
    react,
    vscode,
    firebase,
    figma,
    git,
    mongodb,
    right_arrow_white,
    logo,
    logo_dark,
    mail_icon,
    mail_icon_dark,
    profile_img,
    download_icon,
    hand_icon,
    header_bg_color,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    web_icon,
    mobile_icon,
    ui_icon,
    graphics_icon,
    right_arrow,
    send_icon,
    right_arrow_bold,
    right_arrow_bold_dark,
    start,
    first,
    internship,
    professional,
    start_dark,
    first_dark,
    internship_dark,
    professional_dark
};

export const workData = [
    {
        title: 'AI Voice Dental Assistant',
        description: 'Website Development',
        bgImage: '/work-1.png',
        link: ''
    },
    {
        title: 'AI Powered Interview Prep',
        description: 'Website Development',
        bgImage: '/work-2.png',
        link: 'https://al-based-interview-preparation-frontend-71c1.onrender.com/'
    },
    {
        title: 'Expense Tracker',
        description: 'Website Development',
        bgImage: '/work-3.png',
        link: 'https://eshanbhuse-expense-tracker.online/'
    },
    {
        title: 'Yoga pose estimation',
        description: 'Website Development',
        bgImage: '/work-4.png',
        link: ''
    },
]

export const serviceData = [
    { icon: assets.web_icon, title: 'Web design', description: 'Web development is the process of building, programming...', link: '' },
    { icon: assets.mobile_icon, title: 'Mobile app', description: 'Mobile app development involves creating software for mobile devices...', link: '' },
    { icon: assets.ui_icon, title: 'UI/UX design', description: 'UI/UX design focuses on creating a seamless user experience...', link: '' },
    { icon: assets.graphics_icon, title: 'Graphics design', description: 'Creative design solutions to enhance visual communication...', link: '' },
]

export const infoList = [
    { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Languages', description: 'HTML, CSS, JavaScript, React Js, Next Js, Tailwind CSS, Node Js ' },
    { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Education', description: 'B.Tech in Computer Engineering' },
    { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Projects', description: 'Built more than 5 projects' }
];

export const toolsData = [
    assets.vscode, assets.firebase, assets.mongodb, assets.figma, assets.git, assets.postman, assets.docker, assets.aws, assets.redis
];

export const journeyData = [
  {
    title: "Started Learning Programming",
    description:
    [
      "I began my journey with basic programming concepts in Python and JavaScript.",
      "Building small projects to understand the fundamentals."
    ],
    timeframe: "2021",
    icon: assets.start,
    iconDark: assets.start_dark
  },
  {
    title: "Built First Web App",
    description:
    [
      "Created my first full-stack web application using React and Node.js.",
      "Integrating APIs and learning database management."
    ],
    timeframe: "2022",
    icon: assets.first, 
    iconDark: assets.first_dark

  },
  {
    title: "Internship & Open Source",
    description:
    [
      "Contributed to open-source projects and completed an internship.",
      "Gaining real-world experience in full-stack development."
    ],
    timeframe: "2023-2024",
    icon: assets.internship,
    iconDark: assets.internship_dark
 
  },
  {
    title: "Professional Development",
    description:
    [
      "Working on production-level applications, exploring advanced topics like cloud deployment, performance optimization, and security."
    ],
    timeframe: "2025-Present",
    icon: assets.professional,
    iconDark: assets.professional_dark
 
  },
];

export const certificatesData = [
  {
    title: "Ultimate AWS Certified Cloud Practitioner CLF-C02",
    issuer: "Udemy",
    date: "Mar 2025",
    image: "/aws.png",
    link: "https://udemy-certificate.s3.amazonaws.com/pdf/UC-c848820b-87df-4247-9450-5634abd42988.pdf",
  },
  {
    title: "IIT Kanpur - Developing Soft Skills and Personality",
    issuer: "NPTEL",
    date: "Nov 2024",
    image: "/nptel-1.png",
    link: "https://drive.google.com/file/d/1hr-y5vdO8ToErVSiEi7Ahs20v_YH7PvQ/view",
  },
  {
    title: "The Complete Full-Stack Web Development",
    issuer: "Udemy",
    date: "May 2025",
    image: "/web-development.png",
    link: "https://udemy-certificate.s3.amazonaws.com/pdf/UC-bf707a0d-ef66-4e7e-959f-19d4cb3a7407.pdf",
  },
  {
    title: "Google Cloud Computing Foundations Certificate",
    issuer: "Google Cloud",
    date: "Apr 2025",
    image: "/google-cloud.png",
    link: "https://www.credly.com/badges/be6e8268-e6df-4215-bac2-19490102fdd6/linked_in_profile",
  },
  {
    title: "The Data Science Course: Complete Data Science",
    issuer: "Udemy",
    date: "Apr 2025",
    image: "/data-science.png",
    link: "https://udemy-certificate.s3.amazonaws.com/pdf/UC-4e7a93fc-26ef-48c9-b6a3-e5cb837c98d8.pdf",
  },
  {
    title: " Business Intelligence & Analytics Certification",
    issuer: "NPTEL",
    date: "May 2025",
    image: "/nptel-2.png",
    link: "https://drive.google.com/file/d/1M-eHXR1MEq-s0ubwPQO5XF19GuN3QqFb/view",
  },
  {
    title: "React - The Complete Guide 2025(incl. Next.js , Redux)",
    issuer: "Udemy",
    date: "May 2025",
    image: "/react.png",
    link: "https://www.udemy.com/certificate/UC-b6666df2-bab3-41b0-8ba8-54f1f3a29940/",
  },
];
