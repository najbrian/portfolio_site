import { useRef } from 'react'
import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import reactLogo from '../../assets/react.png'
import jsLogo from '../../assets/js.png'
import cssLogo from '../../assets/css.png'
import htmlLogo from '../../assets/html-5.png'
import expressLogo from '../../assets/express.png'
import gitLogo from '../../assets/git.png'
import mongodbLogo from '../../assets/mongodb.png'
import nodeLogo from '../../assets/node.png'
import pythonLogo from '../../assets/python.png'
import djangoLogo from '../../assets/django.png'
import Transition from '../../Transition/transition';


const Dashboard = () => {
  function srcset(image, size, rows = 1, cols = 1) {
    return {
      src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
      srcSet: `${image}?w=${size * cols}&h=${
        size * rows
      }&fit=crop&auto=format&dpr=2 2x`,
    };
  }

  return (
    <>
      <div className='mt-20 flex justify-center text-center'>
        <h1 className='text-5xl relative animate-fadeLeft'>Hello! My name is <strong>Brian</strong> and I am a <strong>full stack software dev.</strong></h1>
      </div>
      <div className='mt-10 flex justify-center text-center'>
        <h2 className='animate-fadeInRight'>As someone who is obsessed in their craft, and striving to constantly learn, I am a full stack developer with a strong interest for JavaScript, React, and all the bells and whistles it comes with. The endlessness of creativity matched with the constant innovation of technology reminds me there's always multiple ways to get the job done, we're always learning, and become a better version of ourselves.</h2>
      </div>
      <div className="flex justify-center mt-10 gap-1">
        <img src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E" alt="JS" />
        <img src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white" alt="HTML" />
        <img src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white" alt="CSS" />
        <img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" alt="React" />
        <img src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB" alt="Express" />
        <img src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white" alt="NodeJS" />
        <img src="https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB" />
      </div>
      <div className="flex justify-center mt-10 gap-1">
        <img src="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind" />
        <img src="https://img.shields.io/badge/MUI-%230081CB.svg?style=for-the-badge&logo=mui&logoColor=white" alt="MUI" />
        <img src="https://img.shields.io/badge/chart.js-F5788D.svg?style=for-the-badge&logo=chart.js&logoColor=white" alt="ChartJS" />
        <img src="https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white" alt="Figma" />
        <img src="https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white" alt="Styled-Components" />
        <img src="https://img.shields.io/badge/Plotly-%233F4F75.svg?style=for-the-badge&logo=plotly&logoColor=white" alt="Plotly" />
      </div>
    </>
    )
}


export default Transition(Dashboard)