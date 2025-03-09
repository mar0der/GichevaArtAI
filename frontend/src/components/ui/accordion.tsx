import React, { createContext, useContext, useState } from 'react';

interface AccordionContextType {
  value: string | null;
  onValueChange: (value: string | null) => void;
}

const AccordionContext = createContext<AccordionContextType | undefined>(undefined);

function useAccordion() {
  const context = useContext(AccordionContext);
  if (!context) {
    throw new Error('Accordion components must be used within an Accordion provider');
  }
  return context;
}

// Context for AccordionItem
interface AccordionItemContextType {
  value: string;
}

const AccordionItemContext = createContext<AccordionItemContextType | undefined>(undefined);

interface AccordionProps {
  type: 'single' | 'multiple';
  collapsible?: boolean;
  defaultValue?: string | string[];
  value?: string | string[];
  onValueChange?: (value: string | string[]) => void;
  children: React.ReactNode;
  className?: string;
}

export const Accordion: React.FC<AccordionProps> = ({
  type = 'single',
  collapsible = false,
  defaultValue,
  value,
  onValueChange,
  children,
  className = '',
}) => {
  const [accordionValue, setAccordionValue] = useState<string | null>(
    type === 'single' ? (defaultValue as string) || null : null
  );
  
  const contextValue = {
    value: value !== undefined ? (value as string) : accordionValue,
    onValueChange: (newValue: string | null) => {
      if (type === 'single') {
        if (!collapsible && newValue === null) {
          return;
        }
        setAccordionValue(newValue);
        onValueChange?.(newValue as string);
      }
    },
  };
  
  return (
    <AccordionContext.Provider value={contextValue}>
      <div className={`space-y-1 ${className}`}>
        {children}
      </div>
    </AccordionContext.Provider>
  );
};

interface AccordionItemProps {
  value: string;
  children: React.ReactNode;
  className?: string;
}

export const AccordionItem: React.FC<AccordionItemProps> = ({ value, children, className = '' }) => {
  return (
    <AccordionItemContext.Provider value={{ value }}>
      <div 
        data-value={value} 
        className={`border-b border-gray-200 ${className}`}
      >
        {children}
      </div>
    </AccordionItemContext.Provider>
  );
};

interface AccordionTriggerProps {
  children: React.ReactNode;
  className?: string;
}

export const AccordionTrigger: React.FC<AccordionTriggerProps> = ({ children, className = '' }) => {
  const { value, onValueChange } = useAccordion();
  const accordionItem = useContext(AccordionItemContext);
  
  if (!accordionItem) {
    throw new Error('AccordionTrigger must be used within an AccordionItem');
  }
  
  const isOpen = value === accordionItem.value;
  
  const handleClick = () => {
    onValueChange(isOpen ? null : accordionItem.value);
  };
  
  return (
    <button
      type="button"
      onClick={handleClick}
      className={`flex w-full items-center justify-between py-4 font-medium text-gray-900 transition-all ${className}`}
      data-state={isOpen ? 'open' : 'closed'}
    >
      {children}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`h-4 w-4 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 transform' : ''}`}
      >
        <polyline points="6 9 12 15 18 9"></polyline>
      </svg>
    </button>
  );
};

interface AccordionContentProps {
  children: React.ReactNode;
  className?: string;
}

export const AccordionContent: React.FC<AccordionContentProps> = ({ children, className = '' }) => {
  const { value } = useAccordion();
  const accordionItem = useContext(AccordionItemContext);
  
  if (!accordionItem) {
    throw new Error('AccordionContent must be used within an AccordionItem');
  }
  
  const isOpen = value === accordionItem.value;
  
  return isOpen ? (
    <div
      data-state={isOpen ? 'open' : 'closed'}
      className={`overflow-hidden text-gray-700 ${className}`}
    >
      <div className="pb-4 pt-0">{children}</div>
    </div>
  ) : null;
}; 