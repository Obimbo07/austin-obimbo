import React, { useState, useEffect } from 'react';
import { Progress } from "@/components/ui/progress";

const Quote = () => {

  const quotes = [
    "Believe you can and you're halfway there.",
    "Act as if what you do makes a difference. It does.",
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
    "Do not wait to strike till the iron is hot, but make it hot by striking.",
    "I believe in the value of learning through practical application and am dedicated to consistently refining my technological skills"
  ];

  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const [progressValue, setProgressValue] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgressValue((prev) => {
        if (prev >= 100) {
          // Reset progress and move to the next quote
          setCurrentQuoteIndex((index) => (index + 1) % quotes.length);
          return 0;
        }
        return prev + 10; // Increment progress
      });
    }, 1000); 

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [quotes.length]);

  return (
    <div className='w-fit' style={{ textAlign: "center" }}>
      <h2 className='font-bold'>{quotes[currentQuoteIndex]}</h2>
      <Progress value={progressValue} />
    </div>
  );
};

export default Quote;
