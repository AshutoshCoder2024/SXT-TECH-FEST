import { useEffect, useState } from 'react';

interface CountdownProps {
  targetDate: Date;
}

const Countdown = ({ targetDate }: CountdownProps) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const timeUnits = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds }
  ];

  return (
    <div className="grid grid-cols-4 gap-4 md:gap-6 w-full max-w-2xl mx-auto py-6">
      {timeUnits.map(({ label, value }) => (
        <div 
          key={label}
          className="cosmic-glass flex flex-col items-center justify-center p-2 md:p-4 rounded-lg border border-border/20 backdrop-blur-sm hover:border-border/40 transition-all duration-300"
        >
          <span className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            {value.toString().padStart(2, '0')}
          </span>
          <span className="text-xs md:text-sm text-muted-foreground mt-1">
            {label}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Countdown;
