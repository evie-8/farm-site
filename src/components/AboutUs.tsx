import graze from '../pages/assets/goats-graze.jpg';
import brand from '../pages/assets/organic2.png'
import img1 from '../pages/assets/vector-black.png';
import img2 from '../pages/assets/card-image-1.png';
import img3 from '../pages/assets/meat.png';
import img4 from '../pages/assets/card-image-2.png';

import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useEffect } from 'react';


function AboutUs() {

    useEffect(() =>{
        AOS.init({duration: 800, 
        easing: 'ease-in-out', 
     },
);
    },[])
  return (
   <div className="bg-white">
     <section className='p-8 md:p-16'>
            <div className='flex items-center md:flex-row flex-col  justify-center gap-4 m-6'>
                <div  data-aos="fade-up"   className='mt-4 p-4 relative md:mr-[50px]'>
                    <img src={brand} alt='organic'  className='absolute top-0 right-0  md:w-[250px] w-[100px]'/>
                    <img src={graze} alt="goats-graze" className='rounded-[25px] w-full h-full md:w-[500px] md:h-[60vh]' style={{boxShadow: '10px 0 0px -5px #bdc886, -10px 0 0px -5px #bdc886'}} />
                    
                </div>

                <div   className='flex flex-col md:basis-5/12 basis-full min-w-[300px] max-w-[600px] md:text-left text-center md:ml-6'>
                    <h3  data-aos="fade-up" className='font-custom-1 mb-2 font-bold text-green3 text-3xl'>ABOUT US</h3>
                    <h1  data-aos="fade-up" className='text-black2 md:text-5xl text-3xl mb-1 font-bold'>THE TYPICAL RURAL TASTE</h1>
                    <p  data-aos="fade-up" className='text-grey mb-2 text-xl'>Fusce vulputate quam quis auctor scelerisque. In nulla nisl, dapibus ut aliquet porta, dapibus quis lacus. Donec dictum dapibus dui. Maecenas nisi arcu, aliquet a lobortis eget, dignissim sed lacus. Sed sapien enim.</p>
                    <button data-aos="fade-up" className='text-white bg-green hover:bg-green2 px-4 py-2 mt-2 mx-auto md:mx-0 max-w-max  border border-transparent rounded-full'>Contact Us</button>
                </div>

            
            </div>
                
            <div className='flex md:flex-row flex-col flex-wrap items-center justify-center text-center text-black2 my-12'>
                
                  <div   data-aos="fade-up"   data-aos-delay="200" className='flex flex-col items-center justify-center basis-[20%] min-w-[270px] my-3 mx-2 shadow-custom border border-transparent px-6 py-7 rounded-[20px] bg-white'>
                        <img src={img1} alt="images"  width={70}  className='mb-3'/>
                        <h2 className='font-bold text-2xl mb-2'>Healthy Goat</h2>
                        <p className='text-xl pb-3 text-grey'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>   
                    </div>

                    <div  data-aos="fade-up"   data-aos-delay="500" className='flex flex-col items-center justify-center basis-[20%] min-w-[270px] my-3 mx-2 shadow-custom border border-transparent px-6 py-7 rounded-[20px] bg-white'>
                        <img src={img2} alt="images"  width={70}  className='mb-3'/>
                        <h2 className='font-bold text-2xl mb-2'>Hygienic Coop</h2>
                        <p className='text-xl pb-3 text-grey'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>   
                    </div>

                    <div  data-aos="fade-up"   data-aos-delay="800" className='flex flex-col items-center justify-center basis-[20%] min-w-[270px] my-3 mx-2 shadow-custom border border-transparent px-6 py-7 rounded-[20px] bg-white'>
                        <img src={img3} alt="images"  width={70}  className='mb-3'/>
                        <h2 className='font-bold text-2xl mb-2'>Fresh Meat</h2>
                        <p className='text-xl pb-3 text-grey'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>   
                    </div>

                    <div  data-aos="fade-up"   data-aos-delay="1100" className='flex flex-col items-center justify-center basis-[20%] min-w-[270px] my-3 mx-2 text-white shadow-custom border border-transparent px-6 py-7 rounded-[20px] gradient-custom'>
                        <img src={img4} alt="images"  width={70}  className='mb-3'/>
                        <h2 className='font-bold text-2xl mb-2'>Organic fooder</h2>
                        <p className='text-xl pb-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>   
                    </div>
                  </div>
            


        </section>

   </div>
  )
}

export default AboutUs