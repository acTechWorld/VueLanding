import CTASection from './CTASection.vue'
import { fn } from '@storybook/test'

export default {
  title: 'Components/CTA Section',
  component: CTASection,
  argTypes: {
    title: {
      control: 'text',
      description: 'The title of the CTA section.'
    },
    subtitle: {
      control: 'text',
      description: 'The subtitle of the CTA section.'
    },
    ctaButtons: {
      control: 'object',
      description: `An array of objects representing the CTA buttons to be displayed.
      
      ctaButtons type description:

      {
        label: string,
        type?: string,
        bgColor?: \`#\${string}\`
        color?: \`#\${string}\`
        themeColor?: 'primary' | 'secondary' | 'tertiary'
      }[]
      `
    },
    bgColor: {
      control: 'color',
      description: 'Background color of the CTA section | type hexadecimal'
    },
    color: {
      control: 'color',
      description: 'Text color of the CTA section | type hexadecimal'
    },
    themeColor: {
      options: [null, 'primary', 'secondary', 'tertiary'],
      control: { type: 'radio' },
      description: 'Theme color of the CTA section.'
    }
  },
  args: { onClickCtaButton: fn() }
}

const Template = (args) => ({
  components: { CTASection },
  setup: () => ({ args }),
  template: '<CTASection v-bind="args" />'
})

export const Default = Template.bind({})
Default.args = {
  title: 'Start your free trial',
  subtitle: 'Join over 4000 statups already growing up with us',
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
}
