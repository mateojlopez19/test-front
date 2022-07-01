import React from 'react';
import family from '../../assets/family.jpg';
import merca from '../../assets/merca.jpeg';

const AboutUs = () => {
  return (
    //<div className={`w-auto mx-2 md:w-4/5 md:mx-auto md:mt-auto ${window.screen.width < 800 ?  "mt-96" : ""}`}>
    <div className='w-auto mx-2 md:w-4/5 md:mx-auto mt-96 md:mt-auto'>
      <div className='grid grid-cols-1 my-6 md:grid-cols-1 md:my-8 mt-96 '>
        <div className='w-full md:w-8/12 h-auto mt-3 mb-4 md:mb-12 mx-auto'>
          <h1 className='text-center text-5xl font-bold text-[#1D4f15]'>Quienes somos</h1>
        </div>
        <div className='border-2 drop-shadow-lg w-full md:w-11/12 h-96 my-4 md:my-6 mx-auto'>
          <img src={merca} alt="/" className=' w-full md:w-full h-full'/>
        </div>
        <div className='border-2 drop-shadow-lg w-full md:w-11/12 h-96 my-4 md:my-6 mx-auto'>
          <img src={family} alt="/" className=' w-full md:w-full h-full'/>
        </div>
        <div className='w-full md:w-8/12 h-auto my-4 md:my-8 mx-auto'>
          <p>«Valores principales. Nuestros valores reflejan los de un negocio fundado por un grupo de personas dispuestas a enseñar un estilo saludable.»</p>
        </div>
      </div>
    </div>
  )
}

export default AboutUs;
