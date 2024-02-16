'use client'

import "./style.css";

function Button({ variant, type, children, ...props }: ButtonProps) {
  return (
    <button
      type={type}
      className={
        variant
          ? `w-full flex justify-center text-center text-sm text-white font-bold rounded-xl p-4 ${variant} hover:bg-customDefault shadow-xs duration-500 hover:transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`
          : "w-full flex justify-center text-center text-sm text-white font-bold rounded-3xl p-4 bg-gray-100 hover:bg-customDefault shadow-xs hover:transition-colors duration-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      }
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
