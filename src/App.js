import React from 'react';

import AppState from './context/AppState';

import '@fullcalendar/core/main.css';
import '@fullcalendar/daygrid/main.css';
import '@fullcalendar/timegrid/main.css';
// test

import './App.css';
import Main from './components/Main'

function App() {
  return (
    <div >
      <AppState>
        <Main />
      </AppState>
    </div>
  );
}

export default App;
