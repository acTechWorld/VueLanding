import PricingSectionCards from './PricingSectionCards.vue'
import { fn } from '@storybook/test'

export default {
  title: 'Components/Pricing Section/Cards',
  component: PricingSectionCards,
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
  components: { PricingSectionCards },
  setup: () => ({ args }),
  template: '<PricingSectionCards v-bind="args"/>'
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
        id: 'starter',
        type: 'Starter Plan',
        amount: 15,
        currency: '$',
        frequency: 'mth',
        color: '#555',
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
          'Access to basic financial tools',
          'Personalized budget tracking',
          'Up to 5 investment portfolios',
          '10GB secure storage',
          'Email support'
        ]
      },
      {
        id: 'growth',
        type: 'Growth Plan',
        amount: 30,
        currency: '$',
        frequency: 'mth',
        color: '#555',
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
          'All Starter Plan features',
          'Advanced financial planning',
          'Custom investment strategies',
          'Up to 15 investment portfolios',
          '50GB secure storage',
          'Priority email and chat support'
        ]
      },
      {
        id: 'enterprise',
        type: 'Enterprise Plan',
        amount: 60,
        currency: '$',
        frequency: 'mth',
        color: '#555',
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
          'All Growth Plan features',
          'Dedicated financial advisor',
          'Comprehensive tax planning',
          'Unlimited investment portfolios',
          'Unlimited secure storage',
          '24/7 premium support'
        ]
      }
    ]
  }
}

export const Night = Template.bind({})
Night.args = {
  topSection: {
    bgColor: '#1f2123',
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
    color: '#e6eaef',
    pricings: [
      {
        id: 'starter',
        type: 'Starter Plan',
        amount: 15,
        currency: '$',
        frequency: 'mth',
        bgColor: '#160e1a',
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
          'Access to basic financial tools',
          'Personalized budget tracking',
          'Up to 5 investment portfolios',
          '10GB secure storage',
          'Email support'
        ]
      },
      {
        id: 'growth',
        type: 'Growth Plan',
        amount: 30,
        currency: '$',
        frequency: 'mth',
        disabled: true,
        disabledText: 'Option not availabled anymore',
        bgColor: '#160e1a',
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
          'All Starter Plan features',
          'Advanced financial planning',
          'Custom investment strategies',
          'Up to 15 investment portfolios',
          '50GB secure storage',
          'Priority email and chat support'
        ]
      },
      {
        id: 'enterprise',
        type: 'Enterprise Plan',
        amount: 60,
        currency: '$',
        frequency: 'mth',
        bgColor: '#160e1a',
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
          'All Growth Plan features',
          'Dedicated financial advisor',
          'Comprehensive tax planning',
          'Unlimited investment portfolios',
          'Unlimited secure storage',
          '24/7 premium support'
        ]
      }
    ]
  }
}
