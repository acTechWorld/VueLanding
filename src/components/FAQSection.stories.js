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
    title: 'Simple, transparent pricing',
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
        question: 'Why do I need a UI kit?',
        answer:
          'Good question! We used to ask this all the time. <br><br> You don’t realize the power of a high-quality UI kit until you start using one. A good UI kit saves you time and money usually spent on meticulously building the same components over and over again. It can 10-100x your workflow.<br><br>Good question! We used to ask this all the time. <br><br> You don’t realize the power of a high-quality UI kit until you start using one. A good UI kit saves you time and money usually spent on meticulously building the same components over and over again. It can 10-100x your workflow.'
      },
      {
        question: 'What is the difference between the three versions?',
        answer: 'We’ve split the PRO version of Untitled UI into three different versions:'
      }
    ]
  }
}
