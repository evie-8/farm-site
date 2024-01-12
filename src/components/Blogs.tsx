import goatGrass from '../pages/assets/goat-grass.jpg';
import babyGoat from '../pages/assets/baby-goat.jpeg';
import brownGrass from '../pages/assets/borwn-grass.jpg';

import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useEffect } from 'react';

function Blogs() {

  useEffect(() =>{
    AOS.init({duration: 800, 
    easing: 'ease-in-out', 
 },
);
},[])
    
  return (
   <div className="bg-white2">
     <section className='p-8 md:p-16'>
          
          <div data-aos="fade-up"  className='flex md:flex-row flex-col md:text-left text-center items-center flex-wrap justify-between p-2 mb-3'>
              <div className='md:w-[500px]'>
                  <h2 className='font-custom-1 text-3xl text-green3 font-bold'>NEWS & BLOG</h2>
                  <h1 className='md:text-5xl text-4xl font-bold text-black2'>STORIES AROUND THE FARM</h1>
              </div>
             <div className='m-4'>
               <a href="/" className='border border-transparent bg-green hover:bg-green2 px-5 py-3 m-2 rounded-full text-white'>
                  More Posts
              </a>
             </div>
          </div>
      
         {/* <div className='flex md:flex-row flex-col flex-wrap items-center justify-center p-4 mx-2'>*/}

       
          <div className='flex md:flex-row flex-col flex-wrap items-center justify-center -mx-2'>
          <div className="grid grid-cols-1 md:grid-cols-3 items-center justify-center gap-5">
          <div data-aos="fade-up"   data-aos-delay="200" className='flex flex-col basis-[30%] min-w-[300px]  border border-transparent rounded-[25px] mx-2 mb-3 shadow-custom bg-white relative'>
                          <div className='relative'>
                          
                                  <img src={goatGrass} alt="goat eating grass"  className="w-[100%]  p-0 object-cover border border-transparent rounded-b-none rounded-[25px] h-[200px]"/>
                              <div className='absolute bottom-0  -left-3'>
                                  <div className=' h-[20%] w-[20%]  p-2  pr-[5px] triangle'></div>
                                  <div className='pl-5 pr-2 py-2 bg-green2 border border-transparent font-bold text-white text-right max-w-max text-base'>
                                          
                                      <p>06</p>
                                      <p>JAN</p>
                                  </div>
      
                          </div>
                          </div>
                          <div className='py-4 mx-2 mb-3 text-left'>
                              <h2 className='font-bold text-2xl text-black2 mt-1 p-1'>Goats are Simply Lovely</h2>
                               <p className='text-base text-grey m-2 p-1'>Phasellus id consequat purus, ac dignissim purus. Integer maximus ex leo, vitae lacinia lorem ultricies nec. Quisque molestie venenatis ante ut euismod.</p>
                               <a href="/" className='text-green3 text-base hover:text-green m-2 p-1'> read more</a>
         
                          </div>
      
              </div>
      
              <div data-aos="fade-up" data-aos-delay="500" className='flex flex-col  basis-[30%]  min-w-[300px] border border-transparent rounded-[25px] mx-2 mb-3 shadow-custom bg-white relative'>
                          <div className='relative'>
                          
                                  <img src={babyGoat} alt="goat eating grass"  className="w-[100%] p-0 object-cover border border-transparent rounded-b-none rounded-[25px] h-[200px]"/>
                              <div className='absolute bottom-0  -left-3'>
                                  <div className=' h-[20%] w-[20%]  p-2  pr-[5px] triangle'></div>
                                  <div className='pl-5 pr-2 py-2 bg-green2 border border-transparent font-bold text-white text-right max-w-max text-base'>
                                          
                                      <p>06</p>
                                      <p>JAN</p>
                                  </div>
      
                          </div>
                          </div>
                          <div className='py-4 mx-2 mb-3 text-left'>
                              <h2 className='font-bold text-2xl text-black2 mt-1 p-1'>Taking Care of Young Goats</h2>
                               <p className='text-base text-grey m-2 p-1'>Phasellus id consequat purus, ac dignissim purus. Integer maximus ex leo, vitae lacinia lorem ultricies nec. Quisque molestie venenatis ante ut euismod.</p>
                               <a href="/" className='text-green3 text-base hover:text-green m-2 p-1'> read more</a>
         
                          </div>
      
              </div>
            
              <div  data-aos="fade-up" data-aos-delay="800" className='flex flex-col basis-[30%] min-w-[300px] border border-transparent rounded-[25px] mx-2 mb-3 shadow-custom bg-white relative'>
                          <div className='relative'>
                          
                                  <img src={brownGrass} alt="goat eating grass"  className="w-[100%] p-0 object-cover border border-transparent rounded-b-none rounded-[25px] h-[200px]"/>
                              <div className='absolute bottom-0  -left-3'>
                                  <div className=' h-[20%] w-[20%]  p-2  pr-[5px] triangle'></div>
                                  <div className='pl-5 pr-2 py-2 bg-green2 border border-transparent font-bold text-white text-right max-w-max text-base'>
                                          
                                      <p>06</p>
                                      <p>JAN</p>
                                  </div>
      
                          </div>
                          </div>
                          <div className='py-4 mx-2 mb-3 text-left'>
                              <h2 className='font-bold text-2xl text-black2 mt-1 p-1'>Best Feeding Practices</h2>
                               <p className='text-base text-grey m-2 p-1'>Phasellus id consequat purus, ac dignissim purus. Integer maximus ex leo, vitae lacinia lorem ultricies nec. Quisque molestie venenatis ante ut euismod.</p>
                               <a href="/" className='text-green3 text-base hover:text-green m-2 p-1'> read more</a>
         
                          </div>
      
              </div>   
          </div>
              </div>
  
           {/*</div>*/}
          
         

      
      </section>
   </div>

  )
}

export default Blogs