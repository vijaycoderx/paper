import React, { useState, useEffect } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

import Apicall from './components/apicall';
import Navbar from './components/NavbarComponent/Navbar';
import MainContent from './components/MainComponent/MainContent';
import FooterContent from './components/FooterComponent/FooterContent'
import Modifier from './components/MainComponent/Modifier';
import Download from './components/MainComponent/Download';


function App() {
  
  const [wholedata, setwholedata] = useState([])
  
  useEffect(() => {
    async function x() {
      // console.log("hey")
      const fetchdata = await axios.get("http://localhost:8000/userdata")
      setwholedata(fetchdata.data)
      // console.log(wholedata)
    }
    x()
    
   console.log(wholedata ) 
    
  },[])
  
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>

    //   <Apicall />
    // </div>
    <div style={{backgroundColor: "skyblue"}}>
      <header className='headerlayout'>
        <Navbar />
      </header>

      <main className='mainlayout'>
        <MainContent data={wholedata}  />
      </main>
        
      <footer className='footerlayout'>
        <FooterContent />
        <Download />
      </footer>

      {/* <Modifier /> */}
    </div>
    
  );
}

export default App;
