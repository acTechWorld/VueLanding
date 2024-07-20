import PricingSectionTable from './PricingSectionTable.vue'
import { fn } from '@storybook/test'

export default {
  title: 'Components/Pricing Section/Table',
  component: PricingSectionTable,
  args: {
    onClickTopSectionCtaButton: fn(),
    onClickPricing: fn()
  },
  argTypes: {
    topSection: {
      control: {
        type: 'object'
      },
      description: `Top section configuration

      - topSection type details:

      {
        title?: string
        subtitle?: string
        ctaButtons?: {
          name: string
          label: string
          bgColor?: \`#\${string}\`
          color?: \`#\${string}\`
          themeColor?: themeColor?: 'primary' | 'secondary' | 'tertiary'
        }[]
        bgColor?: \`#\${string}\`
        color?: \`#\${string}\`
        themeColor?: 'primary' | 'secondary' | 'tertiary'
      }
      `
    },
    bottomSection: {
      control: {
        type: 'object'
      },
      description: `Bottom section configuration

      - bottomSection type details:

      {
        bgColor?: \`#\${string}\`
        themeColor?: 'primary' | 'secondary' | 'tertiary'
        pricings?: {
          id: string | number
          amount: number
          currency?: string
          frequency?: string
          type?: string
          description?: string
          ctaButton?: {
            name: string
            label: string
            bgColor?: \`#\${string}\`
            color?: \`#\${string}\`
            themeColor?: 'primary' | 'secondary' | 'tertiary'
          }
          bgColor?: \`#\${string}\`;
          color?: \`#\${string}\`;
          themeColor?: 'primary' | 'secondary' | 'tertiary';
        }[]
        features?: {
          name: string
          label: string
          pricingValues: { 
            [princingId: string]: boolean | string
          }[]
        }[]
        hideBottomPricingCTA?: boolean
        oddFeatureColor?: \`#\${string}\`;
        oddFeatureBgColor?: \`#\${string}\`;
        evenFeatureColor?: \`#\${string}\`;
        evenFeatureBgColor?: \`#\${string}\`;
      }
      `
    }
  }
}

const Template = (args) => ({
  components: { PricingSectionTable },
  setup: () => ({ args }),
  template: '<PricingSectionTable v-bind="args"/>'
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
    hideBottomPricingCTA: false,
    pricings: [
      {
        id: 'basic',
        type: 'Basic plan',
        amount: 10,
        currency: '$',
        frequency: 'mth',
        color: '#222',
        bgColor: '#fff',
        ctaButton: {
          name: 'getStarted',
          label: 'Get started',
          themeColor: 'tertiary'
        }
      },
      {
        id: 'business',
        type: 'Business plan',
        amount: 20,
        currency: '$',
        frequency: 'mth',
        color: '#222',
        bgColor: '#fff',
        ctaButton: {
          name: 'getStarted',
          label: 'Get started',
          themeColor: 'tertiary'
        }
      },
      {
        id: 'enterprise',
        type: 'Enterprise plan',
        amount: 40,
        currency: '$',
        frequency: 'mth',
        color: '#222',
        bgColor: '#fff',
        ctaButton: {
          name: 'getStarted',
          label: 'Get started',
          themeColor: 'tertiary'
        }
      }
    ],
    features: [
      {
        name: 'time',
        label: 'Access Time',
        pricingValues: { basic: '7 days', business: 'Unlimited', enterprise: 'Unlimited' }
      },
      {
        name: 'users',
        label: 'Users',
        pricingValues: { basic: '1', business: '1', enterprise: 'Unlimited' }
      },
      {
        name: 'data',
        label: 'Data',
        pricingValues: { basic: '1GB', business: '100GB', enterprise: 'Unlimited' }
      },
      { name: 'headerSection', label: 'Header Section', pricingValues: { enterprise: true } },
      {
        name: 'pricingSection',
        label: 'Pricing Section',
        pricingValues: { basic: true, business: true, enterprise: true }
      },
      {
        name: 'footerSection',
        label: 'Footer Section',
        pricingValues: { business: true, enterprise: true }
      },
      {
        name: 'socialProofSection',
        label: 'Social Proof Section',
        pricingValues: { business: true, enterprise: true }
      },
      {
        name: 'teamSection',
        label: 'Team Section',
        pricingValues: { business: true, enterprise: true }
      },
      {
        name: 'newsletterSection',
        label: 'Newsletter Section',
        pricingValues: { basic: true, business: true, enterprise: true }
      },
      { name: 'metricSection', label: 'Metric Section', pricingValues: { enterprise: true } },
      { name: 'heroSection', label: 'Hero Section', pricingValues: { enterprise: true } },
      { name: 'faqSection', label: 'FAQ Section', pricingValues: { enterprise: true } }
    ]
  }
}

export const Night = Template.bind({})
Night.args = {
  topSection: {
    bgColor: '#160e1a',
    color: '#e6eaef',
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
    bgColor: '#1f2123',
    oddFeatureColor: '#fff',
    oddFeatureBgColor: '#333a44',
    evenFeatureBgColor: '#160e1a',
    evenFeatureColor: '#fff',
    hideBottomPricingCTA: false,
    pricings: [
      {
        id: 'basic',
        type: 'Basic plan',
        amount: 10,
        currency: '$',
        frequency: 'mth',
        bgColor: '#160e1a',
        ctaButton: {
          name: 'getStarted',
          label: 'Get started',
          themeColor: 'tertiary'
        }
      },
      {
        id: 'business',
        type: 'Business plan',
        bgColor: '#160e1a',
        amount: 20,
        currency: '$',
        frequency: 'mth',
        ctaButton: {
          name: 'getStarted',
          label: 'Get started',
          themeColor: 'tertiary'
        }
      },
      {
        id: 'enterprise',
        type: 'Enterprise plan',
        bgColor: '#160e1a',
        amount: 40,
        currency: '$',
        frequency: 'mth',

        ctaButton: {
          name: 'getStarted',
          label: 'Get started',
          themeColor: 'tertiary'
        }
      }
    ],
    features: [
      {
        name: 'time',
        label: 'Access Time',
        pricingValues: { basic: '7 days', business: 'Unlimited', enterprise: 'Unlimited' }
      },
      {
        name: 'users',
        label: 'Users',
        pricingValues: { basic: '1', business: '1', enterprise: 'Unlimited' }
      },
      {
        name: 'data',
        label: 'Data',
        pricingValues: { basic: '1GB', business: '100GB', enterprise: 'Unlimited' }
      },
      { name: 'headerSection', label: 'Header Section', pricingValues: { enterprise: true } },
      {
        name: 'pricingSection',
        label: 'Pricing Section',
        pricingValues: { basic: true, business: true, enterprise: true }
      },
      {
        name: 'footerSection',
        label: 'Footer Section',
        pricingValues: { business: true, enterprise: true }
      },
      {
        name: 'socialProofSection',
        label: 'Social Proof Section',
        pricingValues: { business: true, enterprise: true }
      },
      {
        name: 'teamSection',
        label: 'Team Section',
        pricingValues: { business: true, enterprise: true }
      },
      {
        name: 'newsletterSection',
        label: 'Newsletter Section',
        pricingValues: { basic: true, business: true, enterprise: true }
      },
      { name: 'metricSection', label: 'Metric Section', pricingValues: { enterprise: true } },
      { name: 'heroSection', label: 'Hero Section', pricingValues: { enterprise: true } },
      { name: 'faqSection', label: 'FAQ Section', pricingValues: { enterprise: true } }
    ]
  }
}
