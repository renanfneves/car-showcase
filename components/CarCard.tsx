'use client'

import Image from 'next/image'
import { CustomButton } from '@/components/CustomButton'
import { calculateCarRent } from '@/utils/calculate-car-rent'
import { useState } from 'react'
import CarDetails from '@/components/CarDetails'
import { generateCarImageUrl } from '@/utils/generate-car-image-url'

interface CarCardProps {
  car: AppCar
}

export function CarCard({ car }: CarCardProps) {
  const { city_mpg, year, make, model, transmission, drive } = car

  const [isOpen, setIsOpen] = useState(false)

  const carRent = calculateCarRent(city_mpg, year)

  return (
    <div className="car-card group">
      <h2>
        {make} {model}
      </h2>
      <p className="mt-6 flex text-3xl font-extrabold">
        <span className="self-start text-sm font-semibold">$</span>
        {carRent}
        <span className="self-end text-sm font-medium">/day</span>
      </p>

      <div className="relative my-3 h-40 w-full object-contain">
        <Image
          src={generateCarImageUrl(car)}
          alt="car model"
          fill
          priority
          className="object-contain"
        />
      </div>

      <div className="relative mt-2 flex w-full">
        <div className="text-gray flex w-full justify-between group-hover:invisible">
          <div className="flex flex-col items-center justify-center gap-2">
            <Image
              src="/steering-wheel.svg"
              width={20}
              height={20}
              alt="steering wheel"
            />
            <p className="text-sm">
              {transmission === 'a' ? 'Automatic' : 'Manual'}
            </p>
          </div>
          <div className="car-card__icon">
            <Image src="/tire.svg" width={20} height={20} alt="seat" />
            <p className="car-card__icon-text">{drive.toUpperCase()}</p>
          </div>
          <div className="car-card__icon">
            <Image src="/gas.svg" width={20} height={20} alt="seat" />
            <p className="car-card__icon-text">{city_mpg} MPG</p>
          </div>
        </div>

        <div className="car-card__btn-container">
          <CustomButton
            title="View More"
            containerStyles="w-full py-4 rounded-full bg-primary-blue"
            textStyles="text-white text-sm leading-4 font-bold"
            rightIcon="/right-arrow.svg"
            onClick={() => setIsOpen(true)}
          />
        </div>
      </div>

      <CarDetails
        isOpen={isOpen}
        closeModal={() => setIsOpen(false)}
        car={car}
      />
    </div>
  )
}
