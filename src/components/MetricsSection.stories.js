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
    subtitle: 'Everything you need to build modern UI and great products',
    bgColor: '#fff',
    color: '#000'
  },
  bottomSection: {
    metrics: [
      {
        value: '400+',
        object: 'Project completed',
        ctaButton: {
          name: 'projects',
          label: 'View projects',
          color: '#000'
        }
      },
      {
        value: '600%',
        object: 'Return on investment',
        ctaButton: {
          name: 'inverstments',
          label: 'Learn more',
          color: '#000'
        }
      },
      {
        value: '10K',
        object: 'Global downloads',
        ctaButton: {
          name: 'downloads',
          label: 'Downloads now',
          color: '#000'
        }
      },
      {
        value: '200+',
        object: '5-star reviews',
        color: '#000'
      }
    ]
  }
}
