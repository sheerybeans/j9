import React from 'react';
import bgImage from '../images/bg-image.jpeg';
import janineImg from '../images/IMG_5563.JPG';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleRight } from '@fortawesome/free-solid-svg-icons';
function End() {
    return (
        <div className='container'>
            <div className='bg-image-container'>
                <img src={bgImage}></img>
            </div>
            <div className='image-center-container'>
                <img src={janineImg} />
                <p className='intro-text'>I hope I made you smile ^__^</p>

            </div>
            <div className='next-btn-container'>
                <p className='end-kirck'>-Kirck</p>
            </div>
        </div>
    )
}
export default End;