import FooterSection from './FooterSection.vue'

export default {
  title: 'Components/Footer Section',
  component: FooterSection
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
    companyName: 'My landing page'
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
      }
    ]
  }
}
