import React, { useState } from 'react'
import './Faq.css'
import FaqData from './FaqData'
import MyAccordinantion from './MyAccordinantion'
function Faq() {
    const [data,setData]=useState(FaqData)
  return (
    <>
        <div className='faq-section'>
            <div className='heading'>
                <h1>Explore other options for you here</h1>
            </div>

{
    data.map((curElm)=>{
        return(
            <>

            <MyAccordinantion dataHead={curElm}/>
        
            </>
        )
    })
}





        </div>
    </>
  )
}

export default Faq