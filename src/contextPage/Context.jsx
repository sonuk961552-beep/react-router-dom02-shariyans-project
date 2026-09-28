import React, { createContext, useState } from 'react'


export const ContextApi = createContext() 

        

const Context = (props) => {
    const [theme, setTheme] = useState('light')
    

  return (
    <div>
        <ContextApi.Provider value={{theme, setTheme}}>
             {props.children}
        </ContextApi.Provider>
     
    </div>
  )
}

export default Context
