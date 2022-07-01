import React from 'react';
import arcoiris from '../../assets/arcoiris.png';
import doñachus from '../../assets/doñachus.jpg';
import elmoral from '../../assets/elmoral.jpg';
import monty from '../../assets/monty.png';
import santana from '../../assets/santana.png';
import montañita from '../../assets/montañita.jpg';
import deliplatano from '../../assets/deliplatano.jpeg';
import gourmezza from '../../assets/gourmezza.jpg';
import konciencia from '../../assets/konciencia.png';
import margarita from '../../assets/margarita.jpg';
import {Link} from 'react-router-dom';




const Brands = () => {
  return (
    <div className='w-auto mx-2 md:w-4/5 md:mx-auto'>
      <div className='w-full md:w-8/12 h-auto md:mb-4 mt-96 md:my-12 mx-auto'>
        <h1 className='text-center text-5xl font-bold text-[#1D4f15] mt-2'>Productores</h1>
      </div>
      <div className='grid grid-cols-1 my-6 md:grid-cols-4 md:my-10 md:gap-x-auto'>
        <div className='border-2 drop-shadow-md w-full md:w-11/12 h-48 my-4 md:my-8'><img src={arcoiris} alt="/" className=' w-full md:w-full h-full'/></div>
        <div className='border-2 drop-shadow-md w-full md:w-11/12 h-48 my-4 md:my-8'><Link to='/marcainfo' target="_blank"><img src={doñachus} alt="/" className=' w-full md:w-full h-full'/></Link></div>
        <div className='border-2 drop-shadow-md w-full md:w-11/12 h-48 my-4 md:my-8'><img src={elmoral} alt="/" className=' w-full md:w-full h-full'/></div>
        <div className='border-2 drop-shadow-md w-full md:w-11/12 h-48 my-4 md:my-8'><img src={monty} alt="/" className=' w-full md:w-full h-full'/></div>
        <div className='border-2 drop-shadow-md w-full md:w-11/12 h-48 my-4 md:my-8'><img src={santana} alt="/" className=' w-full md:w-full h-full'/></div>
        <div className='border-2 drop-shadow-md w-full md:w-11/12 h-48 my-4 md:my-8'><img src={montañita} alt="/" className=' w-full md:w-full h-full'/></div>
        <div className='border-2 drop-shadow-md w-full md:w-11/12 h-48 my-4 md:my-8'><img src={konciencia} alt="/" className=' w-full md:w-full h-full'/></div>
        <div className='border-2 drop-shadow-md w-full md:w-11/12 h-48 my-4 md:my-8'><img src={deliplatano} alt="/" className=' w-full md:w-full h-full'/></div>
        <div className='border-2 drop-shadow-md w-full md:w-11/12 h-48 my-4 md:my-8'><img src={elmoral} alt="/" className=' w-full md:w-full h-full'/></div>
        <div className='border-2 drop-shadow-md w-full md:w-11/12 h-48 my-4 md:my-8'><img src={gourmezza} alt="/" className=' w-full md:w-full h-full'/></div>
        <div className='border-2 drop-shadow-md w-full md:w-11/12 h-48 my-4 md:my-8'><img src={monty} alt="/" className=' w-full md:w-full h-full'/></div>
        <div className='border-2 drop-shadow-md w-full md:w-11/12 h-48 my-4 md:my-8'><img src={margarita} alt="/" className=' w-full md:w-full h-full'/></div>
      </div>
    </div>
  )
}

export default Brands
