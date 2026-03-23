import React, { useState } from "react";
import { EyeIcon, EyeOffIcon } from "lucide-react";

const TextInput = ({
  placeholder,
  name,
  type,
  label,
  icon,
  value,
  onChange,
  required = true,
  error = "",
}: {
  placeholder?: string;
  name?: string;
  type: string;
  label?: string;
  icon?: React.ReactNode;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  error?: string;
}) => {
    const [showPassword, setShowPassword] = useState(false);
    
  return (
    <div className="flex flex-col gap-2 my-2">
      {label && <label
        htmlFor={name}
        className="text-sm font-medium text-gray-700 block"
      >
        {label} {required && <span className="text-red-500">*</span>}
      </label>}
      
      <div className="relative">
        <input
          name={name}
          id={name}
          type={showPassword ? "text" : type}
          placeholder={placeholder}
          className={`w-full border border-slate-300 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:outline-none ${error ? "border-red-500" : "focus:ring-primary"}`}
          value={value}
          onChange={onChange}
          required={required}
        />

        { type !== "password" && icon && (
          <div className="absolute right-4 top-1/2 -translate-y-1/2 text-primary">
            {icon}
          </div>
        )}

        {type === "password" && (
          <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 text-primary">
            {showPassword ? <EyeIcon /> : <EyeOffIcon />}
          </button>
        )}

      </div>
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
};

export default TextInput;
