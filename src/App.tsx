import React from 'react';
import logo from './logo.svg';
import { css, keyframes } from '@emotion/react'
import './css/mystyles.css'
import logoIcon from './images/g8dyiy.jpg'
import image1 from './images/wide.jpg'
import image2 from './images/high.jpg'
import { RiTwitterFill } from 'react-icons/ri'
import { AiFillGithub } from 'react-icons/ai'
import { RiTwitterXLine } from 'react-icons/ri'
import { IconContext } from 'react-icons'
import { useEffect, useState, useRef } from "react"
import { useClickOutside } from '@react-hooks-library/core'
// import useSound from 'use-sound'
import soundClick from './sounds/mouse-click.mp3'


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
            <div className='is-flex is-flex-wrap-wrap is-justify-content-space-between is-unselectable'>
              <div className='m-3'>
                <figure className="image-wide">
                  <img src={image1} className="" alt="logo" />
                </figure>
              </div>
              <div className='m-3'>
                <figure className="image-wide">
                  <img src={image1} className="" alt="logo" />
                </figure>
              </div>
              <div className='m-3'>
                <figure className="image-wide">
                  <img src={image1} className="" alt="logo" />
                </figure>
              </div>
            </div>
            <div className='is-flex is-flex-wrap-wrap is-justify-content-space-between'>
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
            </div>
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
