import React from 'react'
import { Link } from 'react-router-dom';

function StartPage() {
  return (
      <div id = 'startSection'>
        <div id = 'hugeWebLogo'>
            KPZ lab5
        </div>
        <div id = 'hugeMenu'>
            <Link to="/study/cars" style={{ textDecoration: 'none' }}>
                <div class = 'hugeMenuItem'>
                    <div class = 'hugeMenuItem-text'>Cars</div>
                </div>
            </Link>
            <Link to="/study/Sellers" style={{ textDecoration: 'none' }}>
                <div class = 'hugeMenuItem'>
                    <div class = 'hugeMenuItem-text'>Sellers</div>
                </div>
            </Link>
            
        </div>
      </div>
  )
}

export default StartPage
