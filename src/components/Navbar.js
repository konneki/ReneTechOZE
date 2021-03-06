import React from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='navbar-container'>
        <svg
          className='logo'
          xmlns='http://www.w3.org/2000/svg'
          width='14.915'
          height='32.784'
          viewBox='0 0 14.915 32.784'
          href='/'
        >
          <path
            id='Path_648'
            data-name='Path 648'
            className='logo_path'
            d='M214.679,52.638a.354.354,0,0,0-.03-.438c-2.763-3.015-3.338-5.394-2.9-7.325.463-2.046,2.146-3.685,3.993-5.171a37.091,37.091,0,0,0,3.068-2.567,3.546,3.546,0,0,0,1.257-2.276.975.975,0,0,1,1.707-.611c4.786,5.458,5.776,11.894,3.483,15.66-1.522,2.5-4.465,3.988-8.839,3.317a.353.353,0,0,0-.361.176c-.268.477-.57,1.014-.876,1.55-.294.517-.59,1.033-.857,1.493l3.389-.335a.959.959,0,0,1,.912,1.46l-6.283,8.958a.363.363,0,1,1-.616-.384l4.36-7.929-3.479.378a.985.985,0,0,1-.937-1.5s1.012-1.533,2.046-3.054C214.048,53.556,214.38,53.072,214.679,52.638Zm2.6-1.432a.12.12,0,0,0,.094.178c3.019.3,5.117-.682,6.216-2.487,1.774-2.915,1.015-7.636-2.164-11.968a6.568,6.568,0,0,1-.677.971,27.3,27.3,0,0,1-3.786,3.324c-1.487,1.2-2.941,2.435-3.314,4.082-.329,1.453.255,3.143,2.229,5.351a.12.12,0,0,0,.1.04.121.121,0,0,0,.092-.051c.2-.289.5-.735.843-1.275a5.17,5.17,0,0,1-.548-.991,3.453,3.453,0,0,1-.3-1.3.377.377,0,0,1,.752-.071,2.587,2.587,0,0,0,.422.912,3.867,3.867,0,0,0,.31.4q.145-.253.29-.517a16.173,16.173,0,0,0,1.052-2.275.363.363,0,0,1,.7.207,17.01,17.01,0,0,1-.857,2.5q-.093.221-.188.436c.146,0,.31-.01.482-.026a4.284,4.284,0,0,0,1.039-.194.378.378,0,0,1,.325.683,4.757,4.757,0,0,1-.94.408,8.2,8.2,0,0,1-1.465.333h0C217.708,50.414,217.462,50.876,217.281,51.206Z'
            transform='translate(-211.522 -33.918)'
          />
        </svg>
        <ul className='navbar-list'>
          <li className='navbar-item'>
            <a href='/'>Home</a>
          </li>
          <li className='navbar-item'>
            <a href='/'>Usługi</a>
          </li>
          <li className='navbar-item'>
            <a href='/'>Realizacje</a>
          </li>
          <li className='navbar-item'>
            <a href='/'>Dofinansowanie</a>
          </li>
          <li className='navbar-item'>
            <a href='/'>O nas</a>
          </li>
        </ul>
      </div>
      <div className='button-hollow'>
        <a href='/'>Kontakt</a>
      </div>
      <div className='burger-menu'>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;
