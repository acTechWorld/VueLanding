import SocialProofSection from './SocialProofSection.vue'

export default {
  title: 'Components/Social Proof Section',
  component: SocialProofSection,
  argTypes: {
    datas: {
      control: {
        type: 'object'
      },
      description: `List of social proof data
        
      - datas type details:
        
      { 
        testimony?: string; 
        name?: string; 
        title?: string; 
        imgProfile?: string; 
        stars?: number 
      }[]`
    },
    bgColor: {
      control: 'color',
      description: 'Background color of the component | type hexadecimal'
    },
    color: {
      control: 'color',
      description: 'Text color of the component | type hexadecimal'
    },
    themeColor: {
      options: [null, 'primary', 'secondary', 'tertiary'],
      control: { type: 'radio' },
      description: 'Theme color of the component'
    },
    animationType: {
      options: ['off', 'slide', 'appear'],
      control: { type: 'radio' },
      description: 'Animation type for the Swiper component'
    },
    infinite: {
      control: 'boolean',
      description: 'Enable/Disable infinite scrolling'
    }
  }
}

const Template = (args) => ({
  components: { SocialProofSection },
  setup: () => ({ args }),
  template: '<SocialProofSection v-bind="args"/>'
})

export const Banner = Template.bind({})
Banner.args = {
  datas: [
    {
      name: 'John Doe',
      title: 'Small Business Owner',
      imgProfile:
        'https://img.freepik.com/photos-gratuite/portrait-homme-riant_23-2148859448.jpg?size=338&ext=jpg&ga=GA1.1.2116175301.1713916800&semt=ais',
      stars: 5,
      testimony:
        "The personalized financial advice I received from this app has been a game-changer for my business. It's incredibly easy to use and has helped me make smarter financial decisions."
    },
    {
      name: 'Jane Smith',
      title: 'Freelancer',
      imgProfile:
        'https://img.freepik.com/photos-gratuite/portrait-homme-riant_23-2148859748.jpg?size=338&ext=jpg&ga=GA1.1.2116175301.1713916800&semt=ais',
      stars: 5,
      testimony:
        "I love how the app's automated savings feature helps me put money aside without even thinking about it. The investment management tools are top-notch and have significantly boosted my returns."
    },
    {
      name: 'Mark Johnson',
      title: 'Investor',
      imgProfile:
        'https://img.freepik.com/photos-gratuite/portrait-homme-riant_23-2148859648.jpg?size=338&ext=jpg&ga=GA1.1.2116175301.1713916800&semt=ais',
      stars: 5,
      testimony:
        'The data-driven insights provided by this platform are outstanding. I appreciate the transparency and the detailed reports on my investments. Highly recommend it to anyone looking to manage their finances effectively.'
    },
    {
      name: 'Emily Davis',
      title: 'Tech Entrepreneur',
      imgProfile:
        'https://img.freepik.com/photos-gratuite/portrait-homme-riant_23-2148859548.jpg?size=338&ext=jpg&ga=GA1.1.2116175301.1713916800&semt=ais',
      stars: 5,
      testimony:
        "Having access to a dedicated financial advisor through the Enterprise Plan has been invaluable. The app's features are comprehensive and user-friendly, making it an essential tool for my financial planning."
    },
    {
      name: 'Michael Brown',
      title: 'Teacher',
      imgProfile:
        'https://img.freepik.com/photos-gratuite/portrait-homme-riant_23-2148859848.jpg?size=338&ext=jpg&ga=GA1.1.2116175301.1713916800&semt=ais',
      stars: 4,
      testimony:
        "The basic plan offers everything I need to manage my finances. The customer support is excellent, and the app's interface is very intuitive. It's made budgeting and saving so much easier."
    }
  ],
  themeColor: 'primary',
  animationType: 'appear',
  infinite: true
}

export const Night = Template.bind({})
Night.args = {
  bgColor: '#160e1a',
  color: '#e6eaef',
  datas: [
    {
      name: 'John Doe',
      title: 'Small Business Owner',
      imgProfile:
        'https://img.freepik.com/photos-gratuite/portrait-homme-riant_23-2148859448.jpg?size=338&ext=jpg&ga=GA1.1.2116175301.1713916800&semt=ais',
      stars: 5,
      testimony:
        "The personalized financial advice I received from this app has been a game-changer for my business. It's incredibly easy to use and has helped me make smarter financial decisions."
    },
    {
      name: 'Jane Smith',
      title: 'Freelancer',
      imgProfile:
        'https://img.freepik.com/photos-gratuite/portrait-homme-riant_23-2148859748.jpg?size=338&ext=jpg&ga=GA1.1.2116175301.1713916800&semt=ais',
      stars: 5,
      testimony:
        "I love how the app's automated savings feature helps me put money aside without even thinking about it. The investment management tools are top-notch and have significantly boosted my returns."
    },
    {
      name: 'Mark Johnson',
      title: 'Investor',
      imgProfile:
        'https://img.freepik.com/photos-gratuite/portrait-homme-riant_23-2148859648.jpg?size=338&ext=jpg&ga=GA1.1.2116175301.1713916800&semt=ais',
      stars: 5,
      testimony:
        'The data-driven insights provided by this platform are outstanding. I appreciate the transparency and the detailed reports on my investments. Highly recommend it to anyone looking to manage their finances effectively.'
    },
    {
      name: 'Emily Davis',
      title: 'Tech Entrepreneur',
      imgProfile:
        'https://img.freepik.com/photos-gratuite/portrait-homme-riant_23-2148859548.jpg?size=338&ext=jpg&ga=GA1.1.2116175301.1713916800&semt=ais',
      stars: 5,
      testimony:
        "Having access to a dedicated financial advisor through the Enterprise Plan has been invaluable. The app's features are comprehensive and user-friendly, making it an essential tool for my financial planning."
    },
    {
      name: 'Michael Brown',
      title: 'Teacher',
      imgProfile:
        'https://img.freepik.com/photos-gratuite/portrait-homme-riant_23-2148859848.jpg?size=338&ext=jpg&ga=GA1.1.2116175301.1713916800&semt=ais',
      stars: 4,
      testimony:
        "The basic plan offers everything I need to manage my finances. The customer support is excellent, and the app's interface is very intuitive. It's made budgeting and saving so much easier."
    }
  ],
  themeColor: 'primary',
  animationType: 'appear',
  infinite: true
}
