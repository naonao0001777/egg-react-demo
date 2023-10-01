import React from 'react';
import logo from './logo.svg';
import { css, keyframes } from '@emotion/react'
import './css/mystyles.css'
import { RiTwitterFill } from 'react-icons/ri'
import { AiFillGithub } from 'react-icons/ai'
import { RiTwitterXLine } from 'react-icons/ri'
import { IconContext } from 'react-icons'
import { useEffect, useState, useRef } from "react"
import { useClickOutside } from '@react-hooks-library/core'
// import useSound from 'use-sound'
import soundClick from './sounds/mouse-click.mp3'
import logoIcon from './images/g8dyiy.jpg'
import image1 from './images/20231001_215122.jpg'
import image2 from './images/20231001_215131.jpg'
import image3 from './images/20231001_215135.jpg'
import image4 from './images/20231001_215138.jpg'
import image5 from './images/20231001_215205.jpg'
import image6 from './images/20231001_215218.jpg'
import image7 from './images/20231001_215221.jpg'
import image8 from './images/20231001_215127.jpg'
import image9 from './images/20231001_215112.jpg'
import image10 from './images/20231001_215225.jpg'
import image11 from './images/20231001_215117.jpg'
import image12 from './images/20231001_215156.jpg'
import image13 from './images/20231001_215143.jpg'
import image14 from './images/20231001_215151.jpg'
import image15 from './images/20231001_215201.jpg'
import image16 from './images/20231001_215208.jpg'
import image17 from './images/20231001_215212.jpg'


function App() {
  return (
    <>
      {/* <header className="">
        <nav className="navbar has-background-info-dark" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <a className="navbar-item" href="#">
              <h1 className='title'>🐣Egg House</h1>
            </a>
          </div>
        </nav>
      </header> */}
      <body className='has-background-primary-light is-unselectable'>
        {/* has-background-dark */}
        <div className='container'>
          <section className="section is-medium">
            <div className='is-flex is-justify-content-flex-start'>
              <figure className="image is-96x96 m-1">
                <img src={logoIcon} className="is-rounded" alt="logo" />
              </figure>
              <div className='m-2'>
                <h1 className="title">Egg</h1>
                <h2 className="subtitle">
                  <strong className=''>Illustrator / Video Editor</strong>
                </h2>
                <IconContext.Provider value={{ size: '30px' }}>
                  <a className='' href='https://twitter.com/egg_is_blue' target="_blank" rel="noopener noreferrer">
                    <RiTwitterXLine />
                  </a>
                </IconContext.Provider>
              </div>
              <div>

              </div>
            </div>
          </section>
          <section className="section is-medium">
            <h1 className='title is-4 '>Album</h1>
            <div className='is-flex is-flex-wrap-wrap is-justify-content-space-between is-align-items-baseline is-unselectable'>
              <div className='m-3'>
                <figure className="image-wide">
                  <img src={image1} className="" alt="logo" />
                </figure>
              </div>
              <div className='m-3'>
                <figure className="image-wide">
                  <img src={image2} className="" alt="logo" />
                </figure>
              </div>
              <div className='m-3'>
                <figure className="image-wide">
                  <img src={image3} className="" alt="logo" />
                </figure>
              </div>
              <div className='m-3'>
                <figure className="image-wide">
                  <img src={image4} className="" alt="logo" />
                </figure>
              </div>
              <div className='m-3'>
                <figure className="image-wide">
                  <img src={image5} className="" alt="logo" />
                </figure>
              </div>
              <div className='m-3'>
                <figure className="image-wide">
                  <img src={image6} className="" alt="logo" />
                </figure>
              </div>
              <div className='m-3'>
                <figure className="image-wide">
                  <img src={image7} className="" alt="logo" />
                </figure>
              </div>
              <div className='m-3'>
                <figure className="image-wide">
                  <img src={image8} className="" alt="logo" />
                </figure>
              </div>
              <div className='m-3'>
                <figure className="image-wide">
                  <img src={image9} className="" alt="logo" />
                </figure>
              </div>
              <div className='m-3'>
                <figure className="image-wide">
                  <img src={image10} className="" alt="logo" />
                </figure>
              </div>
              <div className='m-3'>
                <figure className="image-wide">
                  <img src={image11} className="" alt="logo" />
                </figure>
              </div>
              <div className='m-3'>
                <figure className="image-wide">
                  <img src={image12} className="" alt="logo" />
                </figure>
              </div>
              <div className='m-3'>
                <figure className="image-wide">
                  <img src={image13} className="" alt="logo" />
                </figure>
              </div>
              <div className='m-3'>
                <figure className="image-wide">
                  <img src={image14} className="" alt="logo" />
                </figure>
              </div>
              <div className='m-3'>
                <figure className="image-wide">
                  <img src={image15} className="" alt="logo" />
                </figure>
              </div>
              <div className='m-3'>
                <figure className="image-wide">
                  <img src={image16} className="" alt="logo" />
                </figure>
              </div>
              <div className='m-3'>
                <figure className="image-wide">
                  <img src={image17} className="" alt="logo" />
                </figure>
              </div>
            </div>
            {/* <div className='is-flex is-flex-wrap-wrap is-justify-content-space-between'>
              <div className='m-3'>
                <figure className="image-long">
                  <img src={image2} className="" alt="logo" />
                </figure>
              </div>
              <div className='m-3'>
                <figure className="image-long">
                  <img src={image2} className="" alt="logo" />
                </figure>
              </div>
              <div className='m-3'>
                <figure className="image-long">
                  <img src={image2} className="" alt="logo" />
                </figure>
              </div>
              <div className='m-3'>
                <figure className="image-long">
                  <img src={image2} className="" alt="logo" />
                </figure>
              </div>
              <div className='m-3'>
                <figure className="image-long">
                  <img src={image2} className="" alt="logo" />
                </figure>
              </div>
            </div> */}
          </section>
        </div >
      </body >
      <footer className='footer has-background-info-dark'>
        <div className="has-text-right">
          <p className='has-text-white is-unselectable'>
            {/* <AiFillGithub /> */}
            Made by <a className="has-text-white-ter" href="https://twitter.com/nyaoisnao" target="_blank" rel="noopener noreferrer">nao</a> with<span> </span>
            <img src="https://bulma.io/assets/Bulma%20Logo%20White.png" width="70" height="38" is-unselectable />
          </p>
        </div>
      </footer>
    </>
  );
}


