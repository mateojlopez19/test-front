import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import blackF from '../../assets/blackF.png';
import img2 from '../../assets/cyber.png';
import amina from '../../assets/amina.jpg';
import useSlider from '../../hooks/useSlider';

function SliderPromo() {
  const images = [blackF, img2, amina];
  const { prevSliderHandler, nextSliderHandler, activeSlide } = useSlider(images);

  return (
    <div className='bg-black md:my-0 mt-96'>
      {images.map((item, index) => {
        return (
          <div key={index} className={activeSlide === index ? "flex items-center" : "hidden"}>
            <button className="text-4xl border-2 border-black" onClick={() => prevSliderHandler(index)}>
              <FiChevronLeft className="text-white " />
            </button>
            <div className=" w-screen  h-auto md:h-[300px] bg-black">
              <img src={item} alt="landscape" className="object-cover w-full h-full  bg-black"/>
            </div>
            <button className="text-4xl border-2 border-black" onClick={() => nextSliderHandler(index)}>
              <FiChevronRight className="text-white" />
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default SliderPromo;
