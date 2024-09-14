import { useState } from "react";

const InputFiled = ({
  label,
  defaultValue,
  name,
  type,
  required,
  placeholder,
  icon,
  openIcon,
  closeIcon,
  disabled,
}) => {
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      <label className="text-[#444] text-sm mb-2 block">{label}</label>
      <div className="relative flex items-center">
        <input
          disabled={disabled}
          name={name}
          defaultValue={defaultValue}
          type={(toggle && "text") || type}
          required={required}
          className="w-full text-base text-secondary-content border border-[#E8E8E8] px-4 py-3 rounded-lg outline-secondary"
          placeholder={placeholder}
        />

        {/* icon */}
        {
          <span className="text-xl absolute right-4 text-[#A2A2A2]">
            {(icon && icon) || (
              <span
                onClick={() => setToggle(!toggle)}
                className="cursor-pointer"
              >
                {toggle ? openIcon : closeIcon}
              </span>
            )}
          </span>
        }
      </div>
    </div>
  );
};

export default InputFiled;
