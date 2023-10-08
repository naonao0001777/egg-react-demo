import React, { useEffect, Fragment, useState, useRef, useMemo } from "react"
import logo from './logo.svg';
import { ClassNames, css, keyframes } from '@emotion/react'
import './css/mystyles.css'
import { AiFillGithub, AiFillHeart } from 'react-icons/ai'
import { RiTwitterXLine, RiRectangleFill, RiTwitterFill, RiSquareFill } from 'react-icons/ri'
import { TbRectangleVerticalFilled } from 'react-icons/tb'
import { IoMail } from 'react-icons/io5'
import { BsFillSunFill } from 'react-icons/bs'
import { FiMoon } from 'react-icons/fi'
import { LuRectangleVertical, LuRectangleHorizontal, LuMailCheck } from 'react-icons/lu'
import { FaGripVertical, FaRegSquare } from 'react-icons/fa'
import { VscCircleLargeFilled, VscCircleLarge } from 'react-icons/vsc'
import { IconContext } from 'react-icons'
import { useClickOutside } from '@react-hooks-library/core'
import useSound from 'use-sound'
import soundClick from './sounds/kako.mp3'
import soundTwitter from './sounds/koka.mp3'
import soundModeMoon from './sounds/pyuri.mp3'
import soundModeSun from './sounds/pico.mp3'
import { TransitionGroup, CSSTransition, Transition, SwitchTransition } from 'react-transition-group'
import styled from 'styled-components'
import { Helmet } from "react-helmet"
import { useCookies } from "react-cookie"
import { CookieSetOptions } from "universal-cookie";
import LandScape from "./components/LandScape"
import Vertical from "./components/Vertical"
import Square from "./components/Square"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useOffsetTop } from './useOffsetTop';

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
import { Value } from 'sass';


