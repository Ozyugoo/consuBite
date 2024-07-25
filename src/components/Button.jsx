/* eslint-disable react/prop-types */

function Button({ children, variant, className, onClick }) {
  const generalStyles =
    "px-[24px] py-[12px] rounded-[24px] text-sm font-semibold";

  const variants = {
    primary: "bg-custom-red text-[#fff] hover:bg-[#FF2F30] focus:bg-[#F16F73]",
    secondary:
      "border border-custom-red text-custom-red hover:bg-[#FFCDD0] focus:bg-[#FFEEEF]",
  };

  const buttonStyle = `${generalStyles} ${variants[variant]} ${className}`;

  return (
    <button className={buttonStyle} onClick={onclick}>
      {children}
    </button>
  );
}

export default Button;
