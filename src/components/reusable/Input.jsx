"use client"

const Input = ({label, type, name, value, onChange}) => {
  return (
    <div className="mb-4">
        <label className="block text-sm font-medium mb-1" htmlFor={name}>
            {label}
        </label>
        <input
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder={label}
        />
    </div>
  )
}

export default Input;