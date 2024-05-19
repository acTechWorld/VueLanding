import CTASection from './CTASection.vue'

export default {
  title: 'Components/CTA Section',
  component: CTASection,
  argTypes: {
    color: { control: 'color' },
    bgColor: { control: 'color' },
    themeColor: {
      options: [null, 'primary', 'secondary', 'tertiary'],
      control: { type: 'radio' }
    }
  }
}

const Template = (args) => ({
  components: { CTASection },
  setup: () => ({ args }),
  template: '<CTASection v-bind="args"/>'
})

export const Default = Template.bind({})
Default.args = {
  title: 'Start your free trial',
  subTitle: 'Join over 4000 statups already growing up with us',
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
