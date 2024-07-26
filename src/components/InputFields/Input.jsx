/* eslint-disable react/prop-types */

function Input({
  label,
  type = "text",
  value,
  onChange,
  className,
  placeholder,
  width = "w-full",
}) {
  return (
    <div className={`flex flex-col gap-[10px] font-poppins ${className}`}>
      <label className={`text-sm font-normal text-custom-black`}>{label}</label>
      <div className={`relative ${width}`}>
        <input
          className={` placeholder-custom-greyText border border-custom-blackBorder rounded-[20px] px-[16px] text-sm font-normal text-custom-black ${width} h-[44px] hover:border-custom-greyDark  focus:border-custom-black `}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />
      </div>
    </div>
  );
}

export default Input;
