import React from 'react'
import { Link } from 'react-router-dom';

function TopMenu() {
  return (
    <div id = 'topMenu'>
        <Link to="/" style={{ textDecoration: 'none' }}>
            <div id = 'smallLogo'>
                KPZ lab5
            </div>
        </Link>

        <div id = 'topMenuButtonsSection'>
        <Link to="/study/cars" style={{ textDecoration: 'none' }}>
            <div class = 'topMenuButton'>
                Cars
            </div>
        </Link>
        <Link to="/study/sellers" style={{ textDecoration: 'none' }}>
            <div class = 'topMenuButton'>
                Sellers
            </div>
        </Link>
        </div>
    </div>
  )
}

export default TopMenu
