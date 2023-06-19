declare namespace NodeJS {
  export interface ProcessEnv {
    NEXT_PUBLIC_IMAGIN_API_KEY: string
    NEXT_PUBLIC_IMAGIN_HOST: string
    RAPID_API_KEY: string
    RAPID_API_HOST: string
  }
}

interface AppCar {
  city_mpg: number
  class: string
  combination_mpg: number
  cylinders: number
  displacement: number
  drive: string
  fuel_type: string
  highway_mpg: number
  make: string
  model: string
  transmission: string
  year: number
}

type FilterProps = Partial<{
  manufacturer: string
  year: number
  model: string
  limit: number
  fuel: string
}>

interface FilterOptionSchema {
  title: string
  value: string
}
