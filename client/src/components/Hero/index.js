import React from 'react';
import '../Nav/style.css'

const Hero = ({photo}) => {  
  return (
      <section className='hero is-success is-halfheight'>
        <div className="hero-body">
            <div class="">
            <p className="title">
                Half height hero
            </p>
            <p className="subtitle">
                Half height subtitle
            </p>
            </div>
        </div>
      </section>

  )
};

export default Hero;
