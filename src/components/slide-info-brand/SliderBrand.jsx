import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import calvo from '../../assets/calvo.jpg';
import farmer from '../../assets/doñachus.jpg';
import useSlider from '../../hooks/useSlider';

function SliderBrand() {
  const images = [calvo, farmer ];
  const { prevSliderHandler, nextSliderHandler, activeSlide } = useSlider(images);

  return (
    <div className='bg-black md:my-0 z-0'>
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
            <div className=" w-screen h-auto md:h-[400px] bg-black">
              <img
                src={item}
                alt="landscape"
                className="object-contain w-full h-full  bg-[rgb(0,0,0,0.5)] "
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

export default SliderBrand;
