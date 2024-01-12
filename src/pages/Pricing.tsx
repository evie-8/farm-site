import Navbar from '../components/navbar'

import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useEffect } from 'react';
import ChooseUs from '../components/choose-us';
import { Bus, Clock, Zap } from 'lucide-react';

function Pricing() {
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
                <h1 className='fadeInUp-animation font-bold md:text-5xl text-4xl text-center px-6 md:mt-[150px] mt-[100px]' >OUR PRICE LIST</h1>
                <h3 className='fadeInUp-animation  font-custom md:text-3xl text-2xl text-center ' >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
                </h3>
            </div>

         
    </div>

  <div  className='bg-white2'>
 <div className='p-8 md:p-16'>
 <div className='flex flex-col md:flex-row items-center justify-center gap-7 flex-wrap'>
        <div  className='flex flex-col md:basis-[45%]  basis-full text-center md:text-left  items-center justify-center md:items-start md:justify-start'>
          <h3 data-aos="fade-up" className='text-3xl font-custom-1 text-green3 p-2 font-bold'>PRICE LIST</h3>
          <h1 data-aos="fade-up"  className='text-black2 text-3xl md:text-4xl font-bold p-2'>HIGH QUALITY CHEAP PRICES</h1>
          <h2 data-aos="fade-up" className='text-xl text-grey p-2'>Nulla et nisl arcu. Vestibulum euismod non libero sed blandit. Proin nec mi eu felis tempor lacinia. Praesent sit amet metus vehicula, bibendum diam vitae.</h2>
          <button data-aos="fade-up" className='text-white text-base hover:bg-green2 border border-transparent rounded-full  px-7 py-4 bg-green m-2 '>
              <a href="/" >Order Now</a>
          </button>
        </div>
        <div data-aos="fade-up" className='flex flex-col md:basis-[42%] basis-full min-w-[300px] items-center justify-between border-none rounded-[20px] md:p-4 p-5 gap-4 shadow-custom md:mx-0 -mx-4'>
          <h2 className='text-black2 font-bold text-3xl m-2 mb-3'>Goat Products</h2>
          <p  className='font-bold flex flex-row justify-between md:w-[80%]'>Goat1 <span> ...................  </span> <span className='text-green whitespace-nowrap'>UGX 30,000</span></p>
          <p  className='font-bold flex flex-row justify-between md:w-[80%]'>Goat2 <span> ...................  </span> <span className='text-green whitespace-nowrap'>UGX 30,000</span></p>
          <p  className='font-bold flex flex-row justify-between md:w-[80%]'>Goat3 <span> ...................  </span> <span className='text-green whitespace-nowrap'>UGX 30,000</span></p>
          <p  className='font-bold flex flex-row justify-between md:w-[80%]'>Goat4 <span> ...................  </span> <span className='text-green whitespace-nowrap'>UGX 30,000</span></p>
          <p  className='font-bold flex flex-row justify-between md:w-[80%]'>Goat5 <span> ...................  </span> <span className='text-green whitespace-nowrap'>UGX 30,000</span></p>
        </div>
      </div>
 </div>
  </div>
    <div className='p-8 md:p-16'>
    <div className='flex md:flex-row flex-col flex-wrap items-center justify-center text-center text-black2 my-12 gap-3 -mx-3'>
                
                <div   data-aos="fade-up"   data-aos-delay="200" className='flex flex-col items-center text-white justify-center basis-[30%] min-w-[300px] my-3 mx-2 shadow-custom-1 border border-transparent px-6 py-7 rounded-[20px] bg-green'>
                      <Zap size={50} className='mb-3'/>
                       <h2 className='font-bold text-2xl mb-2'>QUICK RESPONSE</h2>
                      <p className='text-xl pb-3 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>   
                  </div>

                  <div   data-aos="fade-up"   data-aos-delay="500" className='flex flex-col items-center justify-center basis-[30%] min-w-[300px] my-3 mx-2 shadow-custom-1 border border-transparent px-6 py-7 rounded-[20px] bg-white'>
                      <Bus size={50} className='mb-3'/>
                      <h2 className='font-bold text-2xl mb-2'>FREE DELIVERY</h2>
                      <p className='text-xl pb-3 text-grey'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>   
                  </div>

                  <div   data-aos="fade-up"   data-aos-delay="800" className='flex flex-col items-center justify-center basis-[30%] min-w-[300px] my-3 mx-2 shadow-custom-1 border border-transparent px-6 py-7 rounded-[20px] bg-white'>
                      <Clock size={50} className='mb-3'/>
                      <h2 className='font-bold text-2xl mb-2'>FRESH PRODUCT</h2>
                      <p className='text-xl pb-3 text-grey'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>   
                  </div>
      </div>
    </div>
    <ChooseUs/>
</section>
  )
}

export default Pricing