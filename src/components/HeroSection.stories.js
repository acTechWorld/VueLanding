import HeroSection from './HeroSection.vue'
import { fn } from '@storybook/test'

export default {
  title: 'Components/Hero Section',
  component: HeroSection,
  args: { onClickCtaButton: fn() },
  argTypes: {
    type: {
      control: { type: 'select', options: ['default', 'vertical'] },
      description: 'Type of the hero section'
    },
    title: {
      control: 'text',
      description: 'Title of the hero section'
    },
    subtitle: {
      control: 'text',
      description: 'Subtitle of the hero section'
    },
    img: {
      control: 'text',
      description: 'URL of the image to display'
    },
    video: {
      control: 'text',
      description: 'URL of the video to display'
    },
    placeholderInput: {
      control: 'text',
      description: 'Placeholder for the input field (if applicable)'
    },
    ctaButtons: {
      control: 'object',
      description: `Array of CTA buttons
      
      - ctaButtons type details: 

      {
        name: string
        label: string
        bgColor?: \`#\${string}\`
        color?: \`#\${string}\`
        themeColor?: 'primary' | 'secondary' | 'tertiary'
      }[]`
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
    },
    autoplayVideoOnScroll: {
      control: 'boolean',
      description: 'Enable/disable autoplay of video on scroll'
    },
    overlayVideoPlayer: {
      control: 'boolean',
      description: 'Enable/disable overlay for video player'
    }
  }
}

const Template = (args) => ({
  components: { HeroSection },
  setup: () => ({ args }),
  template: '<HeroSection v-bind="args"  />'
})

export const Default = Template.bind({})
Default.args = {
  title: 'The App dedicated to your progress',
  subtitle: 'Stay informed about the latest releases, industry news, and insights',
  video: 'hero_section_video.mp4',
  ctaButtons: [
    {
      name: 'demo',
      label: 'Demo',
      themeColor: 'secondary',
      icon: 'globe'
    },
    {
      name: 'signUp',
      label: 'Sign up',
      themeColor: 'tertiary'
    }
  ],
  bgColor: '#fff',
  color: '#333',
  themeColor: null
}
