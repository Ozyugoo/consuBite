/* eslint-disable react/prop-types */

function Button({ children, className }) {
  return (
    <button className={`font-bold rounded-xl ${className}`}>{children}</button>
  );
}

export default Button;
