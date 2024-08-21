function GoogleButton({ children, className, onClick }) {
  return (
    <button
      className={`bg-custom-light border border-custom-blackBorder text-custom-black hover:bg-custom-greyLight focus:bg-[#d9d9d9] py-[12px] px-6 font-normal text-sm rounded-[24px] flex flex-row gap-[10px] place-items-center justify-center ${className}`}
      onClick={onClick}
    >
      <img src="/icons/google icon.svg" alt="google icon"></img>
      {children}
    </button>
  );
}

export default GoogleButton;
