import React, { useState, useRef, useEffect, useCallback } from "react";
import "./adHelp.css";
import blankAd from './icons/contact.png'
import { isMobile } from 'react-device-detect';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';

function AdHelp() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    const [windowHeight, setWindowHeight] = useState(window.innerHeight)
    const [open, setOpen] = React.useState(true);
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



    const handleClose = () => {
        setOpen(false);
    };



    if (!isMobile) {
        return (


            <div>
                <iframe
                    frameBorder="0"
                    height="400px"
                    src="https://onecompiler.com/embed/"
                    width="100%"
                ></iframe>
                {/* <img style={{ width: '100%', height: (windowHeight / 100) * 20, marginBottom: '0%' }} align='center' src={blankAd} class="adBanner" ></img> */}
            </div>


        );
    } else {
        return (



            <div>
                <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">
                        {""}
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            {"Turn your phone to the side for a better experience"}
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>CLOSE</Button>
                    
                    </DialogActions>
                </Dialog>
                <iframe
                    frameBorder="0"
                    height="400px"
                    src="https://onecompiler.com/embed/"
                    width="100%"
                ></iframe>
                {/* <img style={{ width: '100%', height: (windowHeight / 100) * 20, marginBottom: '0%' }} align='center' src={blankAd} class="adBanner" ></img> */}
            </div>


        );

    }

}

export default AdHelp;

