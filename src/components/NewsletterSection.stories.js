import NewsletterSection from './NewsletterSection.vue'

export default {
  title: 'Components/Newsletter Section',
  component: NewsletterSection
}

const Template = (args) => ({
  components: { NewsletterSection },
  setup: () => ({ args }),
  template: '<NewsletterSection v-bind="args" class="max-w-[1400px]"  />'
})

export const Default = Template.bind({})
Default.args = {
  title: 'Sign up for our newsletter',
  subtitle: 'Be the first to know about releases and industry news and insights',
  img: 'https://creatoom.com/wp-content/uploads/2023/12/scene-with-box-paper-mockups-v4-top-view-1024x683.jpg',
  placeholderInput: 'Enter your email',
  ctaButton: {
    name: 'subscribe',
    label: 'Subscribe',
    themeColor: 'tertiary'
  },
  bgColor: undefined,
  color: undefined,
  themeColor: undefined
}
