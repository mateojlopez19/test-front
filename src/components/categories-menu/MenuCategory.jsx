import React from 'react'

const MenuCategory = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-1 col-span-3 md:col-auto w-full md:w-full h-[350px] my-2 md:my-4'>
      <div className='drop-shadow-md border-2 rounded-lg w-full md:w-full h-[350px] my-2 md:my-6 mx-auto bg-[#dfffd5]'>
        <h3 className="text-black text-center mt-4 font-semibold text-xl">Categorias</h3>
        <ul role="list" className="text-base mx-auto md:mx-auto font-normal text-black my-4 pb-6 border-gray-200 mt-4 w-full">
          <li className='text-black my-2 py-3 w-full mx-auto text-center md:text-left'>
            <a href="#" className='ml-4'> Vegetales y frutas </a>
          </li>

          <li className='text-black my-2 py-3 w-full mx-auto text-center md:text-left'>
            <a href="#" className='ml-4'> Cuidado personal </a>
          </li>

          <li className='text-black my-2 py-3 w-full mx-auto text-center md:text-left'>
            <a href="#" className='ml-4'> Alimentos y bebidas </a>
          </li>

          <li className='text-black my-2 py-3 w-full mx-auto text-center md:text-left'>
            <a href="#" className='ml-4'> Vitaminas naturales </a>
          </li>

          <li className='text-black my-2 py-3 w-full mx-auto text-center md:text-left'>
            <a href="#" className='ml-4'> comida de animales</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default MenuCategory