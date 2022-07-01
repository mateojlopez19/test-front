import React, {useState} from 'react'
//import {MenuIcon, XIcon} from '@heroicons/react/outline';
import logoP from '../../assets/logoP.png';
import {Link} from 'react-router-dom';


const NavBar = () => {
    const [nav, setNav] = useState(false);

    const handleClick = () => {
      setNav(!nav);
    };


  return (
    <div className='w-full h-[160px] bg-[#1D4f15] drop-shadow-lg'>
        <div className='px-1 flex justify-between items-center w-full h-full'>
            <div className="ml-3">
                <img className='w-40 rounded-full border-none h-32 object-cover bg-transparent' src={logoP} alt="/" />
            </div>
            <div className=' flex flex-col'>
                <div class="flex justify-center mt-5 mb-1">
                    <div class="mb-4 xl:w-9/12">
                        <div class="input-group relative flex flex-row items-stretch w-full">
                        <input type="search" className='form-control relative flex-auto min-w-0 block w-full px-3 py-2 text-base font-normal text-black bg-white bg-clip-padding border border-solid rounded transition ease-in-out m-0 focus:text-black focus:bg-white focus:border-[#f0f359c9] focus:outline-none text-center' placeholder="Buscar..." aria-label="Search" aria-describedby="button-addon2"/>
                        <button class="btn px-6 py-2.5 bg-white text-black font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-zinc-100   hover:shadow-lg   focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out flex" type="button" id="button-addon2">
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" class="w-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
                            </svg>
                        </button>
                        </div>
                    </div>
                </div>
                <ul className='hidden md:flex mb-2'>
                    <li className='text-xl ml-3 px-3 py-3'><Link to='/'>Inicio</Link></li>
                    <li className='text-xl px-3 py-3'><Link to='/productos'>Productos</Link></li>
                    <li className='text-xl px-3 py-3'><Link to='/productores'>Productores</Link></li>
                    <li className='text-xl px-3 py-3'><Link to='/quienesomos'>Quienes somos</Link></li>
                    <li className='text-xl px-3 py-3'><Link to='/contactanos'>Contactanos</Link></li>
                    {/* <li className='text-xl px-3 py-3'><Link to='/blog'>Blog</Link></li> */}
                </ul>
            </div>
            <div className='hidden md:flex pr-4'>
                <button className='border-none bg-transparent text-white mr-4 px-3 py-4 flex flex-row text-xl'>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <Link to='/ingresar'>Mi cuenta</Link>
                </button>
                <button className='border-none bg-transparent text-white px-3 py-4  flex flex-row text-xl'>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    Mi compra
                </button>
            </div>
            {/* <div className='md:hidden' onClick={handleClick}>
                {!nav ? <MenuIcon className='w-5 text-white' /> : <XIcon className='w-5 text-white'/>}
            </div> */}
        </div>
        {/* Responsive */}
        <ul className= {!nav ? 'md:hidden absolute bg-[#1D4f15] w-full px-8 py-2': 'hidden'}>
            <li className='border-b-2 bg-[#1D4f15] w-full py-3'><Link to='/'>Inicio</Link></li>
            <li className='border-b-2 bg-[#1D4f15] w-full py-3'><Link to='/productos'>Productos</Link></li>
            <li className='border-b-2 bg-[#1D4f15] w-full py-3'><Link to='/productores'>Productores</Link></li>
            <li className='border-b-2 bg-[#1D4f15] w-full py-3'><Link to='/quienesomos'>Quienes somos</Link></li>
            <li className='border-b-2 bg-[#1D4f15] w-full py-3'><Link to='/contactanos'>Contactanos</Link></li>
            {/* <li className='border-b-2 bg-[#1D4f15] w-full py-3'><Link to='/blog'>Blog</Link></li> */}
            <div className='flex flex-col'>
                <button className='bg-transparent px-8 py-3 mb-4 mt-1 text-white'><Link to='/ingresar'>Mi cuenta</Link></button>
                <button className='px-8 py-3 text-white'>Mi compra</button>
            </div>
        </ul>
    </div>
  )
}

export default NavBar;
