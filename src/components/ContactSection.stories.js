import ContactSection from './ContactSection.vue'
import { fn } from '@storybook/test'

export default {
  title: 'Components/Contact Section',
  component: ContactSection,
  argTypes: {
    title: {
      control: 'text',
      description: 'Title of the contact section'
    },
    subtitle: {
      control: 'text',
      description: 'Subtitle of the contact section'
    },
    img: {
      control: 'text',
      description: 'URL of the image to display'
    },
    submitButtonName: {
      control: 'text',
      description: 'Label of the submit button'
    },
    bgColor: {
      control: 'color',
      description: 'Background color of the component | type hexadecimal'
    },
    color: {
      control: 'color',
      description: 'Text color of the hero section | type hexadecimal'
    },
    themeColor: {
      options: [null, 'primary', 'secondary', 'tertiary'],
      control: { type: 'radio' },
      description: 'Theme color for the hero section'
    }
  },
  args: { onSubmit: fn() }
}

const Template = (args) => ({
  components: { ContactSection },
  setup: () => ({ args }),
  template: '<ContactSection v-bind="args"  />'
})

export const Default = Template.bind({})
Default.args = {
  title: 'Get in touch',
  subtitle: 'Our friendly team would love to hear from you',
  img: 'https://creatoom.com/wp-content/uploads/2023/12/scene-with-box-paper-mockups-v4-top-view-1024x683.jpg',
  submitButtonName: 'Send',
  options: {
    firstName: { displayed: true, required: true, title: 'First name', placeholder: 'First name' },
    lastName: { displayed: true, required: true, title: 'Last name', placeholder: 'Last name' },
    email: { displayed: true, required: true, title: 'Email', placeholder: 'Email' },
    phoneNumber: {
      displayed: true,
      required: true,
      title: 'Phone number',
      placeholder: 'Phone number (ex: +3360234567)'
    },
    companyName: {
      displayed: true,
      required: false,
      title: 'Company name',
      placeholder: 'Company name'
    },
    message: {
      displayed: true,
      required: true,
      title: 'Message',
      placeholder: 'Leave us a message...'
    }
  }
}
