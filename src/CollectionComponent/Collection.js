import React from 'react'
import './Collection.css'
function Collection() {
    return (
        <>
            <div className='main-coll'>
                <h3>Collections</h3>
                <div className='coll-tex'>

                    <div className='coll-flex'>
                        <p>Explore curated lists of top restaurants, cafes, pubs, and bars in Delhi NCR, based on trends</p>
                        <a href='' >All Collection
                            in Delhi NCR</a>
                    </div>
                </div>
                <div className='card-coll'>
                  
                    

<div className='main-div' >  
                    <div className='card-image'>
                        <img src='./images/cricket.jpg' alt='card' />
                        <div className='text'>  
                        <p>Live Cricket Screening</p>
                        <h4>58 Places</h4>
                        </div>
                    </div>
                    
                    <div className='card-image'>
                        <img src='./images/open.jpg' alt='card' />
                        <div className='text'>  
                        <p>Newly Opened</p>
                        <h4>26 Places</h4>
                        </div>
                    </div>
                    <div className='card-image'>
                        <img src='./images/food.jpg' alt='card' />
                        
                        <div className='text'>  
                        <p>Tranding this Week</p>
                        <h4>30 Places</h4>
                        </div>
                    </div>
                    <div className='card-image'>
                        <img src='./images/delhi.jpg' alt='card' />
                        
                        <div className='text'>  
                        <p>Best of Delhi NCE</p>
                        <h4>147 Places</h4>
                        </div>
                    </div>

                    </div>
                    



                    </div>
            
            
            </div>
        </>
    )
}

export default Collection