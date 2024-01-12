import Navbar from '../components/navbar'

import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useEffect } from 'react';
import ChooseUs from '../components/choose-us';
import Gallery from '../components/gallery';
import { Facebook, Phone, Twitter } from 'lucide-react';


function Team() {
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
                    <h1 className='fadeInUp-animation font-bold md:text-5xl text-4xl text-center px-6   md:mt-[150px] mt-[100px]' >OUR TEAM</h1>
                    <h3 className='fadeInUp-animation  font-custom md:text-3xl text-2xl text-center ' >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
                    </h3>
                </div>
    
             
        </div>

       <div className='p-8 md:p-16'>
       <div className='flex flex-col items-center justify-center gap-4'>
              <div className='flex md:items-start md:justify-start items-center justify-center'>
              <div  className='flex flex-col mb-5  md:basis-7/12  basis-full md:items-start md:justify-start items-center justify-center md:text-left text-center '>
                    <h3  data-aos="fade-up" className='font-custom-1 mb-2 font-bold text-green3 text-3xl'>TEAM MEMBERS</h3>
                    <h1  data-aos="fade-up" className='text-black2 md:text-5xl text-3xl mb-1 font-bold'>Meet Our Farmers</h1>
                    <h2 data-aos="fade-up" className='text-grey mb-1 text-2xl'>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis dictum metus, 
                      efficitur ultrices diam. Interdum et malesuada fames ac ante ipsum primis in faucibus.
                    </h2>
                 </div>
              </div>
                      <div className='flex items-center justify-center -mx-8'>
                        
                       <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                        
                        <div data-aos='fade-up' data-aos-delay='200' className="farmer-card">
                          <div className='overlay'>
                            <h1 className='text-white text-2xl text-center font-bold mb-1'>Ochieng Williams</h1>
                            <h2 className='text-white text-xl mb-1 text-center font-semibold'>Team Manager</h2>
                            <div className='flex items-center justify-center gap-2 text-green font-bold mt-2'>
                              <Twitter size={20}/>
                              <Facebook size={20}/>
                              <Phone size={20}/>
                            </div>

                          </div>

                        </div>

                        <div   data-aos='fade-up' data-aos-delay='500' className="farmer-card">
                          <div className='overlay'>
                            <h1 className='text-white text-2xl text-center font-bold mb-1'>Ochieng Williams</h1>
                            <h2 className='text-white text-xl mb-1 text-center font-semibold'>Team Manager</h2>
                            <div className='flex items-center justify-center gap-2 text-green font-bold mt-2'>
                              <Twitter size={20}/>
                              <Facebook size={20}/>
                              <Phone size={20}/>
                            </div>

                          </div>
                        
                           </div>

                        <div  data-aos='fade-up' data-aos-delay='800' className="farmer-card">
                          <div className='overlay'>
                            <h1 className='text-white text-2xl text-center font-bold mb-1'>Ochieng Williams</h1>
                            <h2 className='text-white text-xl mb-1 text-center font-semibold'>Team Manager</h2>
                            <div className='flex items-center justify-center gap-2 text-green font-bold mt-2'>
                              <Twitter size={20}/>
                              <Facebook size={20}/>
                              <Phone size={20}/>
                            </div>

                          </div>
                          </div>

                        </div> 
                      </div>
       </div>
       </div>

        <ChooseUs/>
    <Gallery/>
    </section>
  )
}

export default Team