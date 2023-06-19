'use client'

import Image from 'next/image'
import { Combobox, Transition } from '@headlessui/react'
import { forwardRef, Fragment, useMemo, useState } from 'react'
import { manufacturers } from '@/utils/constants'

interface SearchManufacturerProps {
  setManuFacturer: (manufacturer: string) => void
}

export const SearchManufacturer = forwardRef<
  HTMLInputElement,
  SearchManufacturerProps
>(({ setManuFacturer }: SearchManufacturerProps, ref) => {
  const [query, setQuery] = useState('')

  const filteredManufacturers = useMemo(() => {
    return query === ''
      ? manufacturers
      : manufacturers.filter((item) =>
          item
            .toLowerCase()
            .replace(/\s+/g, '')
            .includes(query.toLowerCase().replace(/\s+/g, '')),
        )
  }, [query])

  return (
    <div className="search-manufacturer">
      <Combobox onChange={setManuFacturer}>
        <div className="relative w-full">
          <Combobox.Button className="absolute top-[14px]">
            <Image
              src="/car-logo.svg"
              width={20}
              height={20}
              className="ml-4"
              alt="car logo"
            />
          </Combobox.Button>

          <Combobox.Input
            ref={ref}
            className="search-manufacturer__input"
            displayValue={(item: string) => item}
            onChange={(event) => {
              setQuery(event.target.value)
            }}
            placeholder="Volkswagen..."
          />

          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery('')}
          >
            <Combobox.Options
              className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
              static
            >
              {filteredManufacturers.map((item) => (
                <Combobox.Option
                  key={item}
                  className={({ active }) =>
                    `search-manufacturer__option relative ${
                      active ? 'bg-primary-blue text-white' : 'text-gray-900'
                    }`
                  }
                  value={item}
                >
                  {({ selected, active }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? 'font-medium' : 'font-normal'
                        }`}
                      >
                        {item}
                      </span>

                      {selected ? (
                        <span
                          className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                            active ? 'text-white' : 'text-pribg-primary-purple'
                          }`}
                        ></span>
                      ) : null}
                    </>
                  )}
                </Combobox.Option>
              ))}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  )
})

SearchManufacturer.displayName = 'SearchManufacturer'
