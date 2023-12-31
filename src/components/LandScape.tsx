
import React, { useEffect, Fragment, useState, useRef } from "react"
// wide1~8
import image1 from '../images/wide/1.jpg'
import image2 from '../images/wide/2.jpg'
import image3 from '../images/wide/3.jpg'
import image4 from '../images/wide/4.jpg'
import image5 from '../images/wide/5.jpg'
import image6 from '../images/wide/6.jpg'
import image7 from '../images/wide/7.jpg'
import image8 from '../images/wide/8.jpg'

const LandScape = React.forwardRef<HTMLDivElement>((props, ref) => {

    return (
        <div ref={ref}>
            <div className='is-flex-desktop is-hidden-touch is-flex-wrap-wrap is-justify-content-space-between'>
                <div className='m-3'>
                    <figure className="image-wide">
                        <img src="https://placehold.jp/3d4070/ffffff/320x210.png" className="" alt="logo" />
                    </figure>
                </div>
                <div className='m-3'>
                    <figure className="image-wide">
                        <img src="https://placehold.jp/3d4070/ffffff/320x210.png" className="" alt="logo" />
                    </figure>
                </div>
                <div className='m-3'>
                    <figure className="image-wide">
                        <img src="https://placehold.jp/3d4070/ffffff/320x210.png" className="" alt="logo" />
                    </figure>
                </div>
                <div className='m-3'>
                    <figure className="image-wide">
                        <img src="https://placehold.jp/3d4070/ffffff/320x210.png" className="" alt="logo" />
                    </figure>
                </div>
                <div className='m-3'>
                    <figure className="image-wide">
                        <img src="https://placehold.jp/3d4070/ffffff/320x210.png" className="" alt="logo" />
                    </figure>
                </div>
                <div className='m-3'>
                    <figure className="image-wide">
                        <img src="https://placehold.jp/3d4070/ffffff/320x210.png" className="" alt="logo" />
                    </figure>
                </div>
                <div className='m-3'>
                    <figure className="image-wide">
                        <img src="https://placehold.jp/3d4070/ffffff/320x210.png" className="" alt="logo" />
                    </figure>
                </div>
                <div className='m-3'>
                    <figure className="image-wide">
                        <img src="https://placehold.jp/3d4070/ffffff/320x210.png" className="" alt="logo" />
                    </figure>
                </div>
                <div className='m-3'>
                    <figure className="image-wide">
                        <img src="https://placehold.jp/3d4070/ffffff/320x210.png" className="" alt="logo" />
                    </figure>
                </div>
            </div>
            <div className='is-hidden-desktop is-flex-touch is-flex-wrap-wrap is-justify-content-center'>
                <div className='m-3'>
                    <figure className="image-wide">
                        <img src="https://placehold.jp/3d4070/ffffff/320x210.png" className="" alt="logo" />
                    </figure>
                </div>
                <div className='m-3'>
                    <figure className="image-wide">
                        <img src="https://placehold.jp/3d4070/ffffff/320x210.png" className="" alt="logo" />
                    </figure>
                </div>
                <div className='m-3'>
                    <figure className="image-wide">
                        <img src="https://placehold.jp/3d4070/ffffff/320x210.png" className="" alt="logo" />
                    </figure>
                </div>
                <div className='m-3'>
                    <figure className="image-wide">
                        <img src="https://placehold.jp/3d4070/ffffff/320x210.png" className="" alt="logo" />
                    </figure>
                </div>
                <div className='m-3'>
                    <figure className="image-wide">
                        <img src="https://placehold.jp/3d4070/ffffff/320x210.png" className="" alt="logo" />
                    </figure>
                </div>
                <div className='m-3'>
                    <figure className="image-wide">
                        <img src="https://placehold.jp/3d4070/ffffff/320x210.png" className="" alt="logo" />
                    </figure>
                </div>
                <div className='m-3'>
                    <figure className="image-wide">
                        <img src="https://placehold.jp/3d4070/ffffff/320x210.png" className="" alt="logo" />
                    </figure>
                </div>
                <div className='m-3'>
                    <figure className="image-wide">
                        <img src="https://placehold.jp/3d4070/ffffff/320x210.png" className="" alt="logo" />
                    </figure>
                </div>
                <div className='m-3'>
                    <figure className="image-wide">
                        <img src="https://placehold.jp/3d4070/ffffff/320x210.png" className="" alt="logo" />
                    </figure>
                </div>
            </div>
        </div>
    )
})

export default LandScape;