/* eslint-disable react/prop-types */

function Button({ children, className }) {
  return (
    <button
      className={`font-bold rounded-2xl ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
