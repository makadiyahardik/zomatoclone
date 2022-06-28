import React from 'react'
import "./Home.css"
function Home() {
  return (
    <>
        {/* <div className='overlay'>
            <img src='./images/zhome.avif'/>
        </div> */}
      <div className='header'>

          <div className='nav'>
              <h3>Get in App</h3>
          
          </div>
          <div className='navlink'>
              <a href=''>Investor relations</a>
              <a href=''>Add restrorunt</a>
              <a href=''>Add restrorunt</a>
              <a href=''>Login</a>
              <a href=''>Signin</a>
          </div>
      </div>

      <div className='container'>
<div className='text-area'>
    <h1>Zomato</h1>
    <p>Discover the best food & drinks in Delhi NCR</p>
    <input type="text" placeholder='search for restrorund , cuisine or a dish' />
</div>
          
      </div>

    </>
  )
}

export default Home