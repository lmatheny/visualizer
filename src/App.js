import React, { useState, useRef, useEffect, useCallback } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Table from "./components/Table";
import AdHelp from './adHelp.js'
import Compiler from "./Compiler/Compiler.js";
import blankAd from './icons/contact.png'

function App() {

  


    return (
      <div>
        <Table />
         <AdHelp /> 
      </div>
    );
  
}
export default App;