import React from 'react';
import './App.css';
import Header from './Header';
import Search from './Search';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="logo">
        <img
          alt="Google"
          src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
        />
      </div>
      <Search />
    </div>
  );
}

export default App;
