import HeroSection from './HeroSection.vue'

export default {
  title: 'Components/Hero Section',
  component: HeroSection,
  argTypes: {
    color: { control: 'color' },
    bgColor: { control: 'color' },
    themeColor: {
      options: [null, 'primary', 'secondary', 'tertiary'],
      control: { type: 'radio' }
    },
    type: {
      options: [undefined, 'default', 'vertical'],
      control: { type: 'radio' }
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
  subTitle: 'Be the first to know about releases and industry news and insights',
  img: 'https://creatoom.com/wp-content/uploads/2023/12/scene-with-box-paper-mockups-v4-top-view-1024x683.jpg',
  video: 'https://assets-global.website-files.com/636496d3f0ebfdaba9784655/65288f5440e92ae64d88aa65_Untitled UI promo placeholder v2 (compressed)-transcode.mp4',
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
  themeColor: undefined
}
