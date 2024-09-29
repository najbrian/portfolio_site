import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import Transition from '../../Transition/transition';

import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

const Projects = () => {
  const navigate = useNavigate()
  return (
    <div className='text-center mt-5'>
      <div className='text-4xl font-bold'>
        <h1>Brian's Projects</h1>
      </div>
      <div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-5'>
        <div className='relative w-full group'>
          <img className='w-full h-64 object-cover transition-transform ease-in-out duration-300 group-hover:scale-110 group-hover:opacity-30 rounded-3xl' src='https://camo.githubusercontent.com/e1fe4eedcb118668f4e55f5ce21fcfdc7d8258350296bf6dbc65c94487c10462/68747470733a2f2f692e696d6775722e636f6d2f6b5a71375561702e706e67' alt="BudgetWise" />
          <div className='absolute inset-10 flex-col justify-center align-middle items-center text-center text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
            <h1 className='mb-5 font-bold'>BudgetWise</h1>
            <Stack spacing={2} direction="column" alignItems='center' justify='center'>
              <Button variant="contained" sx={{width:'6rem', background:'black'}} ><a href='https://budgetwise-app.netlify.app/' target="_blank">Go Live</a></Button>
              <Button variant="contained" sx={{width: '15rem'}}><a href='https://github.com/najbrian/watch-collection-app' target='_blank'>FrontEnd GitHub Link</a></Button>
              <Button variant="contained" sx={{width: '15rem'}}><a href='https://github.com/najbrian/budgetwise-back-end' target='_blank'>BackEnd GitHub Link</a></Button>
            </Stack>
          </div>
        </div>
        <div className='relative w-full group'>
          <img className='w-full h-64 object-cover transition-transform ease-in-out duration-300 group-hover:scale-110 group-hover:opacity-30 rounded-3xl ' src='https://camo.githubusercontent.com/e96b9e295531fdc14e405a205df94f8bcefc94184e7e0b24d439d723cfe4a7b4/68747470733a2f2f696d6775722e636f6d2f696933365076742e706e67' alt="Browser Based BlackJack" />
          <div className='absolute inset-10 flex-col justify-center align-middle items-center text-center text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
            <h1 className='mb-5 font-bold'>Browser Based BlackJack</h1>
            <Stack spacing={2} direction="column" alignItems='center' justify='center'>
              <Button variant="contained" sx={{width:'6rem', background:'black'}} ><a href='https://najbrian.github.io/browser-based-game-blackjack/' target="_blank">Go Live</a></Button>
              <Button variant="contained" sx={{width: '8rem'}}><a href='https://github.com/najbrian/browser-based-game-blackjack?tab=readme-ov-file' target='_blank'>GitHub Link</a></Button>
            </Stack>
          </div>
        </div>
        

        <div className='relative w-full group'>
          <img className='w-full h-64 object-cover transition-transform ease-in-out duration-300 group-hover:scale-110 group-hover:opacity-30 rounded-3xl' src='https://camo.githubusercontent.com/9c0ccb41c511e15cf8bd9aba49c9c76001015f59a87ff2289b436113d12b728f/68747470733a2f2f692e696d6775722e636f6d2f684250643937442e706e67' alt="Watch World" />
          <div className='absolute inset-10 flex-col justify-center align-middle items-center text-center text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
            <h1 className='mb-5 font-bold'>Watch World</h1>
            <Stack spacing={2} direction="column" alignItems='center' justify='center'>
              <Button variant="contained" sx={{width:'6rem', background:'black'}} ><a href='https://watch-collection-app-158f655f9867.herokuapp.com/' target="_blank">Go Live</a></Button>
              <Button variant="contained" sx={{width: '8rem'}}><a href='https://github.com/najbrian/watch-collection-app' target='_blank'>GitHub Link</a></Button>
            </Stack>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Transition(Projects);