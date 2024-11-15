import TeamSection from './TeamSection.vue'
import { fn } from '@storybook/test'

export default {
  title: 'Components/Team Section',
  component: TeamSection,
  args: { onClickMember: fn() },
  argTypes: {
    title: {
      control: 'text',
      description: 'The title of the team section'
    },
    subtitle: {
      control: 'text',
      description: 'The subtitle of the team section'
    },
    teamMembers: {
      control: 'object',
      description: `List of team members 
          
      teamMembers type details: 
      
      { 
        img?: string; 
        name?: string; 
        description?: string 
      }[]
      `
    },
    bgColor: {
      control: 'color',
      description: 'Background color of the section | type hexadecimal'
    },
    color: {
      control: 'color',
      description: 'Text color of the section | type hexadecimal'
    },
    themeColor: {
      options: [null, 'primary', 'secondary', 'tertiary'],
      control: { type: 'radio' },
      description: 'Theme color of the section'
    },
    animated: {
      control: 'boolean',
      description: 'Enable/Disable animations'
    },
    membersClickable: {
      control: 'boolean',
      description: 'Are team members clickable?'
    }
  }
}

const Template = (args) => ({
  components: { TeamSection },
  setup: () => ({ args }),
  template: '<TeamSection v-bind="args"/>'
})

export const Default = Template.bind({})
Default.args = {
  title: 'Meet our team',
  subtitle:
    'Our philosophy --- hire a team of diverse, passionate people and foster a culture that empowers you to do your best work',
  teamMembers: [
    {
      img: 'https://img.freepik.com/photos-gratuite/portrait-homme-riant_23-2148859440.jpg?size=338&ext=jpg&ga=GA1.1.2116175301.1713916800&semt=ais',
      name: 'Amélie Laurent',
      description: 'Founder & CEO'
    },
    {
      img: 'https://img.freepik.com/photos-gratuite/portrait-homme-riant_23-2148859448.jpg?size=338&ext=jpg&ga=GA1.1.2116175301.1713916800&semt=ais',
      name: 'Marco Kelly',
      description: 'Developper'
    },
    {
      img: 'https://img.freepik.com/photos-gratuite/portrait-homme-riant_23-2148859440.jpg?size=338&ext=jpg&ga=GA1.1.2116175301.1713916800&semt=ais',
      name: 'Emily Davis',
      description: 'Founder & CEO'
    },
    {
      img: 'https://img.freepik.com/photos-gratuite/portrait-homme-riant_23-2148859448.jpg?size=338&ext=jpg&ga=GA1.1.2116175301.1713916800&semt=ais',
      name: 'Michael Brown',
      description: 'Developper'
    },
    {
      img: 'https://img.freepik.com/photos-gratuite/portrait-homme-riant_23-2148859440.jpg?size=338&ext=jpg&ga=GA1.1.2116175301.1713916800&semt=ais',
      name: 'Emily Davis',
      description: 'Founder & CEO'
    },
    {
      img: 'https://img.freepik.com/photos-gratuite/portrait-homme-riant_23-2148859448.jpg?size=338&ext=jpg&ga=GA1.1.2116175301.1713916800&semt=ais',
      name: 'Marck Johnson',
      description: 'Developper'
    },
    {
      img: 'https://img.freepik.com/photos-gratuite/portrait-homme-riant_23-2148859440.jpg?size=338&ext=jpg&ga=GA1.1.2116175301.1713916800&semt=ais',
      name: 'Jane Smith',
      description: 'Founder & CEO'
    },
    {
      img: 'https://img.freepik.com/photos-gratuite/portrait-homme-riant_23-2148859448.jpg?size=338&ext=jpg&ga=GA1.1.2116175301.1713916800&semt=ais',
      name: 'John Doe',
      description: 'Developper'
    }
  ],
  themeColor: 'primary',
  animated: true,
  membersClickable: true
}

export const Night = Template.bind({})
Night.args = {
  bgColor: '#160e1a',
  color: '#e6eaef',
  title: 'Meet our team',
  subtitle:
    'Our philosophy --- hire a team of diverse, passionate people and foster a culture that empowers you to do your best work',
  teamMembers: [
    {
      img: 'https://img.freepik.com/photos-gratuite/portrait-homme-riant_23-2148859440.jpg?size=338&ext=jpg&ga=GA1.1.2116175301.1713916800&semt=ais',
      name: 'Amélie Laurent',
      description: 'Founder & CEO'
    },
    {
      img: 'https://img.freepik.com/photos-gratuite/portrait-homme-riant_23-2148859448.jpg?size=338&ext=jpg&ga=GA1.1.2116175301.1713916800&semt=ais',
      name: 'Marco Kelly',
      description: 'Developper'
    },
    {
      img: 'https://img.freepik.com/photos-gratuite/portrait-homme-riant_23-2148859440.jpg?size=338&ext=jpg&ga=GA1.1.2116175301.1713916800&semt=ais',
      name: 'Emily Davis',
      description: 'Founder & CEO'
    },
    {
      img: 'https://img.freepik.com/photos-gratuite/portrait-homme-riant_23-2148859448.jpg?size=338&ext=jpg&ga=GA1.1.2116175301.1713916800&semt=ais',
      name: 'Michael Brown',
      description: 'Developper'
    },
    {
      img: 'https://img.freepik.com/photos-gratuite/portrait-homme-riant_23-2148859440.jpg?size=338&ext=jpg&ga=GA1.1.2116175301.1713916800&semt=ais',
      name: 'Emily Davis',
      description: 'Founder & CEO'
    },
    {
      img: 'https://img.freepik.com/photos-gratuite/portrait-homme-riant_23-2148859448.jpg?size=338&ext=jpg&ga=GA1.1.2116175301.1713916800&semt=ais',
      name: 'Marck Johnson',
      description: 'Developper'
    },
    {
      img: 'https://img.freepik.com/photos-gratuite/portrait-homme-riant_23-2148859440.jpg?size=338&ext=jpg&ga=GA1.1.2116175301.1713916800&semt=ais',
      name: 'Jane Smith',
      description: 'Founder & CEO'
    },
    {
      img: 'https://img.freepik.com/photos-gratuite/portrait-homme-riant_23-2148859448.jpg?size=338&ext=jpg&ga=GA1.1.2116175301.1713916800&semt=ais',
      name: 'John Doe',
      description: 'Developper'
    }
  ],
  themeColor: 'primary',
  animated: true,
  membersClickable: true
}
