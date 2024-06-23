declare module '@oncekiller/vue-landing' {
  import { DefineComponent } from 'vue'
  import type {
    CTASectionType,
    FAQSectionType,
    FeaturesSectionType,
    FooterSectionType,
    HeroSectionType,
    MetricsSectionType,
    NewsletterSectionType,
    PricingSectionType,
    SocialProofSectionType,
    TeamSectionType
  } from '@/types/types'
  import FAQSection from '@/components/FAQSection.vue'
  export const CTASection: DefineComponent<CTASectionType>
  export const FAQSection: DefineComponent<FAQSectionType>
  export const FeaturesSection: DefineComponent<FeaturesSectionType>
  export const FooterSection: DefineComponent<FooterSectionType>
  export const HeroSection: DefineComponent<HeroSectionType>
  export const MetricsSection: DefineComponent<MetricsSectionType>
  export const NewsletterSection: DefineComponent<NewsletterSectionType>
  export const PricingSection: DefineComponent<PricingSectionType>
  export const SocialProofSection: DefineComponent<SocialProofSectionType>
  export const TeamSection: DefineComponent<TeamSectionType>
}
