import type { ThemeColor } from './types'
import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '../../tailwind.config.js'

const fullConfig = resolveConfig(tailwindConfig)

export const hexToRgb = (hex: string) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  if (result) {
    const bigint = parseInt(hex.slice(1), 16)
    const r = (bigint >> 16) & 255
    const g = (bigint >> 8) & 255
    const b = bigint & 255

    return r + ',' + g + ',' + b
  }
  return null
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
