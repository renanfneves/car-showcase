'use client'

import Image from 'next/image'
import { ButtonHTMLAttributes } from 'react'

interface CustomButtomProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string
  containerStyles?: string
  textStyles?: string
  rightIcon?: string
}

export function CustomButton({
  title,
  containerStyles,
  textStyles,
  rightIcon,
  ...props
}: CustomButtomProps) {
  return (
    <button {...props} className={`custom-btn ${containerStyles ?? ''}`}>
      <span className={`flex-1 ${textStyles ?? ''}`}>{title}</span>
      {rightIcon && (
        <div className="relative h-6 w-6">
          <Image
            src={rightIcon}
            alt="right icon"
            fill
            className="object-contain"
          />
        </div>
      )}
    </button>
  )
}
