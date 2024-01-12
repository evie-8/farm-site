import { Check } from 'lucide-react'

import blurImg from '../pages/assets/little-goat.jpg';
import organic from '../pages/assets/organic-1.png';

import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useEffect } from 'react';


function ChooseUs() {
    
    useEffect(() =>{
        AOS.init({duration: 800, 
        easing: 'ease-in-out', 
     },
);
    },[])
  return (
    <section className='header-3'>
    <div className="p-8 md:p-16">
         <div className='flex flex-col-reverse flex-wrap md:flex-row items-center relative justify-center text-center md:text-left flex-wrap  py-7 gap-3'>
                <div className='flex flex-col md:basis-7/12 basis-full mx-3 md:mr-16'>
                    <h2 data-aos="fade-up" className='font-custom-1 text-green3 font-bold md:text-3xl text-2xl'>WHY CHOOSE US</h2>
                    <h1  data-aos="fade-up"  className='text-white font-bold md:text-5xl text-3xl mt-2'>
                        GET THE DIFFERENT TASTE HERE
                    </h1>
                    <h3  data-aos="fade-up" className='md:text-2xl text-xl text-white my-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.

                    </h3>

                    <div  className='mt-2'>
                        <p  data-aos="fade-up"  className='flex gap-2 items-center justify-center md:items-start md:justify-start text-grey pb-4 m-4 border-b'>
                         <Check size={20} className='text-green font-bold'/>
                         Curabitur nec nisl ut orci aliquet 
                        </p>
                        <p data-aos="fade-up"  data-aos-delay='50' className='flex gap-2 items-center justify-center md:items-start md:justify-start text-grey pb-4 m-4 border-b'>
                         <Check size={20} className='text-green font-bold'/>
                         Vivamus molestie vulputate massa a consectetur
                        </p>

                        <p data-aos="fade-up"  data-aos-delay='100' className='flex gap-2 items-center justify-center md:items-start md:justify-start text-grey pb-4 m-4 border-b'>
                         <Check size={20} className='text-green font-bold'/>
                         Fusce vulputate quam quis auctor
                        </p>

                        <p data-aos="fade-up" data-aos-delay='150'  className='flex gap-2 items-center justify-center md:items-start md:justify-start text-grey pb-4 m-4'>
                         <Check size={20} className='text-green font-bold'/>
                         Nulla porttitor nisl eu pharetra scelerisque
                        </p>
                    </div>
                </div>

            <div  className='relative mt-4 pt-4'>
            <img data-aos="fade-out" id='wait-for-organic' data-aos-delay="100" src={organic} alt='oraginc-2' width={200} className='absolute top-[-40px] right-[-30px] z-30 '/>
               
               <img data-aos="fade-up" src={blurImg} alt="blurImg" className='rounded-[25px] w-[300px]' style={{boxShadow: '10px 0 0px -5px #fff, -10px 0 0px -5px #fff'}} />
           
            </div>
                
         </div>
    </div>
 </section>
  )
}

export default ChooseUs;