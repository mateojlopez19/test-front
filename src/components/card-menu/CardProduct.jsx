import React from 'react';
import mandarina from '../../assets/mandarina.jpg';
import limon from '../../assets/limon.jpg';
import cebolla from '../../assets/cebolla.png';
import Zanahoria from '../../assets/zanahoria.jpg';
import MenuCategory from '../categories-menu/MenuCategory';
import {Link} from 'react-router-dom';

const CardProduct = () => {
  return (
    <div className='w-auto mx-2 md:w-full md:mx-auto md:my-8 mt-8'>
      <div className='grid grid-flow-row md:grid-flow-col my-8 md:my-10'>
        <MenuCategory/>
        {/* Columnas de las tarjetas */}
        <div className='grid grid-cols-1 md:grid-cols-4 col-span-3 mx-auto md:mx-auto w-full my-4 md:my-4'>
          {/* Tarjetas */}
          <div className='border-2 h-auto drop-shadow-md w-4/5 md:w-4/5 my-4 md:my-6 mx-auto bg-white rounded-lg'>
            <img src={limon} alt="/" className='h-48 w-full md:w-full rounded-lg'/>
            <h1 className='text-center mt-2 font-medium'>Limon</h1>
            <h3 className='text-center mt-4 text-yellow-500'>$5000</h3>
            <div class="mt-4 mx-auto w-4/5 flex justify-center">
              <button type="submit" className="text-white bg-[#1D4f15]  hover:bg-[#226119] focus:outline-none focus:ring-blue-300 font-medium text-sm w-full sm:w-full px-8 py-2.5 text-center mb-5">Visualizar</button>
            </div>
          </div>
          <div className='border-2 h-auto drop-shadow-md w-4/5 md:w-4/5 my-4 md:my-6 mx-auto bg-white rounded-lg'>
            <img src={mandarina} alt="/" className='h-48 w-full md:w-full rounded-lg'/>
            <h1 className='text-center mt-2 font-medium'>Mandarina</h1>
            <h3 className='text-center mt-4 text-yellow-500'>$15000</h3>
            <div class="mt-4 mx-auto w-4/5 flex justify-center">
              <button type="submit" className="text-white bg-[#1D4f15]  hover:bg-[#226119] focus:outline-none focus:ring-blue-300 font-medium text-sm w-full sm:w-full px-8 py-2.5 text-center mb-5"><Link to='/productoinfo' target="_blank">Visualizar</Link></button>
            </div>
          </div>
          <div className='border-2 h-auto drop-shadow-md w-4/5 md:w-4/5 my-4 md:my-6 mx-auto bg-white rounded-lg'>
            <img src={cebolla} alt="/" className='h-48 w-full md:w-full rounded-lg'/>
            <h1 className='text-center mt-2 font-medium'>Cebolla</h1>
            <h3 className='text-center mt-4 text-yellow-500'>$10000</h3>
            <div class="mt-4 mx-auto w-4/5 flex justify-center">
              <button type="submit" className="text-white bg-[#1D4f15]  hover:bg-[#226119] focus:outline-none focus:ring-blue-300 font-medium text-sm w-full sm:w-full px-8 py-2.5 text-center mb-5">Visualizar</button>
            </div>
          </div>
          <div className='border-2 h-auto drop-shadow-md w-4/5 md:w-4/5 my-4 md:my-6 mx-auto bg-white rounded-lg'>
            <img src={Zanahoria} alt="/" className='h-48 w-full md:w-full rounded-lg'/>
            <h1 className='text-center mt-2 font-medium'>Zanahoria</h1>
            <h3 className='text-center mt-4 text-yellow-500'>$5000</h3>
            <div class="mt-4 mx-auto w-4/5 flex justify-center">
              <button type="submit" className="text-white bg-[#1D4f15]  hover:bg-[#226119] focus:outline-none focus:ring-blue-300 font-medium text-sm w-full sm:w-full px-8 py-2.5 text-center mb-5">Visualizar</button>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default CardProduct
