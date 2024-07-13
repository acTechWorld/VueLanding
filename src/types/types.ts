import type { IconName } from '@fortawesome/fontawesome-svg-core'

export type AnimationType = 'off' | 'slide' | 'appear'

export type ThemeColor = 'primary' | 'secondary' | 'tertiary'

export type CTAButtonType = {
  name: string
  label: string
  icon?: IconName
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

export type CTASectionType = {
  title?: string
  subtitle?: string
  ctaButtons?: CTAButtonType[]
  bgColor?: `#${string}`
  color?: `#${string}`
  themeColor?: ThemeColor
}

export type FAQSectionType = {
  topSection?: {
    title?: string
    subtitle?: string
    ctaButtons?: CTAButtonType[]
    bgColor?: `#${string}`
    color?: `#${string}`
    themeColor?: ThemeColor
  }
  bottomSection?: {
    color?: `#${string}`
    faqQuestions?: { question: string; answer: string }[]
  }
}

export type FeatureType = {
  label?: string
  description?: string
  featurePoints?: string[]
  img?: string
  video?: string
  bgColor?: `#${string}`
  color?: `#${string}`
  themeColor?: ThemeColor
  ctaButtons?: CTAButtonType[]
}

export type FeaturesSectionType = {
  title?: string
  subtitle?: string
  features?: FeatureType[]
  bgColor?: `#${string}`
  color?: `#${string}`
  themeColor?: ThemeColor
  contentWidth?: number
}

export type FooterSectionType = {
  innerWidth?: number
  topSection?: {
    pages?: { [category: string]: { name: string; label: string }[] }
    companyLogo?: string
    companyName?: string
    text?: string
    bgColor?: `#${string}`
    color?: `#${string}`
    themeColor?: ThemeColor
  }
  bottomSection?: {
    socialLinks?: {
      type: SocialLinkType
      url: string
    }[]
    copyrights?: string
    bgColor?: `#${string}`
    color?: `#${string}`
    themeColor?: ThemeColor
  }
}

export type HeaderSubMenuItemType = {
  name: string
  label: string
  subtitle?: string
  icon?: IconName
  img?: string
  bgColor?: `#${string}`
  color?: `#${string}`
  themeColor?: ThemeColor
}

export type HeaderSectionType = {
  companyLogo?: string
  companyName?: string
  sticky?: boolean
  transparent?: boolean
  menuItems?: {
    name?: string
    label?: string
    category?: string
    large?: boolean
    bgColor?: `#${string}`
    color?: `#${string}`
    themeColor?: ThemeColor
    subMenuItems?: HeaderSubMenuItemType[]
  }[]
  bgColor?: `#${string}`
  color?: `#${string}`
  themeColor?: ThemeColor
}

export type HeroSectionType = {
  type?: 'default' | 'vertical'
  title?: string
  subtitle?: string
  img?: string
  video?: string
  placeholderInput?: string
  ctaButtons?: CTAButtonType[]
  bgColor?: `#${string}`
  color?: `#${string}`
  themeColor?: ThemeColor
  autoplayVideoOnScroll?: boolean
  overlayVideoPlayer?: boolean
}

export type MetricsSectionType = {
  topSection?: {
    title?: string
    subtitle?: string
    bgColor?: `#${string}`
    color?: `#${string}`
    themeColor?: ThemeColor
  }
  bottomSection?: {
    bgColor?: `#${string}`
    color?: `#${string}`
    themeColor?: ThemeColor
    metrics?: {
      value?: string
      object?: string
      ctaButton?: { name: string; label: string; color?: `#${string}` }
    }[]
  }
}

export type NewsletterSectionType = {
  title?: string
  subtitle?: string
  img?: string
  placeholderInput?: string
  ctaButton?: CTAButtonType
  bgColor?: `#${string}`
  color?: `#${string}`
  themeColor?: ThemeColor
}

export type PricingSectionType = {
  topSection?: {
    title?: string
    subtitle?: string
    ctaButtons?: CTAButtonType[]
    bgColor?: `#${string}`
    color?: `#${string}`
    themeColor?: ThemeColor
  }
  bottomSection?: {
    bgColor?: `#${string}`
    themeColor?: ThemeColor
    pricings?: Pricing[]
  }
}

export type SocialProofSectionType = {
  datas: {
    testimony?: string
    name?: string
    title?: string
    imgProfile?: string
    stars?: number
  }[]
  bgColor?: `#${string}`
  color?: `#${string}`
  themeColor?: ThemeColor
  animationType?: AnimationType
  infinite?: boolean
}
export type TeamMember = { img?: string; name?: string; description?: string }

export type TeamSectionType = {
  title?: string
  subtitle?: string
  teamMembers?: TeamMember[]
  bgColor?: `#${string}`
  color?: `#${string}`
  themeColor?: ThemeColor
  animated?: boolean
  membersClickable?: boolean
}
