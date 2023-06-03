import React, { useState, useRef, useEffect, useCallback } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Table from "./components/Table";
import AdHelp from './adHelp.js'
import Compiler from "./Compiler/Compiler.js";
import { isMobile } from 'react-device-detect';
import Box from '@mui/material/Box';
import blankAd from './icons/contact.png'

function App() {

  

  if (!isMobile) {
    return (
      <div>
        <Table />
         <AdHelp /> 
      </div>
    );
  } else {

  }
}
export default App;