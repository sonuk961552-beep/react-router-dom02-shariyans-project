import React from 'react'
import Navigate from '../dynamic routes/Navigate/Navigate'
import { Link, Outlet } from 'react-router-dom'





const Navbar2 = () => {
  return (
    <div className='navbar2'>
        <div>
         <Navigate/>
        </div>

        <div className='men'>
          
          <Link className='mmm' to='/product/men'>Men</Link>
                <Link className='mmm' to='/product/women'>Women</Link>
     
        </div>
      <Outlet/>
    </div>
  )
}

export default Navbar2
