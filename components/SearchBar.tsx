'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { SearchManufacturer } from '@/components/SearchManufacturer'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { SearchButton } from '@/components/SearchButton'
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'
import { useEffect } from 'react'

const searchbarFormSchema = z
  .object({
    manufacturer: z.string(),
    model: z.string(),
  })
  .partial()
  .refine((data) => !!data.manufacturer || !!data.model, {
    path: ['manufacturer'],
    message: 'Either manufacturer or model should be filled in.',
  })

type SearchBarFormData = z.infer<typeof searchbarFormSchema>

export function SearchBar() {
  const router = useRouter()
  const pathname = usePathname()

  const handleSearch = (data: SearchBarFormData) => {
    updateSearchParams(data)
  }

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<SearchBarFormData>({
    resolver: zodResolver(searchbarFormSchema),
  })

  const handleSetManufacturerOnSelect = (data: string) => {
    setValue('manufacturer', data ?? '')
  }

  useEffect(() => {
    if (errors.manufacturer) {
      alert(errors.manufacturer.message)
    }
  }, [errors])

  const updateSearchParams = (data: SearchBarFormData) => {
    const searchParams = new URLSearchParams(window.location.search)
    const { model, manufacturer } = data

    if (model) {
      searchParams.set('model', model)
    } else {
      searchParams.delete('model')
    }

    if (manufacturer) {
      searchParams.set('manufacturer', manufacturer)
    } else {
      searchParams.delete('manufacturer')
    }
    const newRoute = `${pathname}?${searchParams.toString()}`

    router.push(newRoute, { scroll: false })
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit(handleSearch)}>
      <div className="searchbar__item">
        <SearchManufacturer
          {...register('manufacturer')}
          setManuFacturer={handleSetManufacturerOnSelect}
        />
        <SearchButton className="sm:hidden" />
      </div>
      <div className="searchbar__item">
        <Image
          src="/model-icon.png"
          width={25}
          height={25}
          className="absolute ml-4 h-5 w-5"
          alt="car model"
        />
        <input
          type="text"
          {...register('model')}
          placeholder="Tiguan"
          className="searchbar__input"
        />
        <SearchButton className="sm:hidden" />
      </div>
      <SearchButton className="max-sm:hidden" />
    </form>
  )
}
