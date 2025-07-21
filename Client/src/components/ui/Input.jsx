import React, { forwardRef, useState } from "react";
import clsx from "clsx";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { BsExclamationCircle } from "react-icons/bs";

const Input = forwardRef(({
  label,
  name,
  placeholder = "",
  required = false,
  type = "text",
  icon = "",
  value,
  readonly = false,
  onChange = () => {},
  errorMessage = ""
}, ref) => {
  const [showPassWord, setShowPassWord] = useState(false);

  const inputType = type !== "password" ? type : showPassWord ? "text" : "password";

  return (
    <div className="">
      {/* Si pas d'icône, afficher le label */}
      {!icon && (
        <label
          htmlFor={name}
          className="block mb-2 text-base text-body text-secondary"
        >
          {label} :
        </label>
      )}

      <div className="relative">
        <input
          ref={ref}
          autoComplete="off"
          type={inputType}
          id={name}
          className={clsx(
            {
              "ps-12": icon !== "",
            },
            "bg-background border border-gray-300 text-primary text-sm rounded focus:ring-gray-300/50 focus:border-gray-300/50 focus:outline-1  block w-full p-2"
          )}
          name={name}
          placeholder={icon !== "" ? label : placeholder}
          required={required}
          value={value}
          onChange={onChange}
          readOnly={readonly}
        />

        {icon !== "" && (
          <div className="absolute flex justify-center items-center w-10 top-0 left-0 text-xl text-secondary border-r border-gray-300 h-full">
            {icon}
          </div>
        )}

        {type === "password" && (
          <div className="absolute z-20 flex justify-center items-center w-10 top-0 right-0 text-xl text-secondary border-r border-gray-300 h-full">
            <span
              className="cursor-pointer"
              onClick={() => setShowPassWord((v) => !v)}
            >
              {!showPassWord ? <FaEye /> : <FaEyeSlash />}
            </span>
          </div>
        )}
      </div>

      {errorMessage && (
        <div className="text-red-500 px-1 p-[2px] mt-1 rounded text-sm bg-red-500/10">
          <span>
            <BsExclamationCircle className="inline-block mr-1" size={18} />
          </span>
          <span>{errorMessage}</span>
        </div>
      )}
    </div>
  );
});

export default Input;
