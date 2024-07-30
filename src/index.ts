import CTASection from '@/components/CTASection.vue'
import FAQSection from '@/components/FAQSection.vue'
import FeaturesSection from '@/components/FeaturesSection.vue'
import FooterSection from '@/components/FooterSection.vue'
import HeroSection from '@/components/HeroSection.vue'
import MetricsSection from '@/components/MetricsSection.vue'
import NewsletterSection from '@/components/NewsletterSection.vue'
import PricingSectionCards from '@/components/PricingSectionCards.vue'
import PricingSectionTable from '@/components/PricingSectionTable.vue'
import SocialProofSection from '@/components/SocialProofSection.vue'
import TeamSection from '@/components/TeamSection.vue'
import HeaderSection from './components/HeaderSection.vue'
import FontAwesomePlugin from '@/plugins/fontawesome'
import ContactSection from './components/ContactSection.vue'
import ToastComponent from './commons/ToastComponent.vue'
import './assets/tailwind.css'
import { validateLicenseKey } from './services/licencing'
const components = {
  CTASection,
  FAQSection,
  FeaturesSection,
  FooterSection,
  HeroSection,
  MetricsSection,
  NewsletterSection,
  PricingSectionCards,
  PricingSectionTable,
  SocialProofSection,
  TeamSection,
  HeaderSection,
  ContactSection,
  ToastComponent
}

const licenseKey = process.env.VUE_APP_VUE_LANDING_LICENSE_KEY

let isLibraryAccessible = false

const install = async (app) => {
  isLibraryAccessible = await validateLicenseKey(licenseKey)
  if (isLibraryAccessible) {
    app.use(FontAwesomePlugin)
    // Register all components globally
    Object.keys(components).forEach((name) => {
      app.component(name, components[name])
    })
  } else {
    console.warn('Invalid license key. Access to the VueLanding is denied.')
  }
}

export default { install }
