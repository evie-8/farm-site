import Navbar from '../components/navbar'

import babyGoat from './assets/little-goat.jpg';
import goatgrass from './assets/goat-grass.jpg';
import blackGoat from './assets/black-product.jpeg'

import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useEffect } from 'react';
import Products from '../components/Products';
import VisitUs from '../components/VIsitUs';
import { Check } from 'lucide-react';

function ProductsPage() {
  useEffect(() =>{
    AOS.init({duration: 800, 
    easing: 'ease-in-out', 
 },
);
},[])
  return (
   <section>
     <div className='header-3'>
          <Navbar/>
        <div className='grid justify-center pt-20 text-left text-white m-[100px]  mt-0'>
                <h1 className='fadeInUp-animation font-bold md:text-5xl text-4xl text-center px-6 md:mt-[150px] mt-[100px]' >OUR PRODUCTS </h1>
                <h3 className='fadeInUp-animation  font-custom md:text-3xl text-2xl text-center ' >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
                </h3>
            </div>

         
    </div>
    <Products/>
    <section className='header-4'>
    <div className='grid justify-center pt-20 text-left text-white md:m-[100px]  '>
                <h1 className='fadeInUp-animation font-bold md:text-3xl text-2xl mb-2 text-center text-green3 font-custom-1 px-6' >FARM STARTER</h1>
                <h3 className='fadeInUp-animation md:text-5xl text-3xl text-center ' >
                  START YOUR OWN FARM
                </h3>
            </div>

      <div className='p-8 md:p-16 md:pt-0'>

            <div className='flex md:flex-row flex-col flex-wrap items-center justify-center -mx-5 md:mx-auto'>
                <div data-aos="fade-up"   data-aos-delay="200" className='flex flex-col  basis-[30%] min-w-[300px]  border border-transparent bg-transparent rounded-[25px] mx-2 mb-3 shadow-customrelative'>
                              <div className='relative'>
                              
                                      <img src={babyGoat} alt="goat eating grass"  className="w-[100%] p-0 object-cover border-none border-transparent rounded-b-none rounded-[25px] h-[200px]"/>
                                
                              </div>
                              <div className='pb-6  mb-3 text-left bg-white  w-[100%] rounded-b-[25px]'>
                                  <h2 className='font-bold text-2xl text-black2 m-4 p-1 pb-3 border-b border-grey/15 '>Young Goat</h2>
                                  <p className='font-semibold text-black3 m-4  p-1'>Lorem ipsum dolor sit amet.</p>

                                  <div  className='m-4 '>
                                  <p className='flex gap-2 font-semibold text-grey mb-2'>
                                    <Check size={20} className='text-green' />
                                    100% Natural Breed
                                  </p>
                                  <p className='flex gap-2 font-semibold text-grey mb-2'>
                                    <Check size={20} className='text-green' />
                                    Organic Feed
                                  </p>

                                  <p className='flex gap-2  font-semibold text-grey mb-2'>
                                    <Check size={20} className='text-green' />
                                    High Quality
                                  </p>
                                  </div>
                              
                                    <button className='text-white text-base hover:bg-green2 border border-transparent rounded-full  px-7 py-4 bg-green m-2 '>
                                    <a href="/" >Order Now</a>
                                    </button>
                              </div>
          
                  </div>
                  <div data-aos="fade-up"   data-aos-delay="500" className='flex flex-col  basis-[30%] min-w-[300px] border border-transparent bg-transparent rounded-[25px] mx-2 mb-3 shadow-customrelative'>
                              <div className='relative'>
                              
                                      <img src={goatgrass} alt="goat eating grass"  className="w-[100%] p-0 object-cover border-none border-transparent rounded-b-none rounded-[25px] h-[200px]"/>
                                
                              </div>
                              <div className='pb-6  mb-3 text-left bg-white  w-[100%] rounded-b-[25px]'>
                                  <h2 className='font-bold text-2xl text-black2 m-4 p-1 pb-3 border-b border-grey/15 '>Young Goat</h2>
                                  <p className='font-semibold text-black3 m-4  p-1'>Lorem ipsum dolor sit amet.</p>

                                  <div  className='m-4 '>
                                  <p className='flex gap-2 font-semibold text-grey mb-2'>
                                    <Check size={20} className='text-green' />
                                    100% Natural Breed
                                  </p>
                                  <p className='flex gap-2 font-semibold text-grey mb-2'>
                                    <Check size={20} className='text-green' />
                                    Organic Feed
                                  </p>

                                  <p className='flex gap-2  font-semibold text-grey mb-2'>
                                    <Check size={20} className='text-green' />
                                    High Quality
                                  </p>
                                  </div>
                              
                                    <button className='text-white text-base hover:bg-green2 border border-transparent rounded-full  px-7 py-4 bg-green m-2 '>
                                    <a href="/" >Order Now</a>
                                    </button>
                              </div>
          
                  </div>

                  <div data-aos="fade-up"   data-aos-delay="800" className='flex flex-col  basis-[30%]  min-w-[300px] border border-transparent bg-transparent rounded-[25px] mx-2 mb-3 shadow-customrelative'>
                              <div className='relative'>
                              
                                      <img src={blackGoat} alt="goat eating grass"  className="w-[100%] p-0 object-cover border-none border-transparent rounded-b-none rounded-[25px] h-[200px]"/>
                                
                              </div>
                              <div className='pb-6  mb-3 text-left bg-white  w-[100%] rounded-b-[25px]'>
                                  <h2 className='font-bold text-2xl text-black2 m-4 p-1 pb-3 border-b border-grey/15 '>Young Goat</h2>
                                  <p className='font-semibold text-black3 m-4  p-1'>Lorem ipsum dolor sit amet.</p>

                                  <div  className='m-4 '>
                                  <p className='flex gap-2 font-semibold text-grey mb-2'>
                                    <Check size={20} className='text-green' />
                                    100% Natural Breed
                                  </p>
                                  <p className='flex gap-2 font-semibold text-grey mb-2'>
                                    <Check size={20} className='text-green' />
                                    Organic Feed
                                  </p>

                                  <p className='flex gap-2  font-semibold text-grey mb-2'>
                                    <Check size={20} className='text-green' />
                                    High Quality
                                  </p>
                                  </div>
                              
                                    <button className='text-white text-base hover:bg-green2 border border-transparent rounded-full  px-7 py-4 bg-green m-2 '>
                                    <a href="/" >Order Now</a>
                                    </button>
                              </div>
          
                  </div>
            </div>

      </div>
    </section>
   
   <VisitUs/>
   </section>
  )
}

export default ProductsPage