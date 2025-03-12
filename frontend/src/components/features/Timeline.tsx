import React from 'react';

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

interface TimelineProps {
  events: TimelineEvent[];
}

export const Timeline: React.FC<TimelineProps> = ({ events }) => {
  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-4 sm:left-1/2 h-full w-0.5 bg-gray-200"></div>
      
      <div className="space-y-12">
        {events.map((event, index) => (
          <div key={index} className={`relative flex items-start ${index % 2 === 0 ? 'sm:flex-row-reverse' : ''}`}>
            <div className="flex flex-col sm:w-1/2 pr-8 sm:pl-8 sm:pr-0">
              <span className="text-lg font-bold text-primary-900">{event.year}</span>
              <h3 className="text-xl font-semibold text-primary-800 mt-1">{event.title}</h3>
              <p className="text-primary-600 mt-2">{event.description}</p>
            </div>
            {/* Circle marker */}
            <div className="absolute left-4 sm:left-1/2 w-2 h-2 bg-primary-500 rounded-full transform -translate-x-1/2 mt-1.5"></div>
          </div>
        ))}
      </div>
    </div>
  );
}; 