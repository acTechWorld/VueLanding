import ProgressBar from './ProgressBar.vue'

export default {
  title: 'Components/Progress Bar',
  component: ProgressBar,
  argTypes: {
    bgColor: { control: 'color' },
    themeColor: {
      options: [null, 'primary', 'secondary', 'tertiary'],
      control: { type: 'radio' }
    }
  }
}

const Template = (args) => ({
  components: { ProgressBar },
  setup: () => ({ args }),
  template: '<ProgressBar v-bind="args"/>'
})

export const Primary = Template.bind({})
Primary.args = {
  value: 10
}
