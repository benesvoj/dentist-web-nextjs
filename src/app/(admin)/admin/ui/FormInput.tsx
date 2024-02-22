'use client'
import {ChangeEvent, useState} from 'react'

type InputTypeEnum = 'text' | 'password' | 'email';

interface FormInputProps {
  label: string;
  type: InputTypeEnum;
}

export const FormInput = (props: FormInputProps) => {
  const [inputValue, setInputValue] = useState<string>('')

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  return(
    <div className='flex flex-col'>
      <label
        className='mt-2 text-sm text-gray-400'
        htmlFor={props.label}
      >{props.label.toUpperCase()}</label>
      <input
        className='p-2 border border-gray-300 rounded'
        type={props.type}
        value={inputValue}
        id={props.label}
        onChange={handleInputChange}
      />
    </div>
  )
}