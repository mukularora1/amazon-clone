import Home from '../pages/Home';
import Checkout from '../pages/Checkout';
import Prime from '../pages/Prime';
import Profile from '../pages/Profile';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './header/Header';

function App() {
  return (
    <div className="app">
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/checkout" element={<Checkout/>}/>
      <Route path="/prime" element={<Prime/>}/>
      <Route path="/profile" element={<Profile/>}/>
    </Routes>
    
    </div>
  );
}

export default App;
