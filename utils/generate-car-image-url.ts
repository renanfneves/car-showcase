export function generateCarImageUrl(car: AppCar, angle?: string) {
  const url = new URL(`https://${process.env.NEXT_PUBLIC_IMAGIN_HOST}/getimage`)
  const { make, model, year } = car

  url.searchParams.append(
    'customer',
    process.env.NEXT_PUBLIC_IMAGIN_API_KEY || '',
  )
  url.searchParams.append('make', make)
  url.searchParams.append('modelFamily', model.split(' ')[0])
  url.searchParams.append('zoomType', 'fullscreen')
  url.searchParams.append('modelYear', `${year}`)
  url.searchParams.append('angle', `${angle}`)

  return `${url}`
}
