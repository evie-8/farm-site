import { CalendarDays, Clock } from 'lucide-react'

import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useEffect } from 'react';

function VisitUs() {
    useEffect(() =>{
        AOS.init({duration: 800, 
        easing: 'ease-in-out', 
     },
);
    },[])
  return (
    <section className='header-2'>
         <div className='p-8 md:p-16'>
                <div className='flex flex-col items-center basis-2/3 justify-center text-center opacity-100 mb-12'   >
                    <h2  data-aos="fade-up" className='font-custom-1 font-bold text-3xl mb-4 text-green3'>COME TO SEE OUR FARM</h2>
                    <h1  data-aos="fade-up" className='text-black2 text-4xl md:text-5xl mb-4 font-bold'   >WHY WAIT?</h1>
                    <p   data-aos="fade-up" className='text-grey text-2xl mb-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>      
                </div>
                <div className='flex items-center justify-center flex-wrap'>
                 
                        <div   data-aos="fade-up"   data-aos-delay="200" className='flex flex-col md:basis-[30%] basis-[100%] min-w-[300px] px-6 py-7 m-4 rounded-2xl border border-transparent bg-white shadow-custom'>
                            <h2 className='text-black2 font-bold text-[20px] m-2'>Chèvre Farm Market</h2>
                            <div className='mb-4'>
                            <p className='flex gap-2 text-gey'>
                                <Clock className="text-green" size={20}/>
                                9:00 am - 4:00 pm
                            </p>
                            <p className='flex gap-2'>
                                <CalendarDays className="text-green" size={20}/>
                                Monday - Wednesday
                            </p>
                            </div>

                            <p className='m-2 text-grey'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                            </p>

                            <p className='text-green hover:text-[#bdc886]'><a href="/">Learn More →</a></p>
                        </div>

                        <div   data-aos="fade-up"  data-aos-delay="500" className=' flex flex-col md:basis-[30%] basis-[100%] min-w-[300px]  px-6 py-7 m-4 rounded-2xl border border-transparent bg-white shadow-custom'>
                            <h2 className='text-black2 font-bold text-[20px] m-2'>Chèvre Opt Dinner</h2>
                            <div className='mb-4'>
                            <p className='flex gap-2 text-gey'>
                                <Clock className="text-green" size={20}/>
                                6:00 pm - 8:00 pm
                            </p>
                            <p className='flex gap-2'>
                                <CalendarDays className="text-green" size={20}/>
                                Thursday - Friday
                            </p>
                            </div>

                            <p className='m-2 text-grey'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                            </p>

                            <p className='text-green hover:text-[#bdc886]'><a href="/">Learn More →</a></p>
                        </div>

                        <div  data-aos="fade-up"   data-aos-delay="800"className='flex flex-col md:basis-[30%] basis-[100%] min-w-[300px]  px-6 py-7 m-4 rounded-2xl border border-transparent bg-white shadow-custom'>
                            <h2 className='text-black2 font-bold text-[20px] m-2'>Weekend Farm Tour</h2>
                            <div className='mb-4'>
                            <p className='flex gap-2 text-gey'>
                                <Clock className="text-green" size={20}/>
                                8:00 am - 3:00 pm
                            </p>
                            <p className='flex gap-2'>
                                <CalendarDays className="text-green" size={20}/>
                                Saturday - Sunday
                            </p>
                            </div>

                            <p className='m-2 text-grey'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                            </p>

                            <p className='text-green hover:text-[#bdc886]'><a href="/">Learn More →</a></p>
                        </div>


                    </div>


         </div>
        </section>
  )
}

export default VisitUs;