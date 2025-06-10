import { type ChangeEvent } from 'react'

interface LabelledInputType {
    label: string
    placeholder: string
    onChange: (e: ChangeEvent<HTMLInputElement>) => void // what does this do?
    type?: string
}

const LabelledInput = ({label, placeholder, type, onChange}: LabelledInputType) => {
  return (
    <div>
        <label className="block mb-2 text-md font-semibold text-black mt-4">{label}</label>
        <input onChange={onChange} type={type || "text"} id="first_name" className="bg-white border border-gray-400 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3" placeholder={placeholder} required />
    </div>
  )
}

export default LabelledInput
