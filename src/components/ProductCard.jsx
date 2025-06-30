import React from 'react';

export default function ProductCard({ image, alt, name, types, onMoreInfo }) {
  return (
    <div className='card-item swiper-slide'>
      <img className='product-image' src={image} alt={alt} />
      <h2 className='product-name'>{name}</h2>
      <p className='product-types'>
        {types.map((type, idx) => 
          <span key={idx}>
            <img src={type.icon} alt={type.alt} />{type.label}{idx < types.lenght - 1 ? ' / ' : ''}
          </span>
        )}
      </p>
      <button className='more-info-btn' onClick={onMoreInfo}>Mas información</button>
    </div>
  );
}