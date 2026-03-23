import React from "react";

const SelectInput = ({
  options,
  required = true,
  label,
  name,
  error,
}: {
  options: { value: string; label: string }[];
  required?: boolean;
  label?: string;
  name: string;
  error?: string;
}) => {
  return (
    <div className="flex flex-col gap-2 my-2">
      {label && (
        <label
          htmlFor={name}
          className="text-sm font-medium text-gray-700 block"
        >
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}
      <select
        name={name}
        id={name}
        className={`w-full cursor-pointer border border-slate-300 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:outline-none ${error ? "border-red-500" : "focus:ring-primary"}`}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
};

export default SelectInput;
