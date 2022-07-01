import React, {useState} from 'react';
import mandarina from '../../assets/mandarina.jpg';
import limon from '../../assets/limon.jpg';

const InfoProduct = () => {

  const [count, setCount] = useState(0);

  const handleSubst = () => {
    if(count <= 0)
      setCount(0)
    else
      setCount(count -1)

  }

  return (
    <div className='w-auto mx-2 md:w-full md:mx-auto md:my-8 mt-96 md:mt-8'>
      <div className='grid grid-flow-row md:grid-flow-col my-8 md:my-10 mx-auto h-3/4'>

        <div className='grid grid-cols-1 md:grid-cols-1 w-auto md:w-[600px] my-4 mx-auto md:my-4 shadow-md border-solid border-2 border-black rounded-3xl h-auto bg-white'>
          <img src={mandarina} alt="/" className='h-full w-full rounded-3xl'/>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-1 w-full md:w-[600px] my-4 mx-auto md:my-4 shadow-md border-solid border-2 border-black rounded-3xl bg-white h-auto'>
          <div className='flex flex-col w-full h-auto'>
            <h1 className='text-center mt-4 text-4xl font-semibold text-[#1D4f15]'>Mandarina</h1>
            <h3 className='text-center mt-6 h-8 font-medium text-[#1D4f15]'>Precio:</h3>
            <h4 className='text-center text-slate-700 h-10'>$15.000</h4>
            <h3 className='text-center mt-2 h-8 font-medium text-[#1D4f15]'>Descripcion:</h3>
            <p className=' text-slate-700 mb-2 h-24 mx-auto md:mx-auto w-3/4 text-justify'>
            Si eres de nuestro equipo, es decir de los que amamos las mandarinas, esto es perfecto para ti 🔝🔝🔝 Seleccionado de nuetras mejores fincas de la region 🎉 ¿Qué esperas para probarla?
            </p>
            <h3 className='text-center mt-4 text-[#1D4f15] h-8 font-medium'>Cantidad:</h3>
            <div className='flex flex-row justify-center mb-2'>
              <button className='px-4' onClick={handleSubst}>-</button>
              <h4 className=' px-4 text-center mt-2 text-slate-700 h-8'>{count}</h4>
              <button className='px-4' onClick={() => setCount(count + 1)}>+</button>
            </div>
            <h3 className='text-center mt-5 h-8 font-medium text-[#1D4f15]'>Presentación:</h3>
            <div className="mb-6 mx-auto w-4/5">
              <select id="option-disabled" className="bg-gray-50 border border-gray-300 focus:none text-gray-900 text-sm rounded-lg block w-full p-2.5 backdrop:dark:text-white dark:focus:ring-blue-400">
                <option value="" selected disabled hidden>Escoge una opcion</option>
                <option value="">500 Gr</option>
                <option value="">1000 Gr</option>
                <option value="">1500 Gr</option>
              </select>
            </div>
            <div class="mb-12 mx-auto w-4/5 flex justify-center mt-4">
            <button type="submit" className="text-white  bg-[#1D4f15]  hover:bg-zinc-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm w-full sm:w-auto px-8 py-2.5 text-center">Agregar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InfoProduct;
