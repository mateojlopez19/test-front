import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import farmer from '../assets/farmer.jpg';
import adrian from '../assets/adrian.jpg';
import useSlider from '../hooks/useSlider';

function Slider2() {
  const images = [farmer, adrian];
  const { prevSliderHandler, nextSliderHandler, activeSlide } = useSlider(images);

  return (
    <div className='bg-black md:my-0 mt-96 z-0'>
      {images.map((item, index) => {
        return (
          <div
            key={index}
            className={activeSlide === index ? "flex items-center" : "hidden"}
          >
            <button
              className="text-6xl border-2 border-black"
              onClick={() => prevSliderHandler(index)}
            >
              <FiChevronLeft className="text-white" />
            </button>
            <div className=" w-screen h-auto md:h-[600px] bg-black">
              <h1 className="md:visibility md:absolute md:left-1/3 text-[rgba(255,255,255,0.77)] font-extrabold text-4xl inset-x-0 -bottom-20 z-0">
                Nuestros Productores
              </h1>
              <img
                src={item}
                alt="landscape"
                className="object-cover w-full h-full  bg-[rgb(0,0,0,0.5)] "
              />
            </div>
            <button
              className="text-6xl border-2 border-black"
              onClick={() => nextSliderHandler(index)}
            >
              <FiChevronRight className="text-white" />
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default Slider2;
