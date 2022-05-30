import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import StateProvider from './StateManagement/StateProvider';
import App from './webApp/App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
  <StateProvider>

    <App />
  </StateProvider>

  </BrowserRouter>
  </React.StrictMode>
);

