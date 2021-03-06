import React from 'react';
import '../styles/Header.css';
import template from '../images/template@2x.png';

const Header = () => {
  return (
    <div className='hero-container'>
      <header className='hero'>
        <div className='heading-container'>
          <h1 className='heading'>
            Pomagamy <span className='heading-special'>naszym klientom </span>
            oszczędzać
          </h1>
          <p className='subheading'>
            Zastanawiasz się nad instalacją fotowoltaiczną? Skontaktuj się z
            nami a rozwiejemy wszelkie wątpliwości.
          </p>
          <div className='button-fill'>
            <a href='/'>Kontakt z nami</a>
          </div>
        </div>
        <img className='heading-picture' src={template} alt='template' />
      </header>
      <div className='circle1'></div>
      <div className='circle2'></div>
    </div>
  );
};

export default Header;
