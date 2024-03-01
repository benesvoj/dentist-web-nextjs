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
        return 'bg-blue-100 text-blue-900 hover:bg-blue-200'
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
      className={`${variant ? variantSchema : 'bg-blue-100 text-blue-900 hover:bg-blue-200'} inline-flex justify-center rounded-md border border-transparent px-4 py-2 text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2`}
    >
      {label}
    </button>
  )
}