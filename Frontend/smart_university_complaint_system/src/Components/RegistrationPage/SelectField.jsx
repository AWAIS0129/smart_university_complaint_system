const inputClass =
  'w-full rounded-md border border-gray-300 bg-white px-3 py-2.5 text-base focus:border-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-800/30'

const SelectField = ({ label, name, value, onChange, children, className = '', ...props }) => (
  <div className={`flex flex-col gap-1.5 ${className}`}>
    <label className="text-sm font-semibold" htmlFor={name}>
      {label}
    </label>
    <select
      className={inputClass}
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      {...props}
    >
      {children}
    </select>
  </div>
)

export default SelectField