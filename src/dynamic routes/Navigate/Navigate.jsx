import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navigate = () => {
  const previous = useNavigate()
  
  return (
    <div style={{display:'flex', justifyContent:'center',}}>
  
     
      <span onClick={()=>previous(-1)
       } className='arrow'>←</span>
       <span onClick={()=>previous(1)
       } className='arrow'>→</span>
  </div>
)
}

export default Navigate

  

