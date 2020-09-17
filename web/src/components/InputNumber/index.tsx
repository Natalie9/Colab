import React, { InputHTMLAttributes } from 'react'
import InputMask from 'react-input-mask'
import './styles.css'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  label: string
}

const InputNumber: React.FC<InputProps> = ({ label, name, ...rest }) => {
  return (
    <div className='input-block'>
      <label htmlFor={name}>{label}</label>
      <InputMask id={name} {...rest} mask='(99)99999-9999' maskChar=' ' />
    </div>
  )
}
export default InputNumber
