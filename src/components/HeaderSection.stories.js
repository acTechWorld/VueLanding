import HeaderSection from './HeaderSection.vue'
import { fn } from '@storybook/test'

export default {
  title: 'Components/Header Section',
  component: HeaderSection,
  args: { onClickPage: fn() },
  argTypes: {
    companyLogo: {
      control: 'string',
      description: 'logo of the company'
    },
    companyName: {
      control: 'string',
      description: 'name of the company'
    },
    menuItems: {
      control: 'object',
      description: `Menu items (simple menu item or with sub-menu items)
      
      menuItems type description:

      (
          { 
            name?: string
            label?: string
            category?: string
            large?: boolean
            subMenuItems: {
              name: string
              label: string
              subtitle?: string
              icon?: IconName
              img?: string
              bgColor?: \`#\${string}\`
              color?: \`#\${string}\`
              themeColor?: 'primary' | 'secondary' | 'tertiary'
            }
            bgColor?: \`#\${string}\`
            color?: \`#\${string}\`
            themeColor?: 'primary' | 'secondary' | 'tertiary'
          }
      )[]

      - simple menu item: name + label
      - menu item with sub-menu: category + subMenuItems
      `
    },
    sticky: {
      control: 'boolean',
      description: 'is nav bar sticky ?'
    },
    transparent: {
      control: 'boolean',
      description: 'is background transparent ?'
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
      description: 'Theme color for the section'
    }
  }
}

const Template = (args) => ({
  components: { HeaderSection },
  setup: () => ({ args }),
  template: '<div class="h-[150vh]"><HeaderSection v-bind="args"/></div>'
})

export const Default = Template.bind({})
Default.args = {
  menuItems: [
    { name: 'home', label: 'Home' },
    {
      category: 'Product',
      large: true,
      subMenuItems: [
        {
          name: 'overview',
          label: 'Overview',
          icon: 'arrow-right',
          subtitle: 'See the overview of our biggest project, go to the overview page',
          img: 'logo_transparent.png',
          themeColor: 'tertiary'
        },
        {
          name: 'features',
          label: 'Features',
          icon: 'arrow-right',
          img: 'logo_transparent.png',
          themeColor: 'primary'
        },
        { name: 'solutions', label: 'Solutions', icon: 'arrow-right', img: 'logo_transparent.png' },
        { name: 'tutorials', label: 'Tutorials', icon: 'arrow-right', img: 'logo_transparent.png' },
        { name: 'pricing', label: 'Pricing', icon: 'arrow-right', img: 'logo_transparent.png' },
        { name: 'releases', label: 'Releases', icon: 'arrow-right', img: 'logo_transparent.png' }
      ]
    },
    {
      category: 'Company',
      subMenuItems: [
        { name: 'aboutUs', label: 'About us' },
        { name: 'careers', label: 'Careers' },
        { name: 'press', label: 'Press' },
        { name: 'news', label: 'News' },
        { name: 'mediaKit', label: 'Media kit' },
        { name: 'contact', label: 'Contact' }
      ]
    },
    {
      category: 'Resources',
      subMenuItems: [
        { name: 'blog', label: 'Blog', icon: 'arrow-right' },
        { name: 'newsletter', label: 'Newsletter' },
        { name: 'events', label: 'Events' },
        { name: 'helpCentre', label: 'Help centre' },
        { name: 'tutorials', label: 'Tutorials' },
        { name: 'support', label: 'Support' }
      ]
    }
  ],
  companyName: 'Finaceo',
  companyLogo: 'logo_icon.png'
}

export const Night = Template.bind({})
Night.args = {
  menuItems: [
    { name: 'home', label: 'Home' },
    {
      category: 'Product',
      large: true,
      subMenuItems: [
        {
          name: 'overview',
          label: 'Overview',
          icon: 'arrow-right',
          subtitle: 'See the overview of our biggest project, go to the overview page',
          img: 'logo_transparent.png',
          themeColor: 'tertiary'
        },
        {
          name: 'features',
          label: 'Features',
          icon: 'arrow-right',
          img: 'logo_transparent.png',
          themeColor: 'primary'
        },
        { name: 'solutions', label: 'Solutions', icon: 'arrow-right', img: 'logo_transparent.png' },
        { name: 'tutorials', label: 'Tutorials', icon: 'arrow-right', img: 'logo_transparent.png' },
        { name: 'pricing', label: 'Pricing', icon: 'arrow-right', img: 'logo_transparent.png' },
        { name: 'releases', label: 'Releases', icon: 'arrow-right', img: 'logo_transparent.png' }
      ]
    },
    {
      category: 'Company',
      subMenuItems: [
        { name: 'aboutUs', label: 'About us' },
        { name: 'careers', label: 'Careers' },
        { name: 'press', label: 'Press' },
        { name: 'news', label: 'News' },
        { name: 'mediaKit', label: 'Media kit' },
        { name: 'contact', label: 'Contact' }
      ]
    },
    {
      category: 'Resources',
      subMenuItems: [
        { name: 'blog', label: 'Blog', icon: 'arrow-right' },
        { name: 'newsletter', label: 'Newsletter' },
        { name: 'events', label: 'Events' },
        { name: 'helpCentre', label: 'Help centre' },
        { name: 'tutorials', label: 'Tutorials' },
        { name: 'support', label: 'Support' }
      ]
    }
  ],
  companyName: 'Finaceo',
  companyLogo: 'logo_icon.png',
  bgColor: '#1f2123',
  color: '#e6eaef'
}
