import React from 'react';
import '../styles/Services.css';
import SingleService from './SingleService';
import icon1 from '../images/icon1.png';
import icon2 from '../images/icon2.png';
import icon3 from '../images/icon3.png';
import icon4 from '../images/icon4.png';

const lorem =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';

const Services = () => {
  return (
    <div className='services-main'>
      <h2 className='services-heading'>Usługi</h2>
      <div className='grid-container'>
        <SingleService image={icon1} title='Design' description={lorem} />
        <SingleService
          image={icon2}
          title='Tworzenie połączeń'
          description={lorem}
        />
        <SingleService
          image={icon3}
          title='Pozycjonowanie'
          description={lorem}
        />
        <SingleService
          image={icon4}
          title='Stworzone dla Ciebie'
          description={lorem}
        />
      </div>
    </div>
  );
};

export default Services;
