import React from 'react'
import './Card.css'
function Cards() {
  return (
   <>
       <div className='card-section'>
           <div className='card-main'>
               <div className='common-card'>
                   <img src='./images/c1.jpg' alt='card'/>
                   <div className='text'>
                       <p>Order Online</p>
                   </div>
               </div>


               <div className='common-card'>
                   <img src='./images/c2.jpg' alt='card'/>
                   <div className='text'>
                       <p>Dinning Out</p>
                   </div>
               </div>


               <div className='common-card'>
                   <img src='./images/c3.jpg' alt='card'/>
                   <div className='text'>
                       <p>Pro and Pro Plus</p>
                   </div>
               </div>



               <div className='common-card'>
                   <img src='./images/c4.jpg' alt='card'/>
                   <div className='text'>
                       <p>Nighlife and Clubs</p>
                   </div>
               </div>


           </div>
       </div>
   </>
  )
}

export default Cards