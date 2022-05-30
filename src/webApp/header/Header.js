import React from 'react';
import './header.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartSharpIcon from '@mui/icons-material/ShoppingCartSharp';
import { Link } from 'react-router-dom';
import { useStateValue } from '../../StateManagement/StateProvider';

function Header() {
const [basket,]=useStateValue();

  return (
    <div className='header'>
    <div className="header__main">
<Link to='/' className="header__link">

    <div className='header__logo-div'>
    <img src='http://pngimg.com/uploads/amazon/amazon_PNG11.png' alt="amazon-logo" className='header__logo'/>
    </div>
</Link>
<Link to='/profile' className="header__link">
        <div className='header__option'>
        <div className='small'>Deliver to Mukul</div>
        <div className='big'>Jodhpur 342008</div>
        </div>
</Link>
        <div className='header__search'>
            <input className='header__search-input'/>
            <SearchIcon sx={{backgroundColor:"#ff9900",color:"#000000", height: "45px", width: "45px",borderRadius:"5px",cursor:"pointer"}}/>
        </div>
        <div className='header__option'>
        <img src="https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg" alt='indian flag' style={{height:"25px",marginBottom:"10px"}}/>
        
        </div>
        <div className='header__option'>
        <div className='small'>Hello,mukul</div>
        <div className='big'>Amount & List</div>
        </div>
        <div className='header__option'>
            <div className='small'>Return</div>
            <div className='big'   >& Order</div>
        </div>
        <Link to="/checkout" className='header__link'>
        <div className='header__basket'>
        <ShoppingCartSharpIcon sx={{fontSize:"50px",mt:"5px",cursor:"pointer"}}/>
        <div className='header__basket-size big'>{basket.length}</div>
        </div>
        </Link>
    </div>
    </div>
  )
}

export default Header