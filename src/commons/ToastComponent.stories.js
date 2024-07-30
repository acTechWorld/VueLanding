import ToastComponent from './ToastComponent.vue'
import CTAButton from './CTAButton.vue'
import { ref } from 'vue'

export default {
  title: 'Commons/ToastComponent',
  component: ToastComponent,
  argTypes: {
    type: {
      options: [null, 'success', 'error', 'info', 'warning'],
      control: { type: 'radio' },
      description: 'Type of the message'
    }
  }
}

const Template = (args) => ({
  components: { ToastComponent, CTAButton },
  setup() {
    const toast = ref(null)

    const showToast = () => {
      console.log(toast)
      if (toast.value) {
        toast.value.show()
      }
    }

    return { args, toast, showToast }
  },
  template:
    '<div><CTAButton name="show" label="Show" @click="showToast" /><ToastComponent v-bind="args" ref="toast"/></div>'
})

export const Default = Template.bind({})
Default.args = {
  message: 'test',
  type: 'success',
  duration: 0
}
