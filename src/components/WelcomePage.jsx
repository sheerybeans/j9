import React from 'react';
import bgImage from '../images/bg-image.jpeg';
import bgCenterImage from '../images/IMG_1707.PNG';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleRight } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router';
function WelcomePage() {
    const history = useHistory()
    return (
        <div className='container'>
            <div className='bg-image-container'>
                <img src={bgImage}></img>
            </div>
            <div className='image-center-container'>
                <p className='intro-text'>Welcome back, Janine!</p>
                <img src={bgCenterImage} />
            </div>
            <div className='welcomeback-btn-container'>
                <FontAwesomeIcon onClick={()=>{history.push('/message')}} icon={faCircleRight} />
            </div>
        </div>
    )
}
export default WelcomePage;