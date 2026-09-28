import React from 'react'
import { Link, Outlet } from 'react-router-dom'


const Product = () => {
  return (<>
    <div className='men'>
      {/* <Link className='mmm' to='/product/men'>Men</Link>
      <Link className='mmm' to='/product/women'>Women</Link> */}
     
   
     
    </div>
     <Outlet/>
     </>
  )
}

export default Product
