import React from 'react';
import logo from './logo.svg';
import { css, keyframes } from '@emotion/react'
import './css/mystyles.css'
import logoIcon from './images/g8dyiy.jpg'
import image1 from './images/2be646_27fb963ca56f44d2a44c9209a533d720-mv2 (1).jpg'
import image2 from './images/20220720120530_1.jpg'
import { RiTwitterFill } from 'react-icons/ri'
import { AiFillGithub } from 'react-icons/ai'
import {RiTwitterXLine} from 'react-icons/ri'
import { IconContext } from 'react-icons'
import { useEffect, useState, useRef } from "react"
import { useClickOutside } from '@react-hooks-library/core'


function App() {
  return (
    <>
      <header className="">
        {/* <nav className="navbar" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <a className="navbar-item" href="#">
              <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" />
            </a>
          </div>
        </nav> */}
      </header>
      <body className='has-background-primary-light'>
        <div className='container'>
          <section className="section is-medium">
            <div className='container is-flex is-justify-content-flex-start'>
              <figure className="image is-96x96 m-1">
                <img src={logoIcon} className="is-rounded" alt="logo" />
              </figure>
              <div className='m-2'>
                <h1 className="title">Egg</h1>
                <h2 className="subtitle">
                  <strong>Illustrator / Video Editor</strong>
                </h2>
                <IconContext.Provider value={{ size: '30px' }}>
                  <a href='https://twitter.com/egg_is_blue' target="_blank" rel="noopener noreferrer">
                    <RiTwitterFill />
                  </a>
                </IconContext.Provider>
              </div>
              <div>

              </div>
            </div>
          </section>
          <section className="section is-medium">
            <h1 className='title is-4'>Picup</h1>
            <div className='container is-flex is-justify-content-center is-flex-wrap-wrap'>
              <MainIllusts />
              <div className='is-flex is-flex-direction-column is-justify-content-end mb-2'>
                <div className='m-2'>
                  <h1 className="subtitle">Main Picture</h1>
                </div>
                <div>
                  <p>
                    discription
                  </p>
                  <p>
                    expample something
                  </p>
                </div>
              </div>
              <MainIllusts />
              <div className='is-flex is-flex-direction-column is-justify-content-end mb-2'>
                <div className='m-2'>
                  <h1 className="subtitle">Main Picture</h1>
                </div>
                <div className=''>
                  <p>
                    discription
                  </p>
                  <p>
                    expample something
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="section is-medium">
            <h1 className='title is-4'>sub picup</h1>
            <div className='container is-flex is-justify-content-center is-flex-wrap-wrap'>
              <SubIllust />
            </div>
          </section>
        </div>
      </body >
      <footer className='footer has-background-info'>
        <div className="content has-text-right">
          <p>
            {/* <AiFillGithub /> */}
            <strong>created</strong> by <a href="https://twitter.com/nyaoisnao" target="_blank" rel="noopener noreferrer">nao</a>. with
            <img src="https://bulma.io/images/bulma-logo.png" width="70" height="38" />
          </p>
        </div>
      </footer>
    </>
  );
}


// メインモーダルコンポーネント
const MainIllusts = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const ref = useRef(null)
  useClickOutside(ref, () => {
    setShow(false)
  })
  if (!setShow) return null

  return (
    <>
      <div className='m-3' onClick={handleShow} >
        <figure className="image-space is-200x200">
          <img src={logoIcon} className="" alt="logo" />
        </figure>
      </div>
      {/* モーダル */}
      {show ? (
        <div className="modal is-active" ref={ref}>
          <div className="modal-background"></div>
          <div className='modal-content'>
            <p className="image">
              <img src={logoIcon} alt="" />
            </p>
          </div>
          <button className="modal-close is-large" aria-label="close" onClick={handleClose}></button>
        </div>
      ) : <></>}
    </>
  );
}

// サブモーダルコンポーネント
const SubIllust = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {/* 1 */}
      <div className='m-3' onClick={handleShow} >
        <figure className="image-space is-128x128">
          <img src={logoIcon} className="" alt="logo" />
        </figure>
      </div>
      {/* モーダル */}
      {show ? (
        <div className="modal is-active">
          <div className="modal-background"></div>
          <div className='modal-content'>
            <p className="image">
              <img src={logoIcon} alt="" />
            </p>
          </div>
          <button className="modal-close is-large" aria-label="close" onClick={handleClose}></button>
        </div>
      ) : <></>}
      {/* 2 */}
      <div className='m-3' onClick={handleShow} >
        <figure className="image-space is-128x128">
          <img src={logoIcon} className="" alt="logo" />
        </figure>
      </div>
      {/* モーダル */}
      {show ? (
        <div className="modal is-active">
          <div className="modal-background"></div>
          <div className='modal-content'>
            <p className="image">
              <img src={logoIcon} alt="" />
            </p>
          </div>
          <button className="modal-close is-large" aria-label="close" onClick={handleClose}></button>
        </div>
      ) : <></>}
      {/* 3 */}
      <div className='m-3' onClick={handleShow} >
        <figure className="image-space is-128x128">
          <img src={logoIcon} className="" alt="logo" />
        </figure>
      </div>
      {/* モーダル */}
      {show ? (
        <div className="modal is-active">
          <div className="modal-background"></div>
          <div className='modal-content'>
            <p className="image">
              <img src={logoIcon} alt="" />
            </p>
          </div>
          <button className="modal-close is-large" aria-label="close" onClick={handleClose}></button>
        </div>
      ) : <></>}
      {/* 4 */}
      <div className='m-3' onClick={handleShow} >
        <figure className="image-space is-128x128">
          <img src={logoIcon} className="" alt="logo" />
        </figure>
      </div>
      {/* モーダル */}
      {show ? (
        <div className="modal is-active">
          <div className="modal-background"></div>
          <div className='modal-content'>
            <p className="image">
              <img src={logoIcon} alt="" />
            </p>
          </div>
          <button className="modal-close is-large" aria-label="close" onClick={handleClose}></button>
        </div>
      ) : <></>}
      {/* 5 */}
      <div className='m-3' onClick={handleShow} >
        <figure className="image-space is-128x128">
          <img src={logoIcon} className="" alt="logo" />
        </figure>
      </div>
      {/* モーダル */}
      {show ? (
        <div className="modal is-active">
          <div className="modal-background"></div>
          <div className='modal-content'>
            <p className="image">
              <img src={logoIcon} alt="" />
            </p>
          </div>
          <button className="modal-close is-large" aria-label="close" onClick={handleClose}></button>
        </div>
      ) : <></>}
      {/* 6 */}
      <div className='m-3' onClick={handleShow} >
        <figure className="image-space is-128x128">
          <img src={logoIcon} className="" alt="logo" />
        </figure>
      </div>
      {/* モーダル */}
      {show ? (
        <div className="modal is-active">
          <div className="modal-background"></div>
          <div className='modal-content'>
            <p className="image">
              <img src={logoIcon} alt="" />
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
