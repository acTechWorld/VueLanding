import SocialProof from './SocialProof.vue'

export default {
  title: 'Components/Social Proof',
  component: SocialProof
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
      testimony: 'Love the simplicity of the service and the prompt customer',
      name: 'Caitlyn King',
      title: 'Head of Design, Layers',
      stars: 5,
      imgProfil:
        'https://img.freepik.com/photos-gratuite/portrait-homme-riant_23-2148859448.jpg?size=338&ext=jpg&ga=GA1.1.2116175301.1713916800&semt=ais'
    },
    {
      testimony: 'Love the simplicity of the service and the prompt customer',
      name: 'Caitlyn King',
      title: 'Head of Design, Layers',
      stars: 5,
      imgProfil:
        'https://img.freepik.com/photos-gratuite/portrait-homme-riant_23-2148859448.jpg?size=338&ext=jpg&ga=GA1.1.2116175301.1713916800&semt=ais'
    },
    {
      testimony: 'Love the simplicity of the service and the prompt customer',
      name: 'Caitlyn King',
      title: 'Head of Design, Layers',
      stars: 5,
      imgProfil:
        'https://img.freepik.com/photos-gratuite/portrait-homme-riant_23-2148859448.jpg?size=338&ext=jpg&ga=GA1.1.2116175301.1713916800&semt=ais'
    }
  ]
}
