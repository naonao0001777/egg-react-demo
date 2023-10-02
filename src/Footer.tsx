import React from 'react';
import useSound from 'use-sound'
import soundClick from './sounds/ka.mp3'

function Footer() {
    const [play, { stop, pause }] = useSound(soundClick);
    return (
        <footer className='footer has-background-info-dark'>
            <div className="has-text-right">
                <p className='has-text-white is-unselectable'>
                    {/* <AiFillGithub /> */}
                    Made by <a className="has-text-white" href="https://twitter.com/nyaoisnao" onClick={play} target="_blank" rel="noopener noreferrer">nao</a> with<span> </span>
                    <img src="https://bulma.io/assets/Bulma%20Logo%20White.png" width="70" height="38" is-unselectable />
                </p>
            </div>
        </footer>
    )
}

export default Footer;