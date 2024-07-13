import FooterSection from './FooterSection.vue'
import { fn } from '@storybook/test'

export default {
  title: 'Components/Footer Section',
  component: FooterSection,
  args: { onClickPage: fn() },
  argTypes: {
    topSection: {
      control: 'object',
      description: `Configuration for the top section of the footer
      
      topSection type description:

      {
        pages?: { [category: string]: string[] }
        companyLogo?: string
        companyName?: string
        text?: string
        bgColor?: \`#\${string}\`
        color?: \`#\${string}\`
        themeColor?: 'primary' | 'secondary' | 'tertiary'
      }
      `
    },
    bottomSection: {
      control: 'object',
      description: `Configuration for the bottom section of the Footer
      
      bottomSection type description:
      
      {
        socialLinks?: {
          type: "google" | "reddit" | "tiktok" | "linkedin" | "instagram" | "facebook" | "whatsapp" | "github" | "youtube" | "twitter" | "pinterest"
          url: string
        }[]
        copyrights?: string
        bgColor?: \`#\${string}\`
        color?: \`#\${string}\`
        themeColor?: 'primary' | 'secondary' | 'tertiary'
      }
      `
    }
  }
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
      Product: [
        { label: 'Overview', name: 'overview' },
        { label: 'Features', name: 'features' },
        { label: 'Solutions', name: 'solutions' },
        { label: 'Tutorials', name: 'tutorials' },
        { label: 'Pricing', name: 'pricing' },
        { label: 'Releases', name: 'releases' }
      ],
      Company: [
        { label: 'About us', name: 'aboutUs' },
        { label: 'Careers', name: 'careers' },
        { label: 'Press', name: 'press' },
        { label: 'News', name: 'news' },
        { label: 'Media kit', name: 'mediaKit' },
        { label: 'Contact', name: 'contact' }
      ],
      Resources: [
        { label: 'Blog', name: 'blog' },
        { label: 'Newsletter', name: 'newsletter' },
        { label: 'Events', name: 'events' },
        { label: 'Help centre', name: 'helpCentre' },
        { label: 'Tutorials', name: 'tutorials' },
        { label: 'Support', name: 'support' }
      ],
      'Use cases': [
        { label: 'Startups', name: 'startups' },
        { label: 'Enterprise', name: 'enterprise' },
        { label: 'Government', name: 'government' },
        { label: 'SaaS centre', name: 'saasCentre' },
        { label: 'Marketplaces', name: 'marketplaces' },
        { label: 'Ecommerce', name: 'ecommerce' }
      ],
      Social: [
        { label: 'Twitter', name: 'twitter' },
        { label: 'LinkedIn', name: 'linkedIn' },
        { label: 'Facebook', name: 'facebook' },
        { label: 'Github', name: 'github' },
        { label: 'AngelList', name: 'angelList' },
        { label: 'Dribbble', name: 'dribbble' }
      ]
    },
    text: 'Design amazing digital experiences that create more happy in the word',
    companyName: 'My landing page',
    companyLogo: 'logo_icon.png',
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
