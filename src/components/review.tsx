import { Quote, Star } from 'lucide-react'
import profile from '../pages/assets/profile-2.jpg';

import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useEffect } from 'react';


const  Reviews = () => {
    useEffect(() =>{
        AOS.init({duration: 800, 
        easing: 'ease-in-out', 
     },
);
    },[])
   
    
  return (
    <section className="bg-white2">
<div className="p-8 md:p-16">
<div className='flex md:flex-row flex-col flex-wrap items-center justify-center text-center mx-auto'>
   <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
   <div  data-aos="fade-up"  data-aos-delay="200" className='flex flex-col items-center justify-center md:basis-[30%] basis-full min-w-[300px] relative mb-14 '>
         <div className='flex flex-col items-center justify-center bg-white border border-transparent pt-2 pb-16 shadow-custom rounded-[20px]'>
                 <Quote size={50} className='rotate-180 text-3xl text-green mx-auto p-2 m-3'/>
             
             <p className='text-grey p-2 m-3'>Etiam mi massa, varius a dui cursus, ornare posuere magna. Duis nec elit sem. Nam sodales lectus ut odio molestie ultrices.</p>
                 <div className='flex gap-2 m-1'>
                     <Star size={20} className='text-[#FEC42D]'/>
                     <Star size={20} className='text-[#FEC42D]'/>
                     <Star size={20} className='text-[#FEC42D]'/>
                     <Star size={20} className='text-[#FEC42D]'/>
                     <Star size={20} className='text-[#FEC42D]'/>
                 </div>
         </div>
         <div className='flex flex-col items-center justify-center absolute bottom-[-70px]'>
                     <img src={profile} alt="profile" width={70} height={70} className='border border-transparent rounded-full' />
                     <p className='font-bold text-black2 text-xl m-2'>Odong Williams</p>
                 </div>
         
     </div>

     <div data-aos="fade-up"  data-aos-delay="500" className='flex flex-col items-center justify-center md:basis-[30%] basis-full min-w-[300px] relative mb-14 '>
         <div className='flex flex-col items-center justify-center bg-white border border-transparent pt-2 pb-16 shadow-custom rounded-[20px]'>
                 <Quote size={50} className='rotate-180 text-3xl text-green mx-auto p-2 m-3'/>
             
             <p className='text-grey p-2 m-3'>Etiam mi massa, varius a dui cursus, ornare posuere magna. Duis nec elit sem. Nam sodales lectus ut odio molestie ultrices.</p>
                 <div className='flex gap-2 m-1'>
                     <Star size={20} className='text-[#FEC42D]'/>
                     <Star size={20} className='text-[#FEC42D]'/>
                     <Star size={20} className='text-[#FEC42D]'/>
                     <Star size={20} className='text-[#FEC42D]'/>
                     <Star size={20} className='text-[#FEC42D]'/>
                 </div>
         </div>
         <div className='flex flex-col items-center justify-center absolute bottom-[-70px]'>
                     <img src={profile} alt="profile" width={70} height={70} className='border border-transparent rounded-full' />
                     <p className='font-bold text-black2 text-xl m-2'>Odong Williams</p>
                 </div>
         
     </div>
    
     <div data-aos="fade-up"  data-aos-delay="800" className='flex flex-col items-center justify-center md:basis-[30%] basis-full min-w-[300px] relative mb-14 '>
         <div className='flex flex-col items-center justify-center bg-white border border-transparent pt-2 pb-16 shadow-custom rounded-[20px]'>
                 <Quote size={50} className='rotate-180 text-3xl text-green mx-auto p-2 m-3'/>
             
             <p className='text-grey p-2 m-3'>Etiam mi massa, varius a dui cursus, ornare posuere magna. Duis nec elit sem. Nam sodales lectus ut odio molestie ultrices.</p>
                 <div className='flex gap-2 m-1'>
                     <Star size={20} className='text-[#FEC42D]'/>
                     <Star size={20} className='text-[#FEC42D]'/>
                     <Star size={20} className='text-[#FEC42D]'/>
                     <Star size={20} className='text-[#FEC42D]'/>
                     <Star size={20} className='text-[#FEC42D]'/>
                 </div>
         </div>
         <div className='flex flex-col items-center justify-center absolute bottom-[-70px]'>
                     <img src={profile} alt="profile" width={70} height={70} className='border border-transparent rounded-full' />
                     <p className='font-bold text-black2 text-xl m-2'>Odong Williams</p>
                 </div>
         
     </div>
   </div>
 
 </div>
</div>
</section>
    
  )
}

export default Reviews

