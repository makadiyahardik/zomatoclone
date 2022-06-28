import React from 'react'
import './Footer.css'
function Footer() {
  return (
<>


<div className='footer-section'>
<div className='footer'> 

    <div className='logo'>
<h1>Zomato</h1>
    </div>
    <div className='main-drop'> 
    <div className='dropdown-Country'>
        <select>
            <option>India</option>
            <option>Canada</option>
            <option>Shrilanka</option>
            <option>UAE</option>
        </select>
    </div>

    <div className='dropdown-Language'>
        <select>
            <option>Hindi</option>
            <option>English</option>
            <option>Francy</option>
            <option>Marathi</option>
        </select>
    </div>

</div>
    </div>






<div className='footer-area'>

<div className='main-ftr'>

<div className='single-footer'>
    <p>ABOUT ZOMATO</p>
    <li>Who We Are</li>
    <li>Blog</li>
    <li>Work With Us</li>
    <li>Investor Relations</li>
    <li>Report Fraud</li>

</div>

<div className='single-footer'>
    <p>ZOMAVERSE</p>
    <li> Feeding India</li>
    <li>Hyperpure</li>
    <li>Zomaland</li>
</div>


<div className='single-footer'>
    <p>FOR RESTRAURUNTS</p>
    <li>Partner With Us</li>
    <li>Apps For You</li>
  <br/>
    <p>FOR ENTERPRISES</p>
    <li>Zomato For Work</li>
</div>

<div className='single-footer'>
    <p>LEARN MORE</p>
    <li>Privacy</li>
    <li>Secuarity</li>
    <li>Terms</li>
    <li>Sitemap</li>
</div>

<div className='single-footer'>
    <p>SOCIAL LINKS</p>
    <li>Instagram</li>
    <li>Facebook</li>
    <li>Twitter</li>
    <li>LinkedIn</li>
</div>

</div>

<hr/>
<h6>By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners. 2008- <br/>2022 © Zomato™ Ltd. All rights reserved.</h6>
</div>



</div>

</>
  )
}

export default Footer