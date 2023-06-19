export async function fetchCars(filter: FilterProps) {
  const { manufacturer, year, model, limit, fuel } = filter
  try {
    const headers = {
      'X-RapidAPI-Key': process.env.RAPID_API_KEY,
      'X-RapidAPI-Host': process.env.RAPID_API_HOST,
    }

    const url = `https://${process.env.RAPID_API_HOST}/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`

    const response = await fetch(url, { headers })
    const result = await response.json()

    return result
  } catch (error) {
    console.log(error)
    throw error
  }
}
