import React from 'react'
import { Link }  from 'react-router-dom'
import Image from './Image'


const Navbar = () => {
  return (
    <div className='navbar'>
    <div style={{display:'flex',alignItems:'center',justifyContent:'center',gap:'3px'}}>
     <Image/>
     <Link style={{textDecoration:'none',color:'black',fontWeight:'600'}} to='/'>shariyans</Link>
    
    </div>
   
   
    
        
      <div className='profile'>
         <Link style={{textDecoration:'none'}} to="/">Home</Link>
         <Link style={{textDecoration:'none'}} to="/about">About</Link>
         <Link style={{textDecoration:'none'}} to="/contact">Contact</Link>
         <Link style={{textDecoration:'none'}} to="/product">Product</Link>
      
    </div>
     </div>
  )
}

export default Navbar
