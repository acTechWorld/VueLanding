export type AnimationType = 'off' | 'slide' | 'appear'

export type ThemeColor = 'primary' | 'secondary' | 'tertiary'

export type CTAButtonType = {
  name: string
  label: string
  bgColor?: `#${string}`
  color?: `#${string}`
  themeColor?: ThemeColor
}

export type Pricing = {
  amount: number
  currency?: string
  frequency?: string
  type?: string
  description?: string
  ctaButtons?: CTAButtonType[]
  features?: string[]
  bgColor?: `#${string}`
  color?: `#${string}`
  themeColor?: ThemeColor
}

export type SocialLinkType =
  | 'facebook'
  | 'twitter'
  | 'linkedin'
  | 'github'
  | 'instagram'
  | 'google'
  | 'whatsapp'
  | 'tiktok'
  | 'pinterest'
  | 'youtube'
  | 'reddit'
