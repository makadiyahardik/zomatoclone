import React from 'react'
import './Appstore.css'
function Appstore() {
   
  return (
  <>


      <div className='app-section'>
          

<div className='main-app'>
    <div className='image-section'>
<img src='./images/app.avif' alt='please wait'/>
    </div>
    <div className='app-details'>
        <h1>
Get the Zomato App</h1>
<p>We will send you a link, open it on your phone to download <br/>the app</p>
<input type="radio" name='options' className='inputF'/>phone
<input type="radio" name='options' /> Email <br/>
<input type="text" id='search' placeholder='search here'/>
<button>Share App Link</button> <br/>
<p>Download app from</p>
<div className='store'>

<div className='gplay'>
<img src='./images/gplay.webp' alt='gplay'/> 
</div>
<div className='app-store'>
<img src='./images/ios.webp' alt='appstore'/>
</div>

</div>
</div>


    </div>
      </div>
  </>
  )
}

export default Appstore