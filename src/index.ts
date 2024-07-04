import CTASection from '@/components/CTASection.vue'
import FAQSection from '@/components/FAQSection.vue'
import FeaturesSection from '@/components/FeaturesSection.vue'
import FooterSection from '@/components/FooterSection.vue'
import HeroSection from '@/components/HeroSection.vue'
import MetricsSection from '@/components/MetricsSection.vue'
import NewsletterSection from '@/components/NewsletterSection.vue'
import PricingSection from '@/components/PricingSection.vue'
import SocialProofSection from '@/components/SocialProofSection.vue'
import TeamSection from '@/components/TeamSection.vue'
import FontAwesomePlugin from '@/plugins/fontawesome'
import './assets/tailwind.css'

const components = {
  CTASection,
  FAQSection,
  FeaturesSection,
  FooterSection,
  HeroSection,
  MetricsSection,
  NewsletterSection,
  PricingSection,
  SocialProofSection,
  TeamSection
}
const install = (app) => {
  app.use(FontAwesomePlugin)
  // Register all components globally
  Object.keys(components).forEach((name) => {
    app.component(name, components[name])
  })
}

export default { install }

export {
  CTASection,
  FAQSection,
  FeaturesSection,
  FooterSection,
  HeroSection,
  MetricsSection,
  NewsletterSection,
  PricingSection,
  SocialProofSection,
  TeamSection
}
