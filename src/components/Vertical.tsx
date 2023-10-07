import React from 'react';
// long9~12
import image9 from '../images/long/9.jpg'
import image10 from '../images/long/10.jpg'
import image11 from '../images/long/11.jpg'
import image12 from '../images/long/12.jpg'

const Vertical = React.forwardRef<HTMLDivElement>((props, ref) => {
    return (
        <div ref={ref}>
            <div className='is-flex-desktop is-hidden-touch is-flex-wrap-wrap is-justify-content-space-between'>
                <div className='m-3'>
                    <figure className="image-long">
                        <img src={image9} className="" alt="logo" />
                    </figure>
                </div>
                <div className='m-3'>
                    <figure className="image-long">
                        <img src={image10} className="" alt="logo" />
                    </figure>
                </div>
                <div className='m-3'>
                    <figure className="image-long">
                        <img src={image11} className="" alt="logo" />
                    </figure>
                </div>
                <div className='m-3'>
                    <figure className="image-long">
                        <img src={image12} className="" alt="logo" />
                    </figure>
                </div>
                <div className='m-3'>
                    <figure className="image-long">
                    </figure>
                </div>
            </div>
            <div className='is-hidden-desktop is-flex-touch is-flex-wrap-wrap is-justify-content-center'>
                <div className='m-3'>
                    <figure className="image-long">
                        <img src={image9} className="" alt="logo" />
                    </figure>
                </div>
                <div className='m-3'>
                    <figure className="image-long">
                        <img src={image10} className="" alt="logo" />
                    </figure>
                </div>
                <div className='m-3'>
                    <figure className="image-long">
                        <img src={image11} className="" alt="logo" />
                    </figure>
                </div>
                <div className='m-3'>
                    <figure className="image-long">
                        <img src={image12} className="" alt="logo" />
                    </figure>
                </div>
            </div>
        </div>
    )
})

export default Vertical;