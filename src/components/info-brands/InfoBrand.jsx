import React from 'react'
import SliderBrand from '../slide-info-brand/SliderBrand';
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";


const InfoBrand = () => {
  return (
    <div className='w-auto mx-2 md:w-4/5 md:mx-auto md:my-8 mt-96'>
      <div className='grid grid-cols-1 my-6 md:grid-cols-1 md:mt-10 md:mb-12 shadow-lg bg-white'>
        <div className='w-full md:w-8/12 h-auto mt-3 mb-4 md:mb-10 md:mt-3 mx-auto'>
          <h1 className='text-center text-5xl font-bold text-[#1D4f15]'>DoñaChus</h1>
        </div>
        <SliderBrand/>
        <p className='mt-10 w-3/4 text-justify mx-auto'>Microempresa dedicada a la producción de café, chocolate, pomadas, panela, té de coca, se trata de pequeños productores Indígenas, afectados por el conflicto armado de la salamina, quienes se dedican a producir los productos según sus cosmovisones culturales y ancestrales. 
        </p>
        <h3 className='text-center mt-8 h-8 font-semibold text-[#1D4f15]'>Contacto</h3>
        <h4 className='text-center text-slate-700 h-8'>Miriam Amaya</h4>
        <h3 className='text-center mt-6 h-8 font-semibold text-[#1D4f15]'>Redes sociales</h3>
        <div className='flex flex-row justify-center mb-8'>
          <FaFacebook className="w-8 mx-2 h-8" />
          <FaInstagram className="w-8 mx-2 h-8" />
          <FaTwitter className="w-8 mx-2 h-8" />
        </div>
      </div>
    </div>
  )
}

export default InfoBrand;