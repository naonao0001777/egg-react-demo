import React from 'react';

function Footer() {
    return (
        <footer className='footer has-background-info-dark'>
            <div className="has-text-right">
                <p className='has-text-white is-unselectable'>
                    {/* <AiFillGithub /> */}
                    Made by <a className="has-text-white" href="https://twitter.com/nyaoisnao" target="_blank" rel="noopener noreferrer">nao</a> with<span> </span>
                    <img src="https://bulma.io/assets/Bulma%20Logo%20White.png" width="70" height="38" is-unselectable />
                </p>
            </div>
        </footer>
    )
}

export default Footer;