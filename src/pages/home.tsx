import Navbar from '../components/navbar'
import young_goat from './assets/young-goat.png'
import goat from './assets/young-goat-2.png'

import Reviews from '../components/review';
import ChooseUs from '../components/choose-us';
import AboutUs from '../components/AboutUs';
import VisitUs from '../components/VIsitUs';
import Products from '../components/Products';
import Blogs from '../components/Blogs';

import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useEffect } from 'react';
import Gallery from '../components/gallery';


function Home() {
    useEffect(() =>{
        AOS.init({duration: 800, 
        easing: 'ease-in-out', 
     },
);
    },[]);
  return (
    <section>
        {/*Header section */}
        <div className='header'>
           <Navbar/>

            <div className='flex flex-col items-center justify-center pt-20 text-white mb-[150px]'>
                <h2  className='fadeInUp-animation font-bold text-white p-4 md:text-[32px] text-[20px] mt-24 font-custom-1 ' >CHÈVRE PRESENTS</h2>
                <h1 className='fadeInUp-animation  font-bold md:text-[60px] text-[50px] text-center px-6' >WELCOME TO FARM</h1>
                <h3 className='fadeInUp-animation capitalize font-bold md:text-[50px]  md:text-[40px] text-[40px] text-center font-custom'>Always Loyal And Honest</h3>

                <button className='fadeInUp-animation px-5 py-3 m-auto rounded-full bg-green block hover:bg-green2'>Get Started</button>
            </div>

            <div  className='flex md:flex-row flex-col text-white bg-black2 w-full px-12 py-5 md:py-12  relative h-[250px] opacity-60 mt-[70px] md:mt-[20px]'>
            <div data-aos="fade-up" id="wait-for-goat" data-aos-anchor="#wait-for-goat" className='absolute bottom-0 left-[50px] md:block hidden' >
                        <img src={goat} 
                        className='rounded-full'
                        alt='young-goat' width={180}  />
                    </div>
                    <div data-aos="fade-up"  id="wait-for-goat" className='absolute top-0 left-[250px] md:block hidden' >
                        <img src={young_goat} 
                        className='rounded-full'
                        alt='young-goat' width={250} />
                    </div>

             
                   
                   
                    <div data-aos='fade-up' className='flex flex-col basis-2/5 ml-auto' >
                    <p className='text-2xl mb-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus.</p>
                    <p>
                    <a href='/' className='text-green hover:text-white'>Learn More →</a>
                    </p>
                    </div>     
                 
            </div>
        </div>
   
        <VisitUs/>
     
       
       <AboutUs/>

     
        <ChooseUs/>

        <Reviews/>

        <Products/>

        <Blogs/>

       <Gallery/>
       
        </section>
  )
}

export default Home