// ワイドモーダルコンポーネント
const MainIllusts = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => { setShow(true) };
  // const [play, { stop, pause }] = useSound(soundClick);
  const ref = useRef(null)
  useClickOutside(ref, () => {
    setShow(false)
  })
  if (!setShow) return null

  return (
    <>
      <div className='m-3' onClick={handleShow}>
        <figure className="image-wide">
          <img src={image1} className="" alt="logo" />
        </figure>
      </div>
      {/* モーダル */}
      {show ? (
        <div className="modal is-active" ref={ref}>
          <div className="modal-background"></div>
          <div className='modal-content'>
            <p className="image">
              <img src={image1} alt="" />
            </p>
          </div>
          <button className="modal-close is-large" aria-label="close" onClick={handleClose}></button>
        </div>
      ) : <></>}
    </>
  );
}

// ロングモーダルコンポーネント
const SubIllust = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {/* 1 */}
      <div className='m-3' onClick={handleShow} >
        <figure className="image-long">
          <img src={image2} className="" alt="logo" />
        </figure>
      </div>
      {/* モーダル */}
      {show ? (
        <div className="modal is-active">
          <div className="modal-background"></div>
          <div className='modal-content'>
            <p className="image">
              <img src={image2} alt="" />
            </p>
          </div>
          <button className="modal-close is-large" aria-label="close" onClick={handleClose}></button>
        </div>
      ) : <></>}
      {/* 2 */}
      <div className='m-3' onClick={handleShow} >
        <figure className="image-long ">
          <img src={image2} className="" alt="logo" />
        </figure>
      </div>
      {/* モーダル */}
      {show ? (
        <div className="modal is-active">
          <div className="modal-background"></div>
          <div className='modal-content'>
            <p className="image">
              <img src={image2} alt="" />
            </p>
          </div>
          <button className="modal-close is-large" aria-label="close" onClick={handleClose}></button>
        </div>
      ) : <></>}
      {/* 3 */}
      <div className='m-3' onClick={handleShow} >
        <figure className="image-long ">
          <img src={image2} className="" alt="logo" />
        </figure>
      </div>
      {/* モーダル */}
      {show ? (
        <div className="modal is-active">
          <div className="modal-background"></div>
          <div className='modal-content'>
            <p className="image">
              <img src={image2} alt="" />
            </p>
          </div>
          <button className="modal-close is-large" aria-label="close" onClick={handleClose}></button>
        </div>
      ) : <></>}
      {/* 4 */}
      <div className='m-3' onClick={handleShow} >
        <figure className="image-long ">
          <img src={image2} className="" alt="logo" />
        </figure>
      </div>
      {/* モーダル */}
      {show ? (
        <div className="modal is-active">
          <div className="modal-background"></div>
          <div className='modal-content'>
            <p className="image">
              <img src={image2} alt="" />
            </p>
          </div>
          <button className="modal-close is-large" aria-label="close" onClick={handleClose}></button>
        </div>
      ) : <></>}
      {/* 5 */}
      <div className='m-3' onClick={handleShow} >
        <figure className="image-long ">
          <img src={image2} className="" alt="logo" />
        </figure>
      </div>
      {/* モーダル */}
      {show ? (
        <div className="modal is-active">
          <div className="modal-background"></div>
          <div className='modal-content'>
            <p className="image">
              <img src={image2} alt="" />
            </p>
          </div>
          <button className="modal-close is-large" aria-label="close" onClick={handleClose}></button>
        </div>
      ) : <></>}
      {/* 5 */}
      <div className='m-3' onClick={handleShow} >
        <figure className="image-long ">
          <img src={image2} className="" alt="logo" />
        </figure>
      </div>
      {/* モーダル */}
      {show ? (
        <div className="modal is-active">
          <div className="modal-background"></div>
          <div className='modal-content'>
            <p className="image">
              <img src={image2} alt="" />
            </p>
          </div>
          <button className="modal-close is-large" aria-label="close" onClick={handleClose}></button>
        </div>
      ) : <></>}
    </>
  );
}

const ImageIcon = () => {
  return (
    null
  );
}

export default App;
