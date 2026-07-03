import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  as?: 'div' | 'article' | 'li';
}

export default function Card({ children, className = '', onClick, as: Tag = 'div' }: CardProps) {
  if (onClick) {
    return (
      <button
        type="button"
        onClick={onClick}
        className={`text-left bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-200 ${className}`}
      >
        {children}
      </button>
    );
  }

  return (
    <Tag className={`bg-white rounded-xl border border-gray-100 shadow-sm ${className}`}>
      {children}
    </Tag>
  );
}
