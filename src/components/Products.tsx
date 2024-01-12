import product1 from '../pages/assets/products-1.jpg';
import product2 from '../pages/assets/products-2.jpg';

import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useEffect } from 'react';


function Products() {
  useEffect(() =>{
    AOS.init({duration: 800, 
    easing: 'ease-in-out', 
 },
);
},[])
  return (
   <div className="bg-white">
     <section className="p-8 md:p-16">
            <div className='flex md:flex-row flex-col items-center justify-center md:text-left text-center flex-wrap p-2 m-3'>
              <div className='grid md:grid-cols-2 grid-cols-1 gap-6'>
              <div className=' flex flex-col md:basis-[45%] basis-full mx-4 '>
                    <h2 data-aos="fade-up"  className='font-bold font-custom-1 text-green3 text-3xl p-1 m-2'>OUR PRODUCT</h2>
                    <h1 data-aos="fade-up" className='font-bold text-black2 text-4xl p-1 m-2 mb-4'>HEALTHY GOATS</h1>
                    <img data-aos="fade-up" src={product1} alt="products"  className='border border-transparent rounded-[20px] w-[500px]' style={{boxShadow: ' -10px 0 0px -5px #7ec242'}}/>
                </div>

                <div className=' flex flex-col md:basis-[45%] basis-full mx-4'>
                <img data-aos="fade-up" src={product2} alt="products"  className='border border-transparent rounded-[20px] w-[500px] mb-3' style={{boxShadow: ' 10px 0 0px -5px #7ec242'}}/>
                <p data-aos="fade-up"  className='text-grey text-xl m-2 p-1'>
                Mauris ut commodo neque, lobortis hendrerit nisl. Integer a sem ac erat cursus laoreet eget id eros. Donec nec pulvinar odio. Ut ante ante, condimentum quis enim.
                </p>
                <a data-aos="fade-up" href="/" className='text-green2 font-bold text-xl p-1 m-1'>Read More ➜</a>
                </div>
              </div>
            </div>
        </section>
   </div>
  )
}

export default Products