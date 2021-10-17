//import logo from './logo.svg';
import './App.css';
import React from 'react'
import NavBar from './Components/Navbar/NavBar';
import Banner from './Components/Banner/Banner';
import Rowpost from './Components/Rowpost/Rowpost';
import {orginalUrl,actionUrl,horrorUrl,romanceUrl,documentariesUrl,comedyUrl } from './urls'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner/>
      <Rowpost url={orginalUrl} title='Netflix Orginals' isLarge />
      <Rowpost url={actionUrl} title='Action'/>
      <Rowpost url={comedyUrl} title='Comedy'/>
      <Rowpost url={horrorUrl} title='Horror'/>
      <Rowpost url={romanceUrl} title='Romance'/>
      <Rowpost url={documentariesUrl} title='Documentaries'/>
    </div>
  );
}

export default App;
