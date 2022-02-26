import React from 'react';
import bgImage from '../images/bg-image.jpeg';
import templeImage from '../images/IMG_7807.PNG';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleRight } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router';
function Message() {
    const history = useHistory();
    return (
        <div className='container'>
            <div className='bg-image-container'>
                <img src={bgImage}></img>
            </div>
            <div className='message-image-container'>
                <div className='message-temple-image'>
                    <img src={templeImage}/>
                </div>
                <div className='message-text-container'>
                    <div>
                    <p>Hi Janine!</p>
                    <br/>
                    <p>I am so proud of you. </p>
                    <br/>
                    <p>Please know that you are such an inspiration and a light to the world. Keep the faith & remember Him in all things. </p>
                    <br/>
                    <br/>
                    <p>Kirck </p>
                    </div>
                </div>
            </div>
            <div className='next-btn-container'>
                <FontAwesomeIcon onClick={()=>{history.push('/end')}} icon={faCircleRight} />
            </div>
        </div>
    )
}
export default Message;