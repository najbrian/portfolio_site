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
      <div className="text-5xl font-bold flex justify-center mt-5">
        <h1>About Brian</h1>
      </div>

      <div className="flex mt-20">
        <div className="flex justify-start ml-5" dir='ltr'>
          <img className='max-h-96 max-w-96 rounded-s-full' src='src/assets/brian.jpg'/>
          <div className='ml-5 text-wrap text-xl'>
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
                  <Button href="https://www.linkedin.com/in/nabrian/" target="_blank" sx={{backgroundColor: '#A6B37D', color: 'black'}}>
                    <LinkedInIcon />
                  </Button>
                  <Button href="https://github.com/najbrian" target="_blank" sx={{backgroundColor: '#A6B37D', color: 'black'}}>
                    <GitHubIcon />
                  </Button>
                  <Button href="mailto:najbrian@gmail.com" sx={{backgroundColor: '#A6B37D', color: 'black'}}>
                    <EmailIcon />
                  </Button>
                </Stack>
              </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
 
export default Transition(AboutMe);