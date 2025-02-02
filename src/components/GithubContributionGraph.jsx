import React, { useState } from 'react';
import GitHubCalendar from 'react-github-calendar';

const GitHubContributionGraph = () => {
  const username = 'Obimbo07';
  const currentYear = new Date().getFullYear();
  const [year, setYear] = useState(currentYear);

  const handleYearChange = (newYear) => {
    setYear(newYear);
  };

  return (
    <div className="flex flex-col items-center px-2 my-2 text-black  font-semibold bg-white rounded-3xl">
     <span className='bg-gray-900 h-2 w-1/2 mb-4 decoration-sky-500/30 underline-offset-8'></span>
     <h1 className='font-bold text-xl text-center w-fit p-2 font-mono antialiased outline uppercase'>Github contribution calendar</h1>
      <div className="my-4 gap-2 flex">
        <button
          className="bg-green-800 hover:bg-green-800 hover:text-black text-white text-sm p-2 rounded-full "
          onClick={() => handleYearChange(currentYear)}
        >
          Current Year
        </button>
        <button
          className="bg-green-800 hover:bg-green-800 hover:text-black text-white text-sm p-2 rounded-full"
          onClick={() => handleYearChange(currentYear - 1)}
        >
          Previous Year
        </button>
        <button
          className="bg-green-800 hover:bg-green-800 hover:text-black text-white text-sm p-2 rounded-full"
          onClick={() => handleYearChange('last')}
        >
          Last Full Year
        </button>
      </div>
      <GitHubCalendar
        username={username}
        year={year}
        blockMargin={2}
        blockRadius={2}
        blockSize={15}
        fontSize={15}
        showWeekdayLabels={true}
        colorScheme='light'
        
      />
    </div>
  );
};

export default GitHubContributionGraph;
