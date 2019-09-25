import React from 'react';
import Logo from './google-logo.svg';
import Shortcuts from './Components/Shortcuts';
import 'antd/dist/antd.css';
import './App.css';
import Customize from './Components/Customize';
import GalleryLayout from './Components/GalleryLayout';

export default function App() {
  return (
    <div className="App">
      <div
        className="logo-container"
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <img
          src={Logo}
          alt="Logo"
          style={{ height: '200px', width: '200px' }}
        />
      </div>
      <Shortcuts />
      <Customize />
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <GalleryLayout />
      </div>
    </div>
  );
}
