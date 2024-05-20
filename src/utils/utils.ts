import type { ThemeColor } from './types'
import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '../../tailwind.config.js'

const fullConfig = resolveConfig(tailwindConfig)

export const hexToRgb = (hex: string): string | null => {
  // Remove the leading '#' if present
  const cleanHex = hex.replace(/^#/, '')

  // Check for shorthand (3-digit) format and convert it to full (6-digit) format
  const expandedHex =
    cleanHex.length === 3
      ? cleanHex
          .split('')
          .map((char) => char + char)
          .join('')
      : cleanHex

  // Validate the input (it should be 6 digits after potential expansion)
  const isValidHex = /^[a-f\d]{6}$/i.test(expandedHex)
  if (!isValidHex) {
    return null
  }

  // Parse the hex color
  const bigint = parseInt(expandedHex, 16)
  const r = (bigint >> 16) & 255
  const g = (bigint >> 8) & 255
  const b = bigint & 255

  return `${r},${g},${b}`
}

export const getBgColor = (bgColor?: `#${string}`, themeColor?: ThemeColor) => {
  if (bgColor) {
    return bgColor
  } else if (themeColor) {
    return fullConfig.theme.colors[`bg-${themeColor}`]
  } else {
    return fullConfig.theme.colors['bg-primary']
  }
}

export const getTxtColor = (txtColor?: `#${string}`, themeColor?: ThemeColor) => {
  if (txtColor) {
    return txtColor
  } else if (themeColor) {
    return fullConfig.theme.colors[`txt-${themeColor}`]
  } else {
    return fullConfig.theme.colors['txt-primary']
  }
}
