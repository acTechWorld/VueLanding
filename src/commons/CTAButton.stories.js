import CTAButton from './CTAButton.vue'
import { fn } from '@storybook/test'

export default {
  title: 'Commons/Buttons/CTA',
  component: CTAButton,
  argTypes: {
    color: { control: 'color' },
    bgColor: { control: 'color' },
    themeColor: {
      options: [null, 'primary', 'secondary', 'tertiary'],
      control: { type: 'radio' }
    }
  },
  args: { onClick: fn() }
}

const Template = (args) => ({
  components: { CTAButton },
  setup: () => ({ args }),
  template: '<CTAButton v-bind="args"/>'
})

export const Default = Template.bind({})
Default.args = {
  name: 'learnMore',
  label: 'Learn more'
}
