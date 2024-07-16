import FeaturesSection from './FeaturesSection.vue'
import { fn } from '@storybook/test'

export default {
  title: 'Components/Features Section',
  component: FeaturesSection,
  args: { onClickCtaButton: fn() },
  argTypes: {
    title: {
      control: 'text',
      description: 'The title of the features section.'
    },
    subtitle: {
      control: 'text',
      description: 'The subtitle of the features section.'
    },
    features: {
      control: 'object',
      description: `An array of objects representing individual features to be displayed.
      
      features type details:
      
      {
        label?: string,
        description?: string,
        featurePoints?: string[],
        img?: string,
        video?: string,
        bgColor?: \`#\${string}\`
        color?: \`#\${string}\`
        themeColor?: 'primary' | 'secondary' | 'tertiary'
        contentWidth?: 'number'
        ctaButtons?: {
          name: string
          label: string
          bgColor?: \`#\${string}\`
          color?: \`#\${string}\`
          themeColor?: 'primary' | 'secondary' | 'tertiary'
        }[],
      }[]
      `
    },
    bgColor: {
      control: 'color',
      description: 'Background color of the features section | type hexadecimal'
    },
    color: {
      control: 'color',
      description: 'Text color of the features section | type hexadecimal'
    },
    themeColor: {
      options: [null, 'primary', 'secondary', 'tertiary'],
      control: { type: 'radio' },
      description: 'Theme color of the features section.'
    }
  }
}

const Template = (args) => ({
  components: { FeaturesSection },
  setup: () => ({ args }),
  template: '<FeaturesSection v-bind="args"/>'
})

export const Default = Template.bind({})
Default.args = {
  title: 'Beautiful analytics to grow smarter',
  subtitle:
    'Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups',
  bgColor: '#ffffff',
  color: '#000000',
  themeColor: 'primary',
  contentWidth: 1300,
  features: [
    {
      label: 'Personalized Financial Advisory',
      description: 'Tailored advice to help you meet your unique financial goals.',
      bgColor: '#f9fafb',
      color: '#475467',
      img: 'feature_section_img2.jpg',
      featurePoints: [
        'Comprehensive financial assessments',
        'Customized financial plans',
        'Ongoing support and adjustments'
      ],
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
      ]
    },
    {
      label: 'Advanced Investment Management',
      description: 'Maximize your returns with our data-driven investment strategies.',
      video: 'feature_section_video1.mp4',
      bgColor: '#fff',
      color: '#475467',
      featurePoints: [
        'Algorithm-based portfolio optimization',
        'Continuous monitoring and adjustments',
        'Risk management tailored to your profile'
      ]
    },
    {
      label: 'Automated Savings Solutions',
      description: 'Effortlessly grow your savings with our secure, automated tools.',
      bgColor: '#f9fafb',
      color: '#475467',
      video: 'feature_section_video2.mp4',
      featurePoints: [
        'Bank-level encryption for security',
        'Multi-factor authentication',
        'Regular security audits'
      ]
    },
    {
      label: 'Mobile Accessibility',
      description: 'Manage your finances anytime, anywhere with our mobile-friendly platform.',
      bgColor: '#fff',
      color: '#475467',
      img: 'feature_section_img1.jpg',
      featurePoints: [
        'User-friendly mobile app',
        'Real-time updates and insights',
        'Full functionality on mobile devices'
      ]
    },
    {
      label: 'Exceptional Customer Support',
      description: 'Get the help you need, whenever you need it.',
      bgColor: '#f9fafb',
      color: '#475467',
      img: 'feature_section_img4.jpg',
      featurePoints: [
        '24/7 dedicated support team',
        'Assistance with platform navigation',
        'Help with understanding investment strategies'
      ]
    },
    {
      label: 'Transparency and No Hidden Fees',
      description: 'Clear and straightforward pricing with no surprises.',
      bgColor: '#fff',
      color: '#475467',
      img: 'feature_section_img3.jpg',
      featurePoints: [
        'Detailed fee reports',
        'Transparent performance metrics',
        'Flat fee structure'
      ]
    }
  ]
}
