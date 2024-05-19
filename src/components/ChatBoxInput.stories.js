import ChatBoxInput from './ChatBoxInput.vue'

export default {
  title: 'Components/Chat/Input',
  component: ChatBoxInput,
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
  components: { ChatBoxInput },
  setup: () => ({ args }),
  template: '<ChatBoxInput v-bind="args"/>'
})

export const Example = Template.bind({})
Example.args = {
  placeholder: 'Write here'
}
