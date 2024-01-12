import React, { useState } from 'react'
import Logo from './logo'
import { Menu, XCircle } from 'lucide-react'

import { useLocation } from 'react-router-dom';

const links = [
  {
    link: '/',
    name: 'Home'
  },
  {
    link: '/about-us',
    name: 'About Us'
  },
  {
    link: '/services',
    name: 'Services'
  },
  {
    link: '/contact',
    name: 'Contact Us'
  }
]

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const {pathname} = useLocation();

  const [colorChange, setColorchange] = useState(false);
    const changeNavbarColor = () => {
        if (window.scrollY >= 90) {
            setColorchange(true);
        } else {
            setColorchange(false);
        }
    };
    window.addEventListener("scroll", changeNavbarColor);

  const onclick = () => {
    setShowMenu(!showMenu);
  }

  return (
            
            <header className={`${colorChange && !showMenu ? 'backdrop-filter backdrop-blur-lg bg-black2/50' : ''} ${showMenu ? 'bg-black2' : ''}  fixed top-0 left-0 shadow-custom md:px-16 py-2 pt-5 w-full  z-50 px-2`}>
              <nav  className='px-4 py-2 flex items-center justify-between gap-4 h-[70px] z-50 '>
              <div className={`pt-3 md:px-3`}>
              <Logo/>
              </div>
              <ul className={`md:flex items-center justify-center gap-2 md:bg-transparent bg-black2 ${showMenu ? 'block md:border-transparent border-t border-green2': 'hidden'} md:static absolute top-20 right-0 md:pt-0 pt-2 left-0 mt-4  md:mt-0 text-center  md:text-white text-grey`}>
                
                {links.map((link) => (
                   <li key= {link.link} className={`${pathname === link.link ? 'active' : ''}`}><a href={link.link}>{link.name}</a></li>
             
                ))}
                  </ul>
            {showMenu ? (<XCircle size={30} onClick={onclick}  className='text-white md:hidden'/>) :
            (<Menu size={30} onClick={onclick} className='text-white md:hidden'/>)
            }
              </nav>
            
            </header>
  )
} 

export default Navbar