import axios from 'axios'
let initialNumber = 0

const KEY = '?client_id=5f96323678d05ff0c4eb264ef184556868e303b32a2db88ecbf15746e6f25e02'
const URL = `https://api.unsplash.com/photos/`

export const testAip = async (name: string, password: string) => {
  // console.log('api', name, password)
  const response = await fetch(`${URL}${KEY}&per_page=20&page=1000`)
  const data = await response.json()
  if (response.status >= 400) {
    throw new Error(data.errors)
  }
  return data
}
