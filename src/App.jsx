
import {Routes,Route} from 'react-router-dom'
import Home from './component/Home'
import About from './component/About'
import Contact from './component/Contact'
import Product from './component/Product'
import Navbar from './component/Navbar'
import Footer from './Footer'
import NodataAvailable from './component/NodataAvailable'
import Men from './UnderData/Men'
import Women from './UnderData/Women'
import ContactDynamic from './dynamic routes/ContactDynamic'

import Navbar2 from './component/Navbar2'
import { useContext } from 'react'
import { ContextApi } from './contextPage/Context'


const App = () => {

const{theme, setTheme} = useContext(ContextApi)

function letsH(){
if(theme==='light'){
  setTheme('dark')
}else{
  setTheme('light')
}
}
  

  return (<>
    <div className={theme}>
     
      <Navbar/>
      <Navbar2 />
      
     <div className='name'>
      <Routes>
        <Route path='/' element={<Home/>}/>
         <Route path='/about' element={<About/>}/>

                 {/* this is a dynamic routes or esi ke aandar hai params  */}
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/contact/:id' element={<ContactDynamic/>} />


                {/* this is nested Routes */}
           <Route path='/product' element={<Product/>}>
            <Route path='men'  element={<Men/>}/>
          <Route path='women'  element={<Women/>}/>
           </Route>           
              
              {/* Agar wrong search karne pe yh aayaga */}
           <Route path='*' element={<NodataAvailable/>} />


          
          
      

      </Routes>
     </div>
     
     <div className='footer'>
      <button className='aaa' onClick={letsH}>☾</button>
      <Footer/>
     </div>
     
    </div>
    </>
  )
}

export default App
