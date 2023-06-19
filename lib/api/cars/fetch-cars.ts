export async function fetchCars(filter: FilterProps) {
  const { manufacturer, year, model, limit, fuel } = filter
  try {
    // TODO: .env
    const headers = {
      'X-RapidAPI-Key': '86a8bf560bmsh08257ea52bd49d5p1e427cjsn54da995082d9',
      'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com',
    }

    const url = `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`

    const response = await fetch(url, { headers })
    const result = await response.json()

    return result
  } catch (error) {
    console.log(error)
    throw error
  }
}
