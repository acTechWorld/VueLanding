import PricingSection from './PricingSection.vue'
import { fn } from '@storybook/test'

export default {
  title: 'Components/Pricing Section',
  component: PricingSection,
  args: {
    onClickTopSectionCtaButton: fn(),
    onClickPricingCtaButton: fn(),
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
          type?: string;
          amount: number;
          currency?: string;
          frequency?: string;
          description?: string;
          ctaButtons?: {
            name: string
            label: string
            bgColor?: \`#\${string}\`
            color?: \`#\${string}\`
            themeColor?: 'primary' | 'secondary' | 'tertiary'
          }[];
          features?: string[];
          bgColor?: \`#\${string}\`;
          color?: \`#\${string}\`;
          themeColor?: 'primary' | 'secondary' | 'tertiary';
        }[]
      }
      `
    }
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
