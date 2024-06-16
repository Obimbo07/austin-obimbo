import React from 'react';
import '../css/partners.css';

const images = [
  { id: 1, company: 'coursera-logo.png' },
  { id: 2, company: 'turing.png' },
  { id: 3, company: 'microverse-logo.png' },
];

const Partners = () => {
  return (
    <div className="partner-container">
      <h2 className="text-lg font-bold text-center partner-title">Vetted and Certified</h2>
      <div className="w-full flex flex-wrap justify-around items-center mt-4">
        {images.map((img) => (
          <img
            className="h-20 w-30 partner-logo m-4"
            src={img.company}
            key={img.id}
            alt="company-that-got-austin-experienced"
          />
        ))}
      </div>
    </div>
  );
};

export default Partners;
