import React from 'react'; 

import './home.css'; 
import Img from './home.png';
import { Link } from 'react-router-dom';


const Home = () => {
    return (
     
          
     <div className='home'>
     <div className='row_home'
     style={{
       display:'flex',
       flexDirection: 'row'
     }}
     >
       <div className='col'>
          <div className='text-wrapper'>
            <div className='top-line'>UNIVERSITY+</div>
            <h1 className='heading'> From youth to youth</h1>
            <p className='home-hero-subtitle'> Join University+ a community of Tunisian students ready to 
                    share, learn, and excel!
</p>
            <Link to='/signup'>
             <button> sign up</button> 
             
            </Link>
          </div>
         </div>
         <div className='col'>
         <div className='img-wrapper'>
         <img src={Img} className='home_hero-img'/>

         </div>
       </div>
     </div>
     
    

    </div>
     
        
        
    )
}

export default Home
