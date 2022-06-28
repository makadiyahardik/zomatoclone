import React from 'react'
import './City.css'
import Fade from 'react-reveal/Fade';
function City({data}) {
  
  
  return (
   <>
 <Fade bottom>
<div className='city-section ' key={data.id}>
  <div className='city-text'>
    <div className='city-head'>
    <div className='city-area'>  
      <h4>{data.name}</h4>
      <h3>{data.places}</h3>
      {console.log(data.id)}
      </div>
    </div>
  </div>
</div>
</Fade>
   </>
  )
}

export default City