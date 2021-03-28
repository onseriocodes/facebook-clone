import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';

const App = () => {
  return (
    <div className='app'>
      <Header />
      <main className='app__body'>
        <Sidebar />
        <Feed />
        {/* Widgets */}
      </main>
    </div>
  );
};

export default App;

// npm install -g firebase-tools
