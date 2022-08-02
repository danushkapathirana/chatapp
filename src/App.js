import React from 'react';

import './App.css';

const primaryNavigation = ["Home", "Chat", "Contact Us", "Sign In"]

function App() {
  return (
    <div className="chat-app">
      <header className="header">
        <div className='logo'>
          <i class="fa-solid fa-comments"></i>
        </div>
        <nav className='primary-nav'>
          <ul className='nav-items'>
            {primaryNavigation.map((item) =>
              <li className='nav-item' key={item}>{item}</li>
            )}
          </ul>
        </nav>
      </header>

      <div className='app-body'>
        <div className='chat-wrapper'>
          <div className='chat-container'>
            <div className='col col-1 main-navigation'></div>
            <div className='col col-2 users-list'></div>
            <div className='col col-3 chat-room'></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
