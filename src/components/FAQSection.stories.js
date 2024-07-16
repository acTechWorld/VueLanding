import FAQSection from './FAQSection.vue'
import { fn } from '@storybook/test'

export default {
  title: 'Components/FAQ Section',
  component: FAQSection,
  args: { onClickTopSectionCtaButton: fn() },
  argTypes: {
    topSection: {
      control: 'object',
      description: `The configuration for the top section of the FAQ section.
      
      topSection type details:

      {
        title?: string,
        subtitle?: string,
        ctaButtons?: {
          name: string
          label: string
          bgColor?: \`#\${string}\`
          color?: \`#\${string}\`
          themeColor?: 'primary' | 'secondary' | 'tertiary'
        }[],
        bgColor?: \`#\${string}\`
        color?: \`#\${string}\`
        themeColor?: 'primary' | 'secondary' | 'tertiary'
      }
      `
    },
    bottomSection: {
      control: 'object',
      description: `The configuration for the bottom section of the FAQ section.

      bottomSection type details:

      {
        color?: \`#\${string}\`
        faqQuestions?: { question: string; answer: string }[],
      }`
    }
  }
}

const Template = (args) => ({
  components: { FAQSection },
  setup: () => ({ args }),
  template: '<FAQSection v-bind="args"/>'
})

export const Default = Template.bind({})
Default.args = {
  topSection: {
    title: 'We are here to answer your questions',
    subtitle: 'We believe our product should be accessible to all companies, no matter the size',
    ctaButtons: [
      {
        name: 'learnMore',
        label: 'Learn more',
        themeColor: 'secondary'
      },
      {
        name: 'getStarted',
        label: 'Get started',
        themeColor: 'tertiary'
      }
    ]
  },
  bottomSection: {
    faqQuestions: [
      {
        question: 'What financial services does your startup offer?',
        answer:
          'Our startup specializes in providing personalized financial advisory, investment management, and automated savings solutions. We leverage cutting-edge technology and data analytics to help individuals and businesses make informed financial decisions and achieve their financial goals.'
      },
      {
        question: 'Can you explain how your investment management platform works?',
        answer:
          'Our investment management platform uses advanced algorithms to analyze market trends and individual risk profiles. By combining these insights with your financial goals, the platform creates a customized investment portfolio designed to maximize returns while minimizing risk. Our team of experts continuously monitors and adjusts the portfolio to ensure optimal performance.'
      },
      {
        question: 'How secure is your automated savings solution?',
        answer:
          'Security is our top priority. Our automated savings solution uses bank-level encryption and adheres to strict compliance standards to protect your data and funds. We also offer multi-factor authentication and regular security audits to ensure your account remains safe.'
      },
      {
        question: 'What is the minimum amount needed to start investing with your platform?',
        answer:
          'We believe in making investing accessible to everyone, which is why our platform has no minimum investment requirement. You can start with any amount that suits your financial situation and gradually increase your investment as you grow more comfortable and confident in the process.'
      },
      {
        question: 'How does your financial advisory service help clients?',
        answer:
          'Our financial advisory service provides personalized guidance based on your unique financial situation and goals. We begin with a comprehensive financial assessment to understand your needs, then develop a tailored plan to help you achieve your objectives. Our advisors are available for ongoing support and adjustments to your plan as your circumstances change.'
      },
      {
        question: 'What sets your startup apart from traditional financial services?',
        answer:
          'Unlike traditional financial services, our startup leverages technology to offer a more personalized, efficient, and cost-effective experience. Our automated tools and data-driven insights provide real-time recommendations and continuous portfolio optimization, ensuring you always have access to the best financial strategies without the high fees and rigid structures of traditional institutions.'
      },
      {
        question: 'Do you offer mobile access to your financial services?',
        answer:
          'Absolutely! Our platform is fully accessible via mobile devices, allowing you to manage your investments, track your savings, and consult with advisors on-the-go. Our user-friendly app ensures you have all the tools and information you need at your fingertips, no matter where you are.'
      },
      {
        question: 'What kind of customer support can clients expect?',
        answer:
          "We pride ourselves on offering exceptional customer support. Our dedicated support team is available 24/7 to assist with any questions or issues you may encounter. Whether you need help navigating the platform, understanding your investment strategy, or resolving technical problems, we're here to ensure you have a seamless experience."
      },
      {
        question: 'How do you maintain transparency with your clients?',
        answer:
          'Transparency is a core value of our startup. We provide clear, detailed reports on your investments and savings, including fees, performance metrics, and risk assessments. Our platform also offers real-time updates and insights, ensuring you are always informed about your financial status and the rationale behind our recommendations.'
      },
      {
        question: 'Are there any hidden fees associated with your services?',
        answer:
          'No, we believe in full transparency when it comes to fees. Our pricing structure is straightforward and clearly outlined on our website. We charge a flat fee for our services, with no hidden costs or surprise charges. You can trust that what you see is what you get, allowing you to plan your finances with confidence.'
      }
    ]
  }
}
