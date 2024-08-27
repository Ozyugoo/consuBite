/* eslint-disable react/prop-types */

function Button({ children, variant, className, onClick }) {
  const generalStyles =
    "px-[24px] py-[12px] rounded-[24px] text-sm font-semibold";

  const variants = {
    primary:
      "bg-custom-red text-custom-white hover:bg-custom-redHover focus:bg-custom-redFocus",
    secondary:
      "border border-custom-red text-custom-red hover:bg-secondary-hover focus:bg-secondary-focus",
  };

  const buttonStyle = `${generalStyles} ${variants[variant]} ${className}`;

  return (
    <button className={buttonStyle} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
