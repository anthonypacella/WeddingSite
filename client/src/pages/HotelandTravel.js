import React from 'react';
import { Link } from 'react-router-dom';

export default function HotelandTravel() {
    return (
        <div>
            <div className = 'transparent has-text-centered headerContainer'>
                <div className= 'mainHeader'>
                    <h1 className = 'has-text-weight-semibold'>ACCOMODATIONS</h1>
                </div>
                <div className = 'backHeaders'>
                    <h1 className='cursive'>accomodations</h1>
                </div>
            </div>
            
            <div className="container is-fluid is-widescreen">
                <p className='hotelParagraph'>We have reserved a block of rooms at which is connected to our venue! Our special rate is only available through our booking link below. We ask that you please reserve at your earliest convenience.</p>
            </div>

            <div className='buttons container is-centered mt-6'>
                <a target="_blank" href="https://www.marriott.com/event-reservations/reservation-link.mi?id=1661360110397&key=GRP&app=resvlink">
                    <button className='button is-focused has-text-white hotelButton'>BOOK NOW</button>
                </a>
            </div>
        </div>

        )
  }
