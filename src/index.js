import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { EventProvider } from './context/EventContext';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <EventProvider>
      <App />
    </EventProvider>
    
  </React.StrictMode>
);
