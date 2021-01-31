import React from 'react';
import '../styles/SingleService.css';

const SingleService = (props) => {
  return (
    <div className='wrapper'>
      <div className='image-container'>
        <img className='image-container-item' src={props.image} alt='icon' />
      </div>
      <div className='text-wrapper'>
        <h3 className='text-wrapper-heading'>{props.title}</h3>
        <p className='text-wrapper-description'>{props.description}</p>
      </div>
      <div className='wrapper-button'>
        <div className='vertical'></div>
        <div className='horizontal'></div>
      </div>
    </div>
  );
};

export default SingleService;
