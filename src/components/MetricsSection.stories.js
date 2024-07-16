import MetricsSection from './MetricsSection.vue'
import { fn } from '@storybook/test'

export default {
  title: 'Components/Metrics Section',
  component: MetricsSection,
  args: { onClickMetric: fn() },
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
        bgColor?: \`#\${string}\`
        color?: \`#\${string}\`
        themeColor?: 'primary' | 'secondary' | 'tertiary'
      }`
    },
    bottomSection: {
      control: {
        type: 'object'
      },
      description: `Bottom section configuration

      - bottomSection type details:

      {
        bgColor?: \`#\${string}\`
        color?: \`#\${string}\`
        themeColor?: 'primary' | 'secondary' | 'tertiary'
        metrics?: {
          value?: string
          object?: string
          ctaButton?: {
            name: string
            label: string
            bgColor?: \`#\${string}\`
            color?: \`#\${string}\`
            themeColor?: 'primary' | 'secondary' | 'tertiary'
          }
        }[]
      }
      `
    }
  }
}

const Template = (args) => ({
  components: { MetricsSection },
  setup: () => ({ args }),
  template: '<MetricsSection v-bind="args"/>'
})

export const Primary = Template.bind({})
Primary.args = {
  topSection: {
    title: 'Build something great',
    subtitle: 'Everything you need',
    bgColor: '#fff',
    color: '#000'
  },
  bottomSection: {
    metrics: [
      {
        value: '10,000+',
        object: 'Satisfied Clients',
        color: '#000',
        ctaButton: {
          name: 'clients',
          label: 'View Testimonials'
        }
      },
      {
        value: '$500M+',
        object: 'Assets Managed',
        color: '#000',
        ctaButton: {
          name: 'assets',
          label: 'Learn More'
        }
      },
      {
        value: '5',
        object: 'Industry Awards',
        color: '#000',
        ctaButton: {
          name: 'awards',
          label: 'See Awards'
        }
      },
      {
        value: '24/7',
        object: 'Customer Support',
        color: '#000',
        ctaButton: {
          name: 'support',
          label: 'Contact Us'
        }
      }
    ]
  }
}
