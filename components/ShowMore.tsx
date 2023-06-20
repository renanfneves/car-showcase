'use client'

import { useRouter } from 'next/navigation'

import { updateSearchParams } from '@/utils/update-search-params'
import { CustomButton } from '@/components/CustomButton'

interface ShowMoreProps {
  pageNumber: number
  isNext: boolean
}

export function ShowMore({ pageNumber, isNext }: ShowMoreProps) {
  const router = useRouter()

  const handleNavigation = () => {
    const newLimit = (pageNumber + 1) * 10

    const newPathname = updateSearchParams('limit', `${newLimit}`)

    router.push(newPathname, { scroll: false })
  }

  return (
    <div className="flex-center mt-10 w-full gap-5">
      {!isNext && (
        <CustomButton
          type="button"
          title="Show More"
          containerStyles="bg-primary-blue rounded-full text-white"
          onClick={handleNavigation}
        />
      )}
    </div>
  )
}
