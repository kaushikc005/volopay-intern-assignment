import React from 'react'
import Cards from './Cards'

const CardsSection = ({data,search,searchText,filter,type,cardHolder}) => {
    let filteredData=[]
    let searchedData=[]
    if(filter){
        filteredData=data?.filter((item) => item.card_type===type || item.owner_id===cardHolder)
    }

    if(search)
    searchedData=data?.filter((item) => item.name===searchText)
  return (
    <section className='grid grid-cols-3 mx-10  z-0 absolute top-52'>
        {!filter ?
        search?
        searchedData?.map((item,index)=> (
            <Cards item={item} key={index} />
        ))
        :
        data?.map((item,index)=> (
            <Cards item={item} key={index} />
        ))
       :
       filteredData?.map((item,index)=> (
        <Cards item={item} key={index} />
    ))
    }

        
        
    </section>
  )
}

export default CardsSection