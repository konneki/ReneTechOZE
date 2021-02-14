import React from 'react';
import '../styles/Services.css';
import SingleService from './SingleService';
import icon1 from '../images/icon1.png';
import icon2 from '../images/icon2.png';
import icon3 from '../images/icon3.png';
import icon4 from '../images/icon4.png';

const services = {
  service1: {
    picture: icon4,
    title: 'Konsultacje',
    description:
      'Pomożemy Ci dobrać wszelkie komponenty instalacji, abyś był zadowolony zarówno z jej jakości jak i ceny.',
  },
  service2: {
    picture: icon3,
    title: 'Projekt',
    description:
      'Wykonamy odpowiednie pomiary i wizualizację instalacji oraz przedstawimy prognozy uzysku, abyś jeszcze przed montażem wiedział co instalujesz w swoim domu.',
  },
  service3: {
    picture: icon1,
    title: 'Wykonanie',
    description:
      'Kompleksowo wykonamy u Ciebie montaż: od zamówienia, poprzez instalację, na zgłoszeniu do zakładu energetycznego kończąc.',
  },
  service4: {
    picture: icon2,
    title: 'Wsparcie',
    description:
      'Udostępnimy Ci monitoring instalacji i sami będziemy nadzorować jej działanie, abyś był pewien, że pracuje ona niezawodnie i nieprzerwanie produkuje dla Ciebie zieloną energię.',
  },
};

const servicesArray = [];

for (const key in services) {
  servicesArray.push(services[key]);
}

console.log(servicesArray);

const Services = () => {
  return (
    <div className='services-main'>
      <h2 className='services-heading'>Usługi</h2>
      <div className='grid-container'>
        {servicesArray.map((item) => {
          return (
            <SingleService
              image={item.picture}
              title={item.title}
              description={item.description}
              key={item.title}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Services;
