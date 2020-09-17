import React, { SelectHTMLAttributes } from 'react'
import Select from 'react-select'
import './styles.css'

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  name: string
  label: string
  options: Array<{
    value: string
    label: string
  }>
}

const SelectIN: React.FC<SelectProps> = ({ label, name, options, ...rest }) => {
  return (
    <div className='select-block'>
      <label htmlFor={name}>{label}</label>
      <Select
        options={options}
        id={name}
        {...rest}
        defaultValue={[options[0]]}
      />
    </div>
  )
}
export default SelectIN
