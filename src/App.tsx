import React from 'react';
import logo from './logo.svg';
import { css, keyframes } from '@emotion/react'
import './css/mystyles.css'
import { RiTwitterFill } from 'react-icons/ri'
import { AiFillGithub, AiFillHeart } from 'react-icons/ai'
import { RiTwitterXLine } from 'react-icons/ri'
import { LuMailCheck } from 'react-icons/lu'
import { IoMail } from 'react-icons/io5'
import { VscCircleLargeFilled, VscCircleLarge } from 'react-icons/vsc'
import { IconContext } from 'react-icons'
import { useEffect, Fragment, useState, useRef } from "react"
import { useClickOutside } from '@react-hooks-library/core'
// import useSound from 'use-sound'
import soundClick from './sounds/mouse-click.mp3'
import { TransitionGroup, CSSTransition, Transition } from 'react-transition-group'
import styled from 'styled-components'
import { Helmet } from "react-helmet"

// icon
import logoIcon from './images/mh2tg9.jpg'
// wide1~8
import image1 from './images/wide/1.jpg'
import image2 from './images/wide/2.jpg'
import image3 from './images/wide/3.jpg'
import image4 from './images/wide/4.jpg'
import image5 from './images/wide/5.jpg'
import image6 from './images/wide/6.jpg'
import image7 from './images/wide/7.jpg'
import image8 from './images/wide/8.jpg'
// long9~12
import image9 from './images/long/9.jpg'
import image10 from './images/long/10.jpg'
import image11 from './images/long/11.jpg'
import image12 from './images/long/12.jpg'
// square13~17
import image13 from './images/square/13.jpg'
import image14 from './images/square/14.jpg'
import image15 from './images/square/15.jpg'
import image16 from './images/square/16.jpg'
import image17 from './images/square/17.jpg'


function App() {
  return (
    <>
      <Helmet>
        <title>Egg House</title>
        <meta
          name="description"
          content="Egg's website"
        />
        <meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0"></meta>
        {/* OGP ここから */}
        <head prefix="og: http://ogp.me/ns#" />
        <meta property="og:url" content="https://master--preeminent-scone-5c284b.netlify.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Egg House" />
        <meta property="og:description" content="Egg's website" />
        <meta property="og:site_name" content="Egg House" />
        <meta property="og:image" content="https://github.com/naonao0001777/egg-react/assets/46675984/7158844a-7e57-4c2e-9e31-6c9156e3e2da" />
        {/* OGP ここまで */}
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text x=%2250%%22 y=%2250%%22 style=%22dominant-baseline:central;text-anchor:middle;font-size:90px;%22>🐤</text></svg>"></link>
        <meta name="twitter:card" content="summary" />
      </Helmet>
      <body className='has-background-primary-light is-unselectable max-width'>
        {/* has-background-dark */}
        <div className='container'>
          <section className="section is-medium">
            <div className='is-flex is-justify-content-flex-start'>
              <div className="tile is-ancestor">
                <figure className="image is-96x96 m-1">
                  <img src={logoIcon} className="is-rounded" alt="logo" />
                </figure>
                <div className='m-2'>
                  <h1 className="title">Egg</h1>
                  <h2 className="subtitle">
                    <strong className=''>Like Drawing / Editing Video</strong>
                  </h2>
                  <IconContext.Provider value={{ size: '30px' }}>
                    <a className='' href='https://twitter.com/egg_is_blue' target="_blank" rel="noopener noreferrer">
                      <RiTwitterXLine />
                    </a>
                  </IconContext.Provider>
                </div>

                <div className="tile is-vertical is-4">
                  <div className="tile">
                    <div className="tile is-parent is-vertical">
                      <article className="tile is-child notification is-primary">
                        <h1 className="title">Feel free to request!🐤</h1>
                        <h2 className="subtitle">お絵描きのご依頼はDMでお気軽にお問い合わせください。📫</h2>
                        {/* <h2 className="subtitle">Language Proficiency</h2>
                        <ul>
                          <li>
                            <strong>Chinese</strong><span className='has-text-justified'><VscCircleLargeFilled /></span>
                          </li>
                          <li>
                            English
                          </li>
                          <li>
                            Japanese
                          </li>
                        </ul> */}

                      </article>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="section is-medium-desktop is-unselectable">
            <Humberger />
          </section>
        </div >
      </body >
    </>
  );
}


// ワイドモーダルコンポーネント
const MainIllusts = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => { setShow(true) };
  // const [play, {stop, pause}] = useSound(soundClick);
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
    </>
  );
}

// ハンバーガー表示切替
const Humberger = () => {
  const [value, setValue] = useState("Landscape")

  const handleLandScape = () => setValue("Landscape");
  const handleVertical = () => setValue("Vertical");
  const handleSquare = () => setValue("Square");

  const transition = {
    entering: { opacity: 1, color: 'red', transition: 'all 1s ease' },
    entered: { opacity: 1, color: 'blue' },
    exiting: { opacity: 0, transition: 'all 1s ease' },
    exited: { opacity: 0 },
  }

  return (
    <>
      <div>{
        value === "Landscape" ? (
          <Fragment>
            <h1 className='title is-4 tag is-dark'>
              Landscape
            </h1>
          </Fragment>
        ) : value === "Vertical" ? (
          <Fragment>
            <h1 className='title is-4 tag is-dark'>
              Vertical
            </h1>
          </Fragment>
        ) : value === "Square" ? (
          <Fragment>
            <h1 className='title is-4 tag is-dark'>
              Square
            </h1>
          </Fragment>
        ) : (
          <></>
        )
      }
      </div>

      <nav className="breadcrumb is-start mt-2" aria-label="breadcrumbs">
        <ul>
          <li><a href='javascript:void(0);' onClick={handleLandScape}>Landscape</a></li>
          <li><a href='javascript:void(0);' onClick={handleVertical}>Vertical</a></li>
          <li><a href='javascript:void(0);' onClick={handleSquare}>Square</a></li>
        </ul>
      </nav>
      <TransitionGroup className="wrapper">
        <CSSTransition in={value} timeout={1300} className="slide">
          <div className="main">{
            value === "Landscape" ? (
              <Fragment>
                <div className='is-flex-desktop is-hidden-touch is-flex-wrap-wrap is-justify-content-space-between'>
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
                </div>
                <div className='is-hidden-desktop is-flex-touch is-flex-wrap-wrap is-justify-content-center'>
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
                </div>
              </Fragment>
            ) : value === "Vertical" ? (
              <Fragment>
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
              </Fragment>
            ) : value === "Square" ? (
              <Fragment>
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
              </Fragment>
            ) : (
              <></>
            )
          }
          </div>
        </CSSTransition>
      </TransitionGroup>
    </>
  );
}

const Root = styled.div`
  .slide-enter {
    transform: translateX(100%);
  }
  .slide-enter-active {
    transform: translateX(0%);
    transition: transform 1500ms ease-in-out;
  }
  .slide-exit {
    transform: translateX(0%);
  }
  .slide-exit-active {
    transform: translateX(-100%);
    transition: transform 1500ms ease-in-out;
  }
  padding: 5px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  .tabs {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  }
  .wrapper {
    position: relative;
    border: slid 1px #444;
    flex: 1;
  }
  .main {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 10px;
  }
`

export default App;
