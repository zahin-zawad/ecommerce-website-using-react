import React from 'react'
import './Header.css'
import AmazonLogo from'./assets/amazon_PNG11.png'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function Header() {
  return (
    <div className='header'>
        <img src= {AmazonLogo} alt="amazon header logo" className='header-logo' />
        <div className="header-search">
            <input type="text" className='HeaderInputSearch' />
            <SearchIcon className="header-SearchIcon"></SearchIcon>
        </div>
        <div className="header-nav">
            <div className="header-option">
                <span className="header-optionLineOne">Hello Guest</span>
                <span className="header-optionLineTwo">Sign In</span>
            </div>
            <div className="header-option">
                <span className="header-optionLineOne">Returns</span>
                <span className="header-optionLineTwo">& Orders</span>
            </div>
            <div className="header-option">
                <span className="header-optionLineOne">Your</span>
                <span className="header-optionLineTwo">Prime</span>
            </div>

            <div className="shoppingCart">
                <ShoppingCartIcon />
                <span className="header-optionLineTwo basketCount">0</span>
            </div>
            

        </div>
    </div>
    
  )
}

export default Header