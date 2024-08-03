// license.js
import axios from 'axios'

export async function validateLicenseKey(key) {
  try {
    const response = await axios.get(
      `https://utils-backend.vuelanding.com/api/licencing/validate-key?licencingKey=${key}&project=vueLanding`
    )
    return response.data
  } catch (error) {
    console.error('License validation failed:', error)
    return false
  }
}
