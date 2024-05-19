import SocialProof from './SocialProof.vue'

export default {
  title: 'Components/Social Proof',
  component: SocialProof,
  argTypes: {
    color: { control: 'color' },
    bgColor: { control: 'color' },
    themeColor: {
      options: [null, 'primary', 'secondary', 'tertiary'],
      control: { type: 'radio' }
    }
  }
}

const Template = (args) => ({
  components: { SocialProof },
  setup: () => ({ args }),
  template: '<SocialProof v-bind="args"/>'
})

export const Banner = Template.bind({})
Banner.args = {
  type: 'banner',
  datas: [
    {
      testimony:
        "Untitled is the best $129 've spent on my business in a long time. I'm going to keep using it and recommending it to every designer I know.",
      name: 'Caitlyn King',
      title: 'Head of Design, Layers',
      stars: 5,
      imgProfile:
        'https://img.freepik.com/photos-gratuite/portrait-homme-riant_23-2148859448.jpg?size=338&ext=jpg&ga=GA1.1.2116175301.1713916800&semt=ais'
    },
    {
      testimony:
        "Over the years we've featured hundreds of UI kits on UXCrush, but Untitled UI is by far the most comprehensive and detailed I've seen yet. A must have for any designer!",
      name: 'Caitlyn King',
      title: 'Head of Design, Layers',
      stars: 3,
      imgProfile:
        'https://img.freepik.com/photos-gratuite/portrait-homme-riant_23-2148859440.jpg?size=338&ext=jpg&ga=GA1.1.2116175301.1713916800&semt=ais'
    },
    {
      testimony: 'Love the simplicity of the service and the prompt customer',
      name: 'Caitlyn King',
      title: 'Head of Design, Layers',
      stars: 5,
      imgProfile:
        'https://img.freepik.com/photos-gratuite/portrait-homme-riant_23-2148859448.jpg?size=338&ext=jpg&ga=GA1.1.2116175301.1713916800&semt=ais'
    }
  ]
}
