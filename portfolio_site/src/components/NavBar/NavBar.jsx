import { Link, useNavigate } from "react-router-dom";
import React from 'react'
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'
import EmailIcon from '@mui/icons-material/Email'


const NavBar = () => {
  const navigate = useNavigate()

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  }
  const handleClose = () => {
    setAnchorEl(null);
  }

  return (
    <div className='font-montserrat fixed top-0 w-full z-50 flex'>
      <div className='font-montserrat fixed top-0 w-full z-50 flex justify-between items-center h-16 border-b-2 border-black'>
        <div className='bg-black flex items-center h-full'>
          <h1 onClick={() => { navigate('/') }} className='text-3xl font-bold ml-5 mr-5 text-cream hover:animate-spin cursor-pointer'>BN</h1>
        </div>

        <div className="flex justify-center items-center gap-5 mr-5">
          <Link className="text-3xl hover:animate-jump hover:font-bold transition duration-300" to="/">Home</Link>
          <Link className="text-3xl hover:animate-jump hover:font-bold transition duration-300" to="/about-me">About Me</Link>
          <Link className="text-3xl hover:animate-jump hover:font-bold transition duration-300" to='/projects'>Projects</Link>
          <div className='ml-10'>
            <Button className="hover:animate-jump hover:font-bold transition duration-300"
              id="basic-button"
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
              sx={{fontSize:'1.5rem', color:'black'}}
            >
              Contacts
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              <MenuItem onClick={handleClose}><a href='https://www.linkedin.com/in/nabrian/' target="_blank"><LinkedInIcon />nabrian</a></MenuItem>
              <MenuItem onClick={handleClose}><a href='https://github.com/najbrian' target='_blank'><GitHubIcon />najbrian</a></MenuItem>
              <MenuItem onClick={handleClose}><a href='mailto:najbrian@gmail.com' target='_blank'><EmailIcon />najbrian@gmail.com</a></MenuItem>
            </Menu>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;