import FeaturesSection from './FeaturesSection.vue'

export default {
  title: 'Components/Features Section',
  component: FeaturesSection,
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
  template: '<FeaturesSection v-bind="args" class="max-w-[1300px] mx-auto"/>'
})

export const Default = Template.bind({})
Default.args = {
  title: 'Beautiful analytics to grow smarter',
  subtitle:
    'Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups',
  bgColor: '#ffffff',
  color: '#000000',
  themeColor: 'primary',
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
      img: 'https://creatoom.com/wp-content/uploads/2023/12/scene-with-box-paper-mockups-v4-top-view-1024x683.jpg',
      bgColor: '#fff',
      color: '#000'
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
        'https://assets-global.website-files.com/636496d3f0ebfdaba9784655/65288f5440e92ae64d88aa65_Untitled UI promo placeholder v2 (compressed)-transcode.mp4',
      bgColor: '#fff',
      color: '#000'
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
      img: 'https://creatoom.com/wp-content/uploads/2023/12/scene-with-box-paper-mockups-v4-top-view-1024x683.jpg',
      bgColor: '#fff',
      color: '#000'
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
        'https://assets-global.website-files.com/636496d3f0ebfdaba9784655/65288f5440e92ae64d88aa65_Untitled UI promo placeholder v2 (compressed)-transcode.mp4',
      bgColor: '#fff',
      color: '#000'
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
      img: 'https://creatoom.com/wp-content/uploads/2023/12/scene-with-box-paper-mockups-v4-top-view-1024x683.jpg',
      bgColor: '#fff',
      color: '#000'
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
        'https://assets-global.website-files.com/636496d3f0ebfdaba9784655/65288f5440e92ae64d88aa65_Untitled UI promo placeholder v2 (compressed)-transcode.mp4',
      bgColor: '#fff',
      color: '#000'
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
      img: 'https://creatoom.com/wp-content/uploads/2023/12/scene-with-box-paper-mockups-v4-top-view-1024x683.jpg',
      bgColor: '#fff',
      color: '#000'
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
        'https://assets-global.website-files.com/636496d3f0ebfdaba9784655/65288f5440e92ae64d88aa65_Untitled UI promo placeholder v2 (compressed)-transcode.mp4',
      bgColor: '#fff',
      color: '#000'
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
      img: 'https://creatoom.com/wp-content/uploads/2023/12/scene-with-box-paper-mockups-v4-top-view-1024x683.jpg',
      bgColor: '#fff',
      color: '#000'
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
        'https://assets-global.website-files.com/636496d3f0ebfdaba9784655/65288f5440e92ae64d88aa65_Untitled UI promo placeholder v2 (compressed)-transcode.mp4',
      bgColor: '#fff',
      color: '#000'
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
      img: 'https://creatoom.com/wp-content/uploads/2023/12/scene-with-box-paper-mockups-v4-top-view-1024x683.jpg',
      bgColor: '#fff',
      color: '#000'
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
        'https://assets-global.website-files.com/636496d3f0ebfdaba9784655/65288f5440e92ae64d88aa65_Untitled UI promo placeholder v2 (compressed)-transcode.mp4',
      bgColor: '#fff',
      color: '#000'
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
      bgColor: '#fff',
      color: '#000'
    }
  ]
}
