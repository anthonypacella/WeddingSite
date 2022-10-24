import { useQuery, useMutation } from '@apollo/client';
import React from 'react';
import { Link } from 'react-router-dom';
import photo1 from '../images/image1.jpg';
import photo2 from '../images/image2.jpg';
import photo3 from '../images/image3.jpg';
import photo4 from '../images/image4.jpg';
import photo5 from '../images/image5.jpg';
import photo6 from '../images/image6.jpg';



export default function Home() {
    return (
      <div className =  'fullContainer '>
        <div className = 'transparent has-text-centered headerContainer'>
          <div className= 'mainHeader'>
            <h1 className = 'has-text-weight-semibold'>JACLYN & ANTHONY</h1>
          </div>
          <div className = 'backHeaders'>
            <h1 className='cursive'>jaclyn&nbsp; anthony</h1>
          </div>
        </div>

        <div className='container photoContainer'>
          <div className = 'photo1Container'>
            <img className = 'collagePhoto photo1' src={photo1}></img>
          </div>
          <div className = 'photo2Container'>
            <img className = 'collagePhoto photo2' src={photo2}></img>
          </div>
          <div className = 'photo3Container'>
            <img className = 'collagePhoto photo3' src={photo3}></img>
          </div>
          <div className = 'photo4Container'>
            <img className = 'collagePhoto photo4' src={photo4}></img>
          </div>
          <div className = 'photo5Container'>
            <img className = 'collagePhoto photo5' src={photo5}></img>
          </div>
          <div className = 'photo6Container'>
            <img className = 'collagePhoto photo6' src={photo6}></img>
          </div>
        </div>

        <div>
          <div className='container is-fullhd storyTitleBlock'>
            A STORY TEN YEARS IN THE MAKING
          </div>

          <div>

          </div>
        </div>
      </div>

      );
  }
