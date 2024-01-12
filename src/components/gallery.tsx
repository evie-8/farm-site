
import gallery1 from '../pages/assets/borwn-grass.jpg';
import gallery2 from '../pages/assets/goats-graze.jpg';
import gallery3 from '../pages/assets/products-1.jpg';
import gallery4 from '../pages/assets/products-2.jpg';
import  gallery5 from './images/header.png';
import gallery6 from './images/header-2.jpg';
import gallery7 from '../pages/assets/baby-goat.jpeg';
import gallery8 from '../pages/assets/little-goat.jpg';

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';


import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useEffect } from 'react';


function Gallery() {
    useEffect(() =>{
        AOS.init({duration: 800, 
        easing: 'ease-in-out', 
     },
);
    },[])
  return (
    <section className="p-8 md:p-16 md:block hidden bg-white">
         <h2 data-aos='fade-up' className='font-bold text-4xl text-center text-green3 my-auto font-custom-1 relative top-12'>GALLERY</h2>
            <div className='grid md:grid-cols-2  grid-cols-1  items-center justify-center gap-5'>
                <div data-aos='fade-up' className='grid md:grid-cols-2  grid-cols-1 aspect-square items-center justify-center gap-5'>
                    <LazyLoadImage effect='blur' src={gallery1} alt="gallery1" className='border border-transparent rounded-[20px]  md:aspect-square ' />
                    <LazyLoadImage effect='blur' src={gallery7} alt="gallery1" className='border border-transparent rounded-[20px]  md:aspect-square ' />
                </div>

               <div className='grid grid-rows-2 items-center justify-center gap-5'>
               <div data-aos='fade-up' className='grid md:grid-cols-4  grid-cols-1 items-center justify-center gap-5'>
                    <LazyLoadImage effect='blur' src={gallery3} alt="gallery1" className='border border-transparent rounded-[20px] md:rounded-[10px]  md:aspect-square' />
                    <LazyLoadImage effect='blur' src={gallery4} alt="gallery1" className='border border-transparent rounded-[20px] md:rounded-[10px]  md:aspect-square' />
                    <LazyLoadImage effect='blur' src={gallery5} alt="gallery1" className='border border-transparent rounded-[20px] md:rounded-[10px]  md:aspect-square' />
                    <LazyLoadImage effect='blur' src={gallery6} alt="gallery1" className='border border-transparent rounded-[20px] md:rounded-[10px]  md:aspect-square' />
                
                </div>

                <div data-aos='fade-up' className='grid md:grid-cols-4  grid-cols-1 items-center justify-center gap-5'>
                    <LazyLoadImage effect='blur' src={gallery7} alt="gallery1" className='border border-transparent rounded-[20px] md:rounded-[10px]  md:aspect-square' />
                    <LazyLoadImage effect='blur' src={gallery8} alt="gallery1" className='border border-transparent rounded-[20px] md:rounded-[10px]  md:aspect-square' />
                    <LazyLoadImage effect='blur' src={gallery1} alt="gallery1" className='border border-transparent rounded-[20px] md:rounded-[10px]  md:aspect-square' />
                    <LazyLoadImage effect='blur' src={gallery2} alt="gallery1" className='border border-transparent rounded-[20px] md:rounded-[10px]  md:aspect-square' />

                </div>
               </div>
            </div>
        </section>
  )
}

export default Gallery