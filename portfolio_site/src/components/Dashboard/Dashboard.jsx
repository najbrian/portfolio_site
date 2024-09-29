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


const Dashboard = () => {
  const codingRef = useRef()

  const itemData = [
    {
      img: jsLogo,
      title: 'JavaScript',
      rows: 2,
      cols: 2,
    },
    {
      img: reactLogo,
      title: 'React',
    },
    {
      img: nodeLogo,
      title: 'Node.js',
    },
    {
      img: expressLogo,
      title: 'Express',
    },
    {
      img: mongodbLogo,
      title: 'MongoDB',
    },
    {
      img: cssLogo,
      title: 'CSS',
      rows: 2,
      cols: 2,
    },
    {
      img: htmlLogo,
      title: 'HTML',
      rows: 2,
      cols: 2,
    },
    {
      img: pythonLogo,
      title: 'Python',
      rows: 2,
      cols: 2,
    },
    {
      img: djangoLogo,
      title: 'Django',
    },
    {
      img: gitLogo,
      title: 'Git',
    },
  ];

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
      <div className='mt-20 flex justify-center'>
        <h1 className='text-5xl relative animate-fadeLeft'>Hello! My name is <strong>Brian</strong> and I am a <strong>full stack software dev.</strong></h1>
      </div>
      <div className='mt-10 flex justify-center text-center'>
        <h2 className='animate-fadeInRight'>As someone who is obsessed in their craft, and striving to constantly learn, I am a full stack developer with a strong interest for JavaScript, React, and all the bells and whistles it comes with. The endlessness of creativity matched with the constant innovation of technology reminds me there's always multiple ways to get the job done, we're always learning, and become a better version of ourselves.</h2>
      </div>
      <div className="flex justify-center mt-10">
        <ImageList
          sx={{ width: 550, height: 850 }}
          variant="quilted"
          cols={4}
          rowHeight={135}
        >
          {itemData.map((item) => (
            <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
              <img
                {...srcset(item.img, 121, item.rows, item.cols)}
                alt={item.title}
                loading="lazy"
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'fill'
                }}
              />
            </ImageListItem>
          ))}
        </ImageList>
      </div>
    </>
    )
}
 
export default Dashboard