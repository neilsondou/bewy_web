import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, className, ...props }) => {
  const baseStyle = "relative px-8 py-4 font-mono font-bold text-sm uppercase tracking-widest transition-all duration-200 border-2 active:translate-y-1";
  
  const styles = {
    primary: "bg-white text-black border-white hover:bg-black hover:text-white",
    secondary: "bg-black text-white border-white hover:bg-white hover:text-black"
  };

  return (
    <button 
      className={`${baseStyle} ${styles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};