import logo from  "./images/goat-logo.png";

function Logo() {
  return (
    <span className='flex gap-1'>
    <img src={logo} width={70}  height={70} alt="logo" className='p-0 relative md:bottom-2 '/>
       <h1 className=' font-bold md:text-4xl  text-2xl text-white pt-5 md:pt-0'>chèvre</h1>
       </span>
  )
}

export default Logo