import React from 'react';
import bgImage from '../images/bg-image.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleRight } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router';
function Intro() {
    const history = useHistory()
    return (
        <div className='container'>
            <div className='bg-image-container'>
                <img src={bgImage}></img>
            </div>
            <div className='header-text'>
                <p>Is this Janine Marie Sanglap?</p>
            </div>
            <div className='header-button-container'>
                <FontAwesomeIcon onClick={()=>{history.push('/welcomeback')}} icon={faCircleRight} />
            </div>
        </div>
    )
}
export default Intro;