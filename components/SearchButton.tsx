import Image from 'next/image'
import { ButtonHTMLAttributes } from 'react'

interface SearchButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export function SearchButton({ className }: SearchButtonProps) {
  return (
    <button type="submit" className={`z-10 -ml-3 ${className ?? ''}`}>
      <Image
        src="/magnifying-glass.svg"
        alt="magnifying glass"
        width={40}
        height={40}
        className="object-contain"
      />
    </button>
  )
}
