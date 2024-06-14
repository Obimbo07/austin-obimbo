import React from 'react'

const images = [
    {company: 'coursera-logo.png',},
    {company: 'turing.png',},
    {company: 'microverse-logo.png',},
    {company: 'coursera-logo.png',},
    
]
const Partners = () => {
  return (
    <>
        <h2 className='text-black-700 text-lg font-bold text-center bg-dark'>Vetted and Certified</h2>
    <div className='w-full flex flex-row justify-around'>
        {images.map((img) => (
            <img className="h-20 w-30" src={img.company} key={img.id} alt="company-that-got-austin-experienced" />
        ))}
    </div>
    </>
    
  )
}

export default Partners;