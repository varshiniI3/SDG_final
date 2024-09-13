import React from 'react';
import image1985 from '../../images/1985.jpg';
import image1990 from '../../images/1990.jpg';
import image2001 from '../../images/2001.jpg';
import './TimeLine.css';
const TimeLine=()=>{ 
    return ( 
      
<div> 
  



<div className="line-container">
      <div className="circle"></div>
      <div className="line"></div>
      <div className="circle"></div>
      <div className="line"></div>
      <div className="circle"></div>
      <div className="line"></div>
    </div>
<div className="timeline" >
<div className="timeline-item" >
<h2 className='h3' style={{ color: 'black'  }}>1985</h2>
  <img src={image1985} alt="1985" />
  
  <p style={{ color: 'black', fontWeight: 'bold' }}>Start with a small service</p>
</div>
<div className="timeline-item">

<h2 className='h3' style={{ color: 'black' }}>1990</h2>
  <img src={image1990} alt="1990" />
  
  <p style={{ color: 'black' , fontWeight: 'bold'}}>First employees</p>
</div>
<div className="timeline-item">
<h2 className='h3'style={{ color: 'black' }}>2001</h2>
  <img src={image2001} alt="2001" />
  
  <p style={{ color: 'black' , fontWeight: 'bold' }}>First recognition</p>
</div>
</div>
</div>

)
}

export default TimeLine;