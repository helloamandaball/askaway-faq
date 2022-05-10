import React from 'react';
import byLogoSm from "./images/byLogoSm.png"
import './Layout.css';

export default function Footer() {
    return (
        <>
            <div className="spacer75">&nbsp;</div>

            <footer className="footer">
                <p className="littleEmblem">&#127952;</p>
                <div className="footerDiv">
                    <p className="footerText"><span className="versionText">Version 1.0</span> &nbsp;&#169;2022 by </p>
                    <a href="https://github.com/helloamandaball"><img src={byLogoSm} alt="amanda" className="byLogoImg" /></a>
                </div>
            </footer>
    </>
    )
}