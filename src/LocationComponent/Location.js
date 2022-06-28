import React,{useState} from 'react'
import './Location.css'
import CityAccordination from '../CityAccordination'
import City from './City'
function Location() {
    const [data,setData]=useState(CityAccordination)
    const [show,setShow] = useState(false)
  return (
   <>
       <div className='location-section'>

           <div className='location-heading'>
               <h1>Popular localities in and around <strong>Delhi NCR</strong></h1>
           </div>


    <div className='location'>
<div className='place'> 
<div className='head'>
<h3>Sakett</h3>
<h4>660 Places</h4>
    </div>

</div>





{/* single div */}
<div className='place'> 
<div className='head'>
<h3>Sector 29</h3>
<h4>285 Places</h4>
    </div>

</div>
{/*  */}















<div className='place'> 
<div className='head'>
{/* <h6>see More</h6> */}
<p onClick={()=>setShow(!show)}> {show ? "See Less" : "See More"} </p>
    </div>

</div>



{
    data.map((curElm)=>{
        return(
            <>
           
            {

                    
show && <City data={curElm} key={curElm.id}/>
}
            
              
            </>
        )
    })
}


</div>


    </div>

   
      
   </>
  )
}

export default Location