import FAQSection from './FAQSection.vue'

export default {
  title: 'Components/FAQ Section',
  component: FAQSection
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
    subTitle: 'We believe our product should be accessible to all companies, no matter the size',
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
          'Good question! We used to ask this all the time. <br><br> You don’t realize the power of a high-quality UI kit until you start using one. A good UI kit saves you time and money usually spent on meticulously building the same components over and over again. It can 10-100x your workflow.'
      },
      {
        question: 'What is the difference between the three versions?',
        answer: 'We’ve split the PRO version of Untitled UI into three different versions:'
      }
    ]
  }
}
