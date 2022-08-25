import React from 'react';


export default function Navbar() {
  return (
    <div className='navbarContainer'>

        <div className='linksDiv'>
            <p>Men</p>
            <p>Women</p>
            <p>Accessories</p>
        </div>

        <div className='menuDiv'>

            {/* MENU */}

        </div>

        <div className='logoDiv'>
            <p>Souled~Store</p>
            <div className='logoImageDiv'>
                <img src='/logoIdea1.png' alt="dss" />
            </div>
        </div>

        <div className='searchDiv'>
            
            <div className='searchBoxDiv'>
                <button  className="searchBtn">
                    <i class="fa-solid fa-magnifying-glass"></i>
                </button>
                <input type="text" id="searchInput" />
                <button className='cartBtnNav'>
                    <i class="fa-solid fa-bag-shopping"></i>
                </button>
            </div>

        </div>

    </div>
  )
}
