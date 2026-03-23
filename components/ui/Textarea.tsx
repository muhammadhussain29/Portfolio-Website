import React from "react";

const Textarea = ({
  label,
  name,
  onChange,
  rows = 4,
  placeholder = "",
  error = "",
  required = true,
}: {
  label: string;
  name: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  rows?: number;
  placeholder?: string;
  error?: string;
  required?: boolean;
}) => {
  return (
    <div className="flex flex-col gap-2 my-2 w-full">
      {label && (
        <label
          htmlFor={name}
          className="text-sm font-medium text-gray-700 block"
        >
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}
      <textarea
        name={name}
        onChange={onChange}
        className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-primary focus:outline-none"
        rows={rows}
        placeholder={placeholder}
      />
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
};

export default Textarea;
