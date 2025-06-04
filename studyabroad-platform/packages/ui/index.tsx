import React from 'react';

export const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({ children, ...props }) => (
  <button className="px-4 py-2 bg-indigo-500 text-white rounded" {...props}>
    {children}
  </button>
);
