import * as React from 'react'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'
import EmailIcon from '@mui/icons-material/Email'
import { Link } from "react-router-dom";
import Transition from '../../Transition/transition'

const AboutMe = () => {
  return (
    <>
    <div>
      <div className="text-5xl font-bold flex justify-center mt-5 text-white">
        <h1>About Me</h1>
      </div>

      <div className="flex mt-20 ml-20 mr-20">
        <div className="flex justify-start ml-5">
          <img className='max-h-96 max-w-96 rounded-s-full opacity-80 hover:opacity-100' src='https://i.imgur.com/NogPFAa.jpeg'/>
          <div className='ml-5 text-wrap text-aboutme bg-white p-8 rounded-lg opacity-80 hover:opacity-100'>
            <p>Hello! I'm Brian, and I am a full-stack software developer. Why full stack? Because I enjoy frontend development just as much as backend development! I love solving problems, and each solution is like adding a Lego piece to the final product.</p>
            <br />
            <p>I started my career as a project/program manager in various industries, including e-discovery, e-commerce, and tech companies such as LinkedIn. During my time as a PM, I acquired many skills that are transferable to the world of coding. With my experience on the business side, I understand how crucial turnaround time is, how to have meaningful and efficient conversations about jobs to be done, and how to communicate effectively with both technical and non-technical stakeholders.</p>
            <br />
            <p>After my years in program management, I realized that I truly have a passion for creativity and problem-solving. I enjoy being challenged, testing my limits, and constantly learning. I love experimenting, discovering what works and what doesn’t, learning from my peers, and witnessing how their creativity shines.</p>
            <br />
            <p>This realization led me to invest in myself by enrolling in General Assembly's three-month immersive software engineering bootcamp. I successfully graduated and am now looking to start my journey as a software developer.</p>
            <br />
              <div className='flex justify-between mr-20'>
                <Stack>
                  <Button sx={{color:'white', backgroundColor:'#4b2e2e' }} component={Link} to='/'>Back</Button>
                </Stack>
                <Stack direction="row" spacing={2}>
                  <Button href="https://www.linkedin.com/in/nabrian/" target="_blank" sx={{backgroundColor: '#A6B37D', color: 'white'}}>
                    <LinkedInIcon />
                  </Button>
                  <Button href="https://github.com/najbrian" target="_blank" sx={{backgroundColor: '#A6B37D', color: 'white'}}>
                    <GitHubIcon />
                  </Button>
                  <Button href="mailto:najbrian@gmail.com" sx={{backgroundColor: '#A6B37D', color: 'white'}}>
                    <EmailIcon />
                  </Button>
                </Stack>
              </div>
          </div>
        </div>
      </div>
    </div>
    <div className="flex justify-center mt-32 gap-1">
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
  );
}
 
export default Transition(AboutMe);