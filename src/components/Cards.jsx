import React from 'react';

const Cards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">  {/* Adjust grid layout for different screen sizes */}
      <div className="bg-white rounded-lg shadow-md p-4">
        <img src="image1.jpg" alt="Card 1" className="w-full h-40 rounded-t-lg object-cover" />
        <div className="flex justify-between items-center pt-4">
          <h3 className="text-lg font-semibold">Card Title 1</h3>
          <button className="text-blue-500 hover:text-blue-700">Learn More</button>
        </div>
        <p className="text-gray-600 pt-2">Card Description 1</p>
      </div>
      <div className="bg-white rounded-lg shadow-md p-4">
        {/* Repeat the same structure for the remaining cards, replacing content and images */}
        <img src="image2.jpg" alt="Card 2" className="w-full h-40 rounded-t-lg object-cover" />
        <div className="flex justify-between items-center pt-4">
          <h3 className="text-lg font-semibold">Card Title 2</h3>
          <button className="text-blue-500 hover:text-blue-700">Learn More</button>
        </div>
        <p className="text-gray-600 pt-2">Card Description 2</p>
      </div>
      <div className="bg-white rounded-lg shadow-md p-4">
        <img src="image3.jpg" alt="Card 3" className="w-full h-40 rounded-t-lg object-cover" />
        <div className="flex justify-between items-center pt-4">
          <h3 className="text-lg font-semibold">Card Title 3</h3>
          <button className="text-blue-500 hover:text-blue-700">Learn More</button>
        </div>
        <p className="text-gray-600 pt-2">Card Description 3</p>
      </div>
      <div className="bg-white rounded-lg shadow-md p-4">
        <img src="image4.jpg" alt="Card 4" className="w-full h-40 rounded-t-lg object-cover" />
        <div className="flex justify-between items-center pt-4">
          <h3 className="text-lg font-semibold">Card Title 4</h3>
          <button className="text-blue-500 hover:text-blue-700">Learn More</button>
        </div>
        <p className="text-gray-600 pt-2">Card Description 4</p>
      </div>
      <div className="bg-white rounded-lg shadow-md p-4">
        <img src="image5.jpg" alt="Card 5" className="w-full h-40 rounded-t-lg object-cover" />
        <div className="flex justify-between items-center pt-4">
          <h3 className="text-lg font-semibold">Card Title 5</h3>
          <button className="text-blue-500 hover:text-blue-700">Learn More</button>
        </div>
        <p className="text-gray-600 pt-2">Card Description 5</p>
      </div>
      <div className="bg-white rounded-lg shadow-md p-4">
        <img src="image6.jpg" alt="Card 6" className="w-full h-40 rounded-t-lg object-cover" />
        <div className="flex justify-between items-center pt-4">
          <h3 className="text-lg font-semibold">Card Title 6</h3>
          <button className="text-blue-500 hover:text-blue-700">Learn More</button>
        </div>
        <p className="text-gray-600 pt-2">Card Description 6</p>
      </div>
    </div>
  );
};

export default Cards;
