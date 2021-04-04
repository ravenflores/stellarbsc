import logo from './logo.svg';
import './App.css';
import Nav from './components/nav2'
import Card from './components/card'
import Card2 from './components/card2'
import Avatars from './components/avatars'
import React from 'react';
import Box from '@material-ui/core/Box';
import { Divider } from '@material-ui/core';




function App() {
  return (
    <div className="App">

      <header className="App-header">
        <div>
          <h1>STELLAR BSC</h1>
        </div>

        <img src={"https://i.ibb.co/t2LD6r6/stellar-xlm-logo-1.png"} className="App-logo" alt="logo" />
        <p>

        </p>
        <div>

        </div>
        <div>
          <h3>What is StellarBsc?</h3>
          <p> 
         $StellarBsc community driven yield farm token on Binance Smart Chain. The legendary coin is now in the bsc network. Also with automatic defi feature. 
</p>
        </div>


       

      </header>
      <div className="App-body">
      <div>
          <h3>TOKENOMICS</h3>
          <p>4% of every transactions is redistributed to hodlers</p> 
          <p>No team tokens</p>       
          <Divider />
          <p>Total supply: 50.000.000.000 $StellarBsc</p>
          <p>Presale (DxSale): 30.000.000.000 (1 BNB = 300.000.000)</p>
          <p>PancakeSwap Listing: 20.000.000.000 (1 BNB = 266.666.666)</p>
       





      </div>
        <Nav />
      </div>
      <div className="App-com">
  
      <Avatars />


      <div>

      {/* <Card2 /> <Card2 /> <Card2 /> */}
      </div>


      </div>
      

         
      
    </div>
  );
}

export default App;
