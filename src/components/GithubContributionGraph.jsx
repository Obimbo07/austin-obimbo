// GitHubCalendar.jsx
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
    <div className="flex flex-col items-center my-8 pw-fit">
     <h1 className='font-extrabold  decoration-sky-500/30 text-4xl pl-4 m-10 underline underline-offset-8 text-blue w-full font-mono text-start antialiased'>Github contibution calendar</h1>
      <div className="m-8">
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
        blockMargin={4}
        blockRadius={2}
        blockSize={12}
        fontSize={14}
        showWeekdayLabels={true}
      />
    </div>
  );
};

export default GitHubContributionGraph;
