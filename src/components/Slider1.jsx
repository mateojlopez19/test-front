import data from '../data/data';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
// import { useState } from 'react';
import useSlider from '../hooks/useSlider';

function Slider1() {
  const myData = data;
  const { prevSliderHandler, nextSliderHandler, activeSlide } = useSlider(myData);

  return (
    <div className='m-6 z-0'>
      {myData.map((item) => {
        const { id, image, title } = item;
        return (
          <div key={id} className={ activeSlide === id ? 'flex justify-evenly items-center' : 'hidden'}>
            <button className='text-6xl border-2 border-black text-black' onClick={() => prevSliderHandler(id)}>
              <FiChevronLeft />
            </button>
            <div className='flex justify-evenly items-center w-2/3 h-64 mb-12 mt-12 object-contain '>
              <div className='relative inline-block text-center'>
                <h3 className='absolute left-1/4 text-white font-extrabold md:left-1/3'>{title}</h3>
                <a href='...'><img src={image} alt={title} key={id} className='w-72 h-64 bg-[rgba(0,0,0,0.8)]'/></a>
              </div>
              <div className='relative inline-block text-center'>
                <h3 className='absolute left-1/4 text-white font-extrabold md:left-1/3'>{title}</h3>
                <a href='...'><img src={image} alt={title} key={id+1} className='w-72 h-64 bg-[rgba(0,0,0,0.86)]'/></a>
              </div>
            </div>
            <button className='text-6xl border-2 border-black text-black' onClick={() => nextSliderHandler(id)}>
              <FiChevronRight />
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default Slider1;
