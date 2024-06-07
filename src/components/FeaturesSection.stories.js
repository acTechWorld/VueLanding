import FeaturesSection from './FeaturesSection.vue'

export default {
  title: 'Components/Features Section',
  component: FeaturesSection
}

const Template = (args) => ({
  components: { FeaturesSection },
  setup: () => ({ args }),
  template: '<FeaturesSection v-bind="args" class="max-w-[1300px] mx-auto"/>'
})

export const Default = Template.bind({})
Default.args = {
  title: 'Beautiful analytics to grow smarter',
  subtitle:
    'Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups',
  features: [
    {
      label: 'Share team imboxes',
      description:
        'Whether you have a team of 2 or 200n our shared team imboxes keep everyone on the same page and in the loop',
      featurePoints: [
        'Leverage autimation to move fast',
        'Always give customers a human to chat to',
        'Automate customer support and close leads faster'
      ],
      img: 'https://creatoom.com/wp-content/uploads/2023/12/scene-with-box-paper-mockups-v4-top-view-1024x683.jpg'
    },
    {
      label: 'Share team imboxes',
      description:
        'Whether you have a team of 2 or 200n our shared team imboxes keep everyone on the same page and in the loop',
      featurePoints: [
        'Leverage autimation to move fast',
        'Always give customers a human to chat to',
        'Automate customer support and close leads faster'
      ],
      video:
        'https://assets-global.website-files.com/636496d3f0ebfdaba9784655/65288f5440e92ae64d88aa65_Untitled UI promo placeholder v2 (compressed)-transcode.mp4'
    },
    {
      label: 'Share team imboxes',
      description:
        'Whether you have a team of 2 or 200n our shared team imboxes keep everyone on the same page and in the loop',
      featurePoints: [
        'Leverage autimation to move fast',
        'Always give customers a human to chat to',
        'Automate customer support and close leads faster'
      ],
      img: 'https://creatoom.com/wp-content/uploads/2023/12/scene-with-box-paper-mockups-v4-top-view-1024x683.jpg'
    },
    {
      label: 'Share team imboxes',
      description:
        'Whether you have a team of 2 or 200n our shared team imboxes keep everyone on the same page and in the loop',
      featurePoints: [
        'Leverage autimation to move fast',
        'Always give customers a human to chat to',
        'Automate customer support and close leads faster'
      ],
      video:
        'https://assets-global.website-files.com/636496d3f0ebfdaba9784655/65288f5440e92ae64d88aa65_Untitled UI promo placeholder v2 (compressed)-transcode.mp4'
    },
    {
      label: 'Share team imboxes',
      description:
        'Whether you have a team of 2 or 200n our shared team imboxes keep everyone on the same page and in the loop',
      featurePoints: [
        'Leverage autimation to move fast',
        'Always give customers a human to chat to',
        'Automate customer support and close leads faster'
      ]
    }
  ]
}
