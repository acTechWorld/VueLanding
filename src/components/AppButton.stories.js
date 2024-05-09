import AppButton from './AppButton.vue'

export default {
  title: 'Components/AppButton',
  component: AppButton,
  argTypes: {
    outlined: { control: 'boolean' }
  }
}

const Template = (args) => ({
  components: { AppButton },
  setup: () => ({ args }),
  template: '<AppButton v-bind="args">{{ args.default }}</AppButton>'
})

export const Primary = Template.bind({})
Primary.args = {
  default: 'Button text'
}

export const Outlined = Template.bind({})
Outlined.args = {
  ...Primary.args,
  outlined: true
}
