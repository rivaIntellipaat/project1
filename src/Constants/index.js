import css from "../assets/css.png";
import tailwind from "../assets/tailwind.png";
import html from "../assets/html.png";
import nodejs from "../assets/nodejs.png";
import reactjs from "../assets/reactjs.png";
import mongodb from "../assets/mongodb.png";
import javascript from "../assets/javascript.png";
import web from "../assets/web.png";
import typescript from "../assets/typescript.png";
import ux from "../assets/ux.png"
import reacr from "../assets/reacr.png";
import git from "../assets/git.png";
import pro1 from "../assets/pro1.jpg"
import pro2 from "../assets/pro2.jpg"
import pro3 from "../assets/pro3.jpg"
// import android from "../assets/android.png"

 
 const services = [
   {
     title: "Web Developer",
     icon: web,
   },
   {
     title: "React Developer",
     icon: reacr,
   },
   {
     title: "UI/UX Designer",
      icon: ux,
   },
  
 ];
 
 const technologies = [
   {
     name: "HTML 5",
     icon: html,
   },
   {
     name: "CSS 3",
     icon: css,
   },
   {
     name: "JavaScript",
     icon: javascript,
   },
   {
     name: "TypeScript",
     icon: typescript,
   },
   {
     name: "React JS",
     icon: reactjs,
   },
  
   {
     name: "Tailwind",
     icon: tailwind,
   },
   {
     name: "Node JS",
     icon: nodejs,
   },
   {
     name: "MongoDB",
     icon: mongodb,
   },
  
   {
     name: "git",
     icon: git,
   },

   
 ];
 

 
 const projects = [
   {
     name: "Free Hold",
     description:
       "Web site for made using Anmgular and Typescript for buying and renting real-estate to style and make it responsive Bootsrap is used",
     tags: [
       {
         name: "Typescript",
         color: "blue-text-gradient",
       },
       {
         name: "Angular",
         color: "green-text-gradient",
       },
       {
         name: "Bootstrap",
         color: "pink-text-gradient",
       },
     ],
      image: pro1,
     source_code_link: "https://github.com/riva211/realestate.github.io",
     source_deploy_link: "https://rivasrealestate.netlify.app ",
   },
   {
     name: "ToDo App",
     description:
       "Web application that enables users to manage their daily task and to manage the time efficiently ",
     tags: [
       {
         name: "react",
         color: "blue-text-gradient",
       },
       {
         name: "Tailwind",
         color: "green-text-gradient",
       },
       {
         name: "css",
         color: "pink-text-gradient",
       },
     ],
     image: pro2,
     source_code_link: "https://github.com/riva211?tab=repositories",
     source_deploy_link: "https://rivastodolist.netlify.app",

   },
   {
     name: "OxiBook ",
     description:
     "OxiBook is online book buying and selling website with and user freindly UI. It is a MERN stack web application, ",
     tags: [
       {
         name: "React js",
         color: "blue-text-gradient",
       },
       {
         name: "Nodejs",
         color: "green-text-gradient",
       },
       {
         name: "Tailwind Css",
         color: "pink-text-gradient",
       },
     ],
     image: pro3,
     source_code_link: "https://github.com/riva211?tab=repositories",
     source_deploy_link: "https://gregarious-sorbet-33fff8.netlify.app/",

   },
 ];
 export { services, technologies,  projects };