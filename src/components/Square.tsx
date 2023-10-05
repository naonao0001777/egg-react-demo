import React from 'react';
// square13~17
import image13 from '../images/square/13.jpg'
import image14 from '../images/square/14.jpg'
import image15 from '../images/square/15.jpg'
import image16 from '../images/square/16.jpg'
import image17 from '../images/square/17.jpg'

function Square() {
    return (
        <>
            <div className='is-flex-desktop is-hidden-touch is-flex-wrap-wrap is-justify-content-space-between'>
                <div className='m-3'>
                    <figure className="image is-200x200">
                        <img src={image13} className="" alt="logo" />
                    </figure>
                </div>
                <div className='m-3'>
                    <figure className="image is-200x200">
                        <img src={image14} className="" alt="logo" />
                    </figure>
                </div>
                <div className='m-3'>
                    <figure className="image is-200x200">
                        <img src={image15} className="" alt="logo" />
                    </figure>
                </div>
                <div className='m-3'>
                    <figure className="image is-200x200">
                        <img src={image16} className="" alt="logo" />
                    </figure>
                </div>
                <div className='m-3'>
                    <figure className="image is-200x200">
                        <img src={image17} className="" alt="logo" />
                    </figure>
                </div>
                <div className='m-3'>
                    <figure className="image is-200x200">
                    </figure>
                </div>
            </div>
            <div className='is-hidden-desktop is-flex-touch is-flex-wrap-wrap is-justify-content-center'>
                <div className='m-3'>
                    <figure className="image is-200x200">
                        <img src={image13} className="" alt="logo" />
                    </figure>
                </div>
                <div className='m-3'>
                    <figure className="image is-200x200">
                        <img src={image14} className="" alt="logo" />
                    </figure>
                </div>
                <div className='m-3'>
                    <figure className="image is-200x200">
                        <img src={image15} className="" alt="logo" />
                    </figure>
                </div>
                <div className='m-3'>
                    <figure className="image is-200x200">
                        <img src={image16} className="" alt="logo" />
                    </figure>
                </div>
                <div className='m-3'>
                    <figure className="image is-200x200">
                        <img src={image17} className="" alt="logo" />
                    </figure>
                </div>
            </div>
        </>
    )
}

export default Square;