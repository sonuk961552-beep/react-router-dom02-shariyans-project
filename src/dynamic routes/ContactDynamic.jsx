import React from 'react'
import { useParams } from 'react-router-dom'

const ContactDynamic = () => {
     const params = useParams()
     console.log(params)
  return (
    <div>
      <h1>{params.id} Contact detailed </h1>
    </div>
  )
}

export default ContactDynamic
