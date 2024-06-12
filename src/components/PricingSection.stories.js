import PricingSection from './PricingSection.vue'
import { fn } from '@storybook/test'

export default {
  title: 'Components/Pricing Section',
  component: PricingSection,
  args: {
    onClickTopSectionCtaButton: fn(),
    onClickPricingCtaButton: fn(),
    onClickPricing: fn()
  }
}

const Template = (args) => ({
  components: { PricingSection },
  setup: () => ({ args }),
  template: '<PricingSection v-bind="args"/>'
})

export const Default = Template.bind({})
Default.args = {
  topSection: {
    title: 'Simple, transparent pricing',
    subtitle: 'We believe our product should be accessible to all companies, no matter the size',
    ctaButtons: [
      {
        name: 'learnMore',
        label: 'Learn more',
        themeColor: 'secondary'
      },
      {
        name: 'getStarted',
        label: 'Get started',
        themeColor: 'tertiary'
      }
    ]
  },
  bottomSection: {
    bgColor: '#fff',
    pricings: [
      {
        type: 'Basic plan',
        amount: 10,
        currency: '$',
        frequency: 'mth',
        color: '#222',
        bgColor: '#fff',
        ctaButtons: [
          {
            name: 'learnMore',
            label: 'Learn more',
            themeColor: 'secondary'
          },
          {
            name: 'getStarted',
            label: 'Get started',
            themeColor: 'tertiary'
          }
        ],
        features: [
          'Access to all bacic features',
          'Basic reporting and analytics',
          'Up to 10 individual users',
          '20GB individual data each user',
          'Basic chat and email support'
        ]
      },
      {
        type: 'Business plan',
        amount: 20,
        currency: '$',
        frequency: 'mth',
        color: '#222',
        bgColor: '#fff',
        ctaButtons: [
          {
            name: 'learnMore',
            label: 'Learn more',
            themeColor: 'secondary'
          },
          {
            name: 'getStarted',
            label: 'Get started',
            themeColor: 'tertiary'
          }
        ],
        features: [
          '200+ integrations',
          'Advanced reporting and analytics',
          'Up to 20 individual users',
          '40GB individual data each user',
          'Priority chat and email support'
        ]
      },
      {
        type: 'Enterprise plan',
        amount: 40,
        currency: '$',
        frequency: 'mth',
        color: '#222',
        bgColor: '#fff',
        ctaButtons: [
          {
            name: 'learnMore',
            label: 'Learn more',
            themeColor: 'secondary'
          },
          {
            name: 'getStarted',
            label: 'Get started',
            themeColor: 'tertiary'
          }
        ],
        features: [
          'Advanced custom fields',
          'Audit log and data history',
          'Unlimited individual users',
          'Unlimited individual data',
          'Priority chat and email support'
        ]
      }
    ]
  }
}
