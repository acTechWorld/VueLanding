// license.js
import axios from 'axios'

export async function validateLicenseKey(key) {
  try {
    const response = await axios.get(
      `http://fule0038.odns.fr/api/licencing/validate-key?licencingKey=${key}&project=vueLanding`
    )
    return response.data
  } catch (error) {
    console.error('License validation failed:', error)
    return false
  }
}
