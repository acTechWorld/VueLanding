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
  title: 'People who care about your growth',
  subtitle: 'Be the first to know about releases and industry news and insights',
  img: 'https://creatoom.com/wp-content/uploads/2023/12/scene-with-box-paper-mockups-v4-top-view-1024x683.jpg',
  video:
    'https://assets-global.website-files.com/636496d3f0ebfdaba9784655/65288f5440e92ae64d88aa65_Untitled UI promo placeholder v2 (compressed)-transcode.mp4',
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
