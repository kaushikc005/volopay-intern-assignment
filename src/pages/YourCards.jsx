import React from 'react'
import { useParams } from 'react-router-dom'
import Cards from '../components/Cards'

const YourCards = ({data}) => {
    const id=useParams().id
    console.log(data)
    const yourData=data?.filter((item) => parseInt(item.owner_id) === parseInt(id))
    console.log(yourData)
   
  return (
    <section className='grid grid-cols-3 mx-10  z-0 absolute top-52'>
        {yourData.map((item,index)=> (
              <Cards item={item} key={index} />
             
         ))
         }
        
    </section>
  )
}

export default YourCards