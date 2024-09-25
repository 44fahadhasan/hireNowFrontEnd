const TextArea = ({
  defaultValue,
  label,
  required,
  name,
  rows,
  placeholder,
}) => {
  return (
    <div className="space-y-1 mt-3 text-base">
      {label && (
        <label className="text-sm px-1 text-base-content font-medium">
          {label}
        </label>
      )}
      <textarea
        defaultValue={defaultValue}
        required={required}
        name={name}
        rows={rows}
        placeholder={placeholder}
        className="w-full px-1 py-2 rounded-lg border border-[#E9E9E9] text-secondary-content outline-none focus:border-secondary bg-base-100"
      />
    </div>
  );
};

export default TextArea;
