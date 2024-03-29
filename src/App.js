import React, { useState, useEffect } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

import Apicall from './components/apicall';
import Navbar from './components/NavbarComponent/Navbar';
import MainContent from './components/MainComponent/MainContent';
import FooterContent from './components/FooterComponent/FooterContent'
import Modifier from './components/MainComponent/Modifier';


function App() {
  
  const [wholedata, setwholedata] = useState([])
  const [CHANGER, SETCHANGER] = useState("hi")
  
  useEffect(() => {

    async function x() {
      // console.log("hey")
      const fetchdata = await axios.get("http://localhost:8000/userdata")
      setwholedata(await fetchdata.data)
      // nsole.log(await fetchdata)
      
      // console.log(wholedata)
    }
    x(); x(); x()
    // x()
    
    
  }, [CHANGER])
  
  console.log(wholedata, CHANGER)
  
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
    <div>
      <header className='headerlayout'>
        <Navbar />
      </header>

      <main className='mainlayout'>
        <MainContent data={wholedata} changer={[CHANGER, SETCHANGER]} />
      </main>
        
      <footer className='footerlayout'>
        <FooterContent />
      </footer>

      {/* <Modifier /> */}
    </div>
    
  );
}

export default App;
