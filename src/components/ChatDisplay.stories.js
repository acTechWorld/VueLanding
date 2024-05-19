import ChatDisplay from './ChatDisplay.vue'

export default {
  title: 'Components/Chat/Display',
  component: ChatDisplay,
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
  components: { ChatDisplay },
  setup: () => ({ args }),
  template: '<ChatDisplay v-bind="args"/>'
})

export const Example = Template.bind({})
export const Loading = Template.bind({})
Example.args = {
  text: 'The velvet sky stretched endlessly, adorned with twinkling stars scattered like diamonds on a cosmic canvas. A solitary owl hooted softly in the distance, its call echoing through the night. Amidst the tranquil forest, whispers of ancient secrets lingered in the air, carried by the gentle breeze. Time seemed to stand still, as if the universe itself paused to listen to the symphony of nature. In this moment, all worries melted away, and the soul found solace in the embrace of the wilderness.'
}
Loading.args = {
  loading: true
}