function App() {
  const [twitterSoundPlay, { stop, pause }] = useSound(soundTwitter, { volume: 0.4 });
  const [modeSoundPlayM] = useSound(soundModeMoon, { volume: 0.3 });
  const [modeSoundPlayS] = useSound(soundModeSun, { volume: 0.3 });
  const [cookies, setCookie, removeCookie] = useCookies(["mode"]);
  const [mode, setMode] = useState(!cookies.mode);
  const options: CookieSetOptions = {
    // cookie有効期間 1週間
    maxAge: 60 * 60 * 24 * 7
  }

  const modeToggle = () => {
    setMode(!mode);
    setCookie("mode", mode, options);
    modeSoundPlayM();
  }

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
        <meta property="og:url" content="https://egghouse.netlify.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Egg House" />
        <meta property="og:description" content="Egg's website" />
        <meta property="og:site_name" content="Egg House" />
        <meta property="og:image" content="https://github.com/naonao0001777/egg-react/assets/46675984/55081bf4-f2a2-4fa6-b460-54b6a5c5d802" />
        {/* OGP ここまで */}
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text x=%2250%%22 y=%2250%%22 style=%22dominant-baseline:central;text-anchor:middle;font-size:90px;%22>🐤</text></svg>"></link>
        <meta name="twitter:card" content="summary" />
      </Helmet>
      <body className={mode ? 'has-background-primary-light is-unselectable max-width' : 'has-background-black-ter is-unselectable max-width'}>
        <nav className={mode ? 'navbar has-background-primary-light is-unselectable max-width' : 'navbar has-background-black-ter is-unselectable max-width'} role="navigation" aria-label="main navigation">
          <IconContext.Provider value={{ size: '40px' }}>
            {mode ? <BsFillSunFill onClick={() => { modeToggle(); }} className='m-2 toggleIcon has-text-warning' /> : <FiMoon onClick={() => { modeToggle(); }} className='m-2 has-text-warning-light toggleIcon' />}
          </IconContext.Provider>
        </nav>
        <div className='container'>
          <section className="section is-medium">
            <div className='is-flex is-justify-content-flex-start'>
              <div className="tile is-ancestor">
                <figure className="image is-96x96 m-1">
                  <img src={logoIcon} className="is-rounded" alt="logo" />
                </figure>
                <div className='m-2'>
                  <h1 className={mode ? "title" : "title has-text-primary-light"} >Egg</h1>
                  <h2 className="subtitle">
                    <strong className={mode ? "subtitle" : "subtitle has-text-primary-light"}>Like Drawing / Editing Video</strong>
                  </h2>
                  <IconContext.Provider value={{ size: '30px' }}>
                    <a className='' href='https://twitter.com/egg_is_blue' onClick={twitterSoundPlay} target="_blank" rel="noopener noreferrer">
                      <RiTwitterXLine />
                    </a>
                  </IconContext.Provider>
                </div>
                <div className="tile is-vertical is-4">
                  <div className="tile">
                    <div className="tile is-parent is-vertical">
                      <article className={mode ? "tile is-child notification is-primary" : "tile is-child notification is-info"}>
                        <h1 className="title">Feel free to request!🐤</h1>
                        <h2 className="subtitle">お絵描きのご依頼はDMでお気軽にお問い合わせください。📫</h2>
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
const FragmentItem = () => {
  return null
}

// ハンバーガー表示切替
const Humberger: React.FC = () => {
  const [value, setValue] = useState("Landscape")
  const [a, setA] = useState(false)
  const [b, setB] = useState(false)
  const [c, setC] = useState(false)
  const handleA = () => { setA(true); setB(false); setC(false) };
  const handleB = () => { setB(true); setA(false); setC(false) };
  const handleC = () => { setC(true); setA(false); setB(false) };
  const handleAll = () => setValue("All");
  const handleLandScape = () => setValue("Landscape");
  const handleVertical = () => setValue("Vertical");
  const handleSquare = () => setValue("Square");
  const [play, { stop, pause }] = useSound(soundClick, { volume: 0.5 });

  const landscapeRef = useRef(null)
  const verticalRef = useRef(null)
  const squareRef = useRef(null)
  const nodeRef = value === "Landscape" ? landscapeRef : value === "Vertical" ? verticalRef : value === "Square" ? squareRef : undefined

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
          <li><span className='mr-2' onClick={() => { handleLandScape(); play(); handleA(); }}>{value === "Landscape" ? <span className="tag is-link shapeTag">Landscape</span> : <span className="tag is-primary is-light shapeTag">Landscape</span>}</span></li>
          <li><span className='ml-2 mr-2' onClick={() => { handleVertical(); play(); handleB(); }}>{value === "Vertical" ? <span className="tag is-link shapeTag">Vertical</span> : <span className="tag is-primary is-light shapeTag">Vertical</span>}</span></li>
          <li><span className='ml-2' onClick={() => { handleSquare(); play(); handleC(); }}>{value === "Square" ? <span className="tag is-link shapeTag">Square</span> : <span className="tag is-primary is-light shapeTag">Square</span>}</span></li>
        </ul>
      </nav >
      {/* <BrowserRouter>
        <Routes>
          {
            value === "Landscape" ? (
              <Route index element={<LandScape />} />
            ) : value === "Vertical" ? (
              <Route path="/Vertical" element={<Vertical />} />
            ) : value === "Square" ? (
              <Route path="/Square" element={<Square />} />
            ) :
              <>
              </>
          }
        </Routes>
      </BrowserRouter > */}
      <TransitionGroup classNames="wrapper">
        <CSSTransition key={value} nodeRef={nodeRef} timeout={600} classNames="slide">
          <div className='slide-album-wrapper'>
            <div ref={nodeRef} className='slide-album'>
              {
                value === "Landscape" ? (
                  <LandScape />
                ) : value === "Vertical" ? (
                  <Vertical />
                ) : value === "Square" ? (
                  <Square />
                ) :
                  <></>
              }
            </div>
          </div>
        </CSSTransition>
      </TransitionGroup >
    </>
  );
}

export default App;
