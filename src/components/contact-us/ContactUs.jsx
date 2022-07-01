import React from 'react'

const ContactUs = () => {
  return (
    <div className='w-auto mx-2 md:w-4/5 md:mx-auto md:my-8 mt-96'>
      <div className='grid grid-cols-1 my-6 md:grid-cols-1 md:mt-8 md:mb-12'>
        <div className='w-full md:w-8/12 h-auto mt-3 mb-4 md:mb-12 md:mt-3 mx-auto'>
          <h1 className='text-center text-5xl font-bold text-[#1D4f15]'>Contacto</h1>
        </div>
        <form className='border-2 bg-[#f1f1f1] w-full md:w-11/12 h-auto my-4 md:my-6 mx-auto rounded-3xl drop-shadow-lg'>
          <div className="mb-10 mx-auto w-4/5 mt-16">
            <input type="text" id="name" className="rounded-lg shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-green-400 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Nombre" required />
          </div>
          <div className="mb-10 mx-auto w-4/5">
            <input type="email" id="email" className="rounded-lg shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-green-400 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Correo electronico" required />
          </div>
          <div className="mb-10 mx-auto w-4/5">
            <input type="text" id="affair" className="rounded-lg shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-green-400 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Asunto" required />
          </div>
          <div className="mb-12 mx-auto w-4/5">
            <textarea id="message" rows="4" className="rounded-lg block p-2.5 w-full h-32 resize-none text-sm text-gray-900 bg-gray-50 border border-gray-300 focus:ring-blue-500 focus:border-green-400 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Escribe tu mensaje..."></textarea>
          </div>
          <div className="mb-16 mx-auto w-4/5 flex justify-center">
            <button type="submit" className="text-white  bg-[#1D4f15]  hover:bg-zinc-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm w-full sm:w-auto px-8 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Enviar</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ContactUs;
