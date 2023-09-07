import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';

interface PortalProps {
  selector: string;
  children: React.ReactNode;
}

const Portal: React.FC<PortalProps> = ({ children, selector }) => {
  const element = React.useMemo(() => document.createElement('div'), []);

  useEffect(() => {
    const target = document.querySelector(selector);
    if (!target) return;

    target.appendChild(element);
    return () => {
      target.removeChild(element);
    };
  }, [selector, element]);

  console.log('Portal rendering', { selector }); // Log here
  return ReactDOM.createPortal(children, element);
};

export default Portal;

