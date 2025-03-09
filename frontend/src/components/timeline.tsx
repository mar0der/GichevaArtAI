import React from 'react';

interface TimelineProps {
  children: React.ReactNode;
  className?: string;
}

export const Timeline: React.FC<TimelineProps> = ({ children, className = '' }) => {
  return (
    <div className={`relative space-y-6 before:absolute before:inset-0 before:left-5 before:h-full before:w-0.5 before:bg-gray-200 ${className}`}>
      {children}
    </div>
  );
};

interface TimelineItemProps {
  date: string;
  children: React.ReactNode;
  className?: string;
}

export const TimelineItem: React.FC<TimelineItemProps> = ({ date, children, className = '' }) => {
  return (
    <div className={`relative pl-10 ${className}`}>
      <div className="absolute left-0 flex h-10 w-10 items-center justify-center rounded-full bg-white ring-1 ring-gray-200">
        <div className="h-3 w-3 rounded-full bg-gray-400"></div>
      </div>
      <div className="font-medium text-gray-900 mb-1">{date}</div>
      {children}
    </div>
  );
}; 