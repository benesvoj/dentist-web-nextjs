import React from 'react'

type ButtonTypeEnum = 'button' | 'submit' | 'reset';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  type: ButtonTypeEnum;
  variant?: 'primary' | 'secondary';
}

export const Button = ({variant, type, label, ...rest }: ButtonProps) => {

  const variantSchema = () => {
    switch (variant) {
      case 'primary':
        return 'bg-blue-500 text-white'
      case 'secondary':
        return 'bg-gray-500 text-white'
      default:
        return 'bg-blue-500 text-white'
    }

  }

  return (
    <button
      {...rest}
      type={type}
      className={`${variant ? variantSchema : 'bg-blue-500 text-white'} p-2 rounded-md`}
    >
      {label}
    </button>
  )
}