import Navbar from '../components/navbar'
import AboutUs from '../components/AboutUs'
import VisitUs from '../components/VIsitUs'

function AboutUsPage() {
  return (
   <section>
     <div className='header-3'>
            <Navbar />
        <div className='grid justify-center pt-20 text-left text-white m-[100px]  mt-0'>
                <h1 className='fadeInUp-animation font-bold md:text-5xl text-4xl text-center px-6 md:mt-[150px] mt-[100px]' >ABOUT US </h1>
                <h3 className='fadeInUp-animation  font-custom md:text-3xl text-2xl text-center ' >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
                </h3>
            </div>

         
    </div>

    <AboutUs/>
    <VisitUs/>
   </section>
  )
}

export default AboutUsPage