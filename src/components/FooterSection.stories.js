import FooterSection from './FooterSection.vue'
import { fn } from '@storybook/test'

export default {
  title: 'Components/Footer Section',
  component: FooterSection,
  args: { onClickPage: fn() }
}

const Template = (args) => ({
  components: { FooterSection },
  setup: () => ({ args }),
  template: '<FooterSection v-bind="args"/>'
})

export const Default = Template.bind({})
Default.args = {
  topSection: {
    pages: {
      Product: ['Overview', 'Features', 'Solutions', 'Tutorials', 'Pricing', 'Releases'],
      Company: ['About us', 'Careers', 'Press', 'News', 'Media kit', 'Contact'],
      Resources: ['Blog', 'Newsletter', 'Events', 'Help centre', 'Tutorials', 'Support'],
      'Use cases': [
        'Startups',
        'Enterprise',
        'Government',
        'SaaS centre',
        'Marketplaces',
        'Ecommerce'
      ],
      Social: ['Twitter', 'LinkedIn', 'Facebook', 'Github', 'AngelList', 'Dribbble']
    },
    text: 'Design amazing digital experiences that create more happy in the word',
    companyName: 'My landing page',
    color: '#475467',
    bgColor: '#fff'
  },
  bottomSection: {
    copyrights: '2077 My landing page. All rights reserved',
    socialLinks: [
      {
        type: 'github',
        url: 'https://github.com/'
      },
      {
        type: 'twitter',
        url: 'https://x.com/?lang=en'
      },
      {
        type: 'instagram',
        url: 'https://www.instagram.com/'
      },
      {
        type: 'facebook',
        url: 'https://facebook.com'
      },
      {
        type: 'linkedin',
        url: 'https://www.linkedin.com/'
      },
      {
        type: 'google',
        url: 'https://google.com'
      },
      {
        type: 'whatsapp',
        url: 'https://www.whatsapp.com/'
      },
      {
        type: 'tiktok',
        url: 'https://tiktok.com'
      },
      {
        type: 'pinterest',
        url: 'https://pinterest.com'
      },
      {
        type: 'youtube',
        url: 'https://www.youtube.com/'
      },
      {
        type: 'reddit',
        url: 'https://reddit.com'
      }
    ],
    color: '#667085',
    bgColor: '#fff'
  }
}
