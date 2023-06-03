import React, { useState, useRef, useEffect, useCallback } from "react";
import "./adHelp.css";
import blankAd from './icons/contact.png'

function AdHelp() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    const [windowHeight, setWindowHeight] = useState(window.innerHeight)
    const setWindowDimensions = () => {
        setWindowWidth(window.innerWidth)
        setWindowHeight(window.innerHeight)
    }
    useEffect(() => {
        window.addEventListener('resize', setWindowDimensions);
        return () => {
            window.removeEventListener('resize', setWindowDimensions)
        }
    }, [])


    const [flip, setFlip] = useState(false);
    return (


        <div>
            <iframe
                frameBorder="0"
                height= "400px"
                src="https://onecompiler.com/embed/"
                width="100%"
            ></iframe>
            {/* <img style={{ width: '100%', height: (windowHeight / 100) * 20, marginBottom: '0%' }} align='center' src={blankAd} class="adBanner" ></img> */}
        </div>


    );
}

export default AdHelp;

