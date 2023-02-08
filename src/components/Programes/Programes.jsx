import React from 'react';
import './Programes.css';
import { programsData } from '../../data/programsData';
import RightArrow from '../../assets/rightArrow.png';

const Programes = () => {
  return (
    <div className='programes' id='programes'>
        <div className="programes-header">
            <span className='stroke-text'>Explore our</span>
            <span>programes</span>
            <span className='stroke-text'>To Shape you</span>
        </div>
        <div className="programes-categories">
            {programsData.map((program, i) => (
                <div className="catgory" key={i}>
                    {program.image}
                    <span>{program.heading}</span>
                    <span>{program.details}</span>
                    <div className="join-now">
                        <span>Join Now</span>
                        <img src={RightArrow} alt="" />
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Programes