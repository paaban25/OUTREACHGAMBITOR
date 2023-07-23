import React from 'react';
import img1 from './images/about_us.png';

import img3 from './images/rounds.png';
import img4 from './images/categories.png';
import img5 from './images/date_and_venue.png';
import img6 from './images/syllabus.png';
import img7 from './images/prizes.png';
import img8 from './images/position_awards.png';
import './AboutUs.css';

const AboutUs = () => {
  return (
    
     <div className='main'>
      <img src={img1} alt="" className="aboutus" />
      <div className="container0">GambitoR is a national-level exam designed specially for the students from classes 9th to 12th out there who seek extraordinarism and have the passion to take on and conquer every challenge that awaits them. By testing the logical and analytical skills of the students by putting them against the questions designed by our student community, we seek to bring out the best in every individual. Organised by the Outreach Cell of IIT Roorkee, this year we bring to you our second and upgraded version, GambitoR 2.0!
</div>
      <img src={img3} alt="" className="rounds" />
      <img src={img4} alt="" className="categories" />
      <img src={img5} alt="" className="datevenue" />
      <img src={img6} alt="" className="syllabus" />
      <img src={img7} alt="" className="prizes" />
      <img src={img8} alt="" className="awards" />
     </div>
  )
}

export default AboutUs
