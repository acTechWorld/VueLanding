import NewsletterSection from './NewsletterSection.vue'
import { fn } from '@storybook/test'

export default {
  title: 'Components/Newsletter Section',
  component: NewsletterSection,
  args: { onSubmit: fn() },
  argTypes: {
    title: {
      control: 'text',
      description: 'The title of the newsletter section'
    },
    subtitle: {
      control: 'text',
      description: 'The subtitle of the newsletter section'
    },
    img: {
      control: 'text',
      description: 'URL of the image'
    },
    placeholderInput: {
      control: 'text',
      description: 'Placeholder for the email input field'
    },
    ctaButton: {
      control: 'object',
      description: `Configuration for the call-to-action button

      - CTAButtonType type details: 

      {
        name: string
        label: string
        bgColor?: \`#\${string}\`
        color?: \`#\${string}\`
        themeColor?: 'primary' | 'secondary' | 'tertiary'
      }`
    },
    bgColor: {
      control: 'color',
      description: 'Background color of the newsletter section (hexadecimal)'
    },
    color: {
      control: 'color',
      description: 'Text color of the newsletter section (hexadecimal)'
    },
    themeColor: {
      options: [null, 'primary', 'secondary', 'tertiary'],
      control: { type: 'radio' },
      description: 'Theme color for the newsletter section'
    }
  }
}

const Template = (args) => ({
  components: { NewsletterSection },
  setup: () => ({ args }),
  template: '<NewsletterSection v-bind="args" class="max-w-[1400px]"  />'
})

export const Default = Template.bind({})
Default.args = {
  title: 'Sign up for our newsletter',
  subtitle: 'Be the first to know about releases and industry news and insights',
  img: 'newsletter_section_img.jpg',
  placeholderInput: 'Enter your email',
  ctaButton: {
    name: 'subscribe',
    label: 'Subscribe',
    themeColor: 'tertiary'
  },
  bgColor: undefined,
  color: undefined,
  themeColor: undefined
}
