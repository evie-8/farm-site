import { Mail, MapPin, Phone } from 'lucide-react'
import Logo from './logo'


function Footer() {
  return (
    <footer className='bg-black2 px-7 py-8 relative ' >

       <div className="flex items-center">
       <div className='footer-row'>
        <div className='footer-col lg:mr-10'>
           
              <div className='footer-content'>
               
                <Logo/>
               
              <p>Graceful Goats, Nature's Notes.
            </p>
              </div>
            </div>

            <div className='footer-col'>
                <h2 className='footer-title'>Services</h2>
                <div className='footer-content'>
                    
                <p>Farm Supply</p>
                    <p>Goats Distributor</p>
                    <p>Equipment</p>
                </div>  
            </div>

            <div className='footer-col'>
                <h2 className='footer-title'>Further Links</h2>
                
                   <div className='footer-content'>
                   <p className='hover:text-green'><a href="/team">Our team</a></p>
                  
                  <p className='hover:text-green'><a href="/blog">News & Blog</a></p>
                  <p className='hover:text-green'><a href="/pricing">Pricing</a></p>
                  <p className='hover:text-green'><a href="/products">Products</a></p>
                   </div>
                </div>

                    
                <div className='footer-col'>
                    <h2 className='footer-title'>Get In Touch</h2>
                 <div className='footer-content'>
                 <p className='flex gap-3'> <MapPin size={15} className='text-green'/>  Kampala, Uganda</p>
                    <p className='flex gap-3'> <Phone size={15} className='text-green'/>+256-779-738-096</p>
                    <p className=' flex gap-3'> <Mail size={15} className='text-green' /> support@site.com</p>
                 </div>
                </div>

        
                
        </div>
       </div>

        <small className='text-grey block m-auto text-sm text-center'>copyright © 2024 <span className='text-green italic font-bold'>chèvre</span> | Powered by <span className='text-green italic font-bold'>chèvre</span></small>

    </footer>
  )
}

export default Footer