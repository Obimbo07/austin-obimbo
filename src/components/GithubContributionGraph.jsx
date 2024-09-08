import React, { useState } from 'react';
import GitHubCalendar from 'react-github-calendar';

const GitHubContributionGraph = () => {
  const username = 'Obimbo07';
  const currentYear = new Date().getFullYear();
  const [year, setYear] = useState('last');

  const handleYearChange = (newYear) => {
    setYear(newYear);
  };

  return (
    <div className="flex flex-col items-center px-8 my-2 text-white">
     <span className='bg-gray-500 h-2 w-1/2 mb-4 decoration-sky-500/30 underline-offset-8'></span>
     <h1 className='font-extrabold text-4xl text-center w-fit p-2 font-mono antialiased outline'>Github contibution calendar</h1>
      <div className="mt-10">
        <button
          className="bg-blue-500 text-white p-2 rounded mr-2"
          onClick={() => handleYearChange(currentYear)}
        >
          Current Year
        </button>
        <button
          className="bg-blue-500 text-white p-2 rounded"
          onClick={() => handleYearChange(currentYear - 1)}
        >
          Previous Year
        </button>
        <button
          className="bg-blue-500 text-white p-2 rounded ml-2"
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
        blockSize={14}
        fontSize={14}
        showWeekdayLabels={true}
      />
    </div>
  );
};

export default GitHubContributionGraph;
