import React, { useState } from 'react'
import Slide from 'react-reveal/Slide';
function MyAccordinantion({dataHead}) {
   const [show,setShow]= useState(false)
  return (
    <>
<div className='que-div'>

<div className='main-faq'>
    <h2>{dataHead.question}</h2>
    <div className='answer'>
    
<Slide left> 
    {
    show && <p>{dataHead.answers}</p>
}
</Slide>

</div>
</div>

<div className='toggle-btn'>
    <button onClick={()=>setShow(!show)}>{ show ? "-" : "+" }</button>
</div>


</div>

    </>
  )
}

export default MyAccordinantion