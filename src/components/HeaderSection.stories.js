import HeaderSection from './HeaderSection.vue'
import { fn } from '@storybook/test'

export default {
  title: 'Components/Header Section',
  component: HeaderSection,
  args: { onClickPage: fn() },
  argTypes: {
    menuItems: {
      control: 'object',
      description: `Menu items (simple menu item or with sub-menu items)
      
      menuItems type description:

      (
        | { [category: string]: { name: string; label: string }[] }
        | { name: string; label: string }
      )[]
      `
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
        { name: 'solutions', label: 'Solutions', icon: 'arrow-right' },
        { name: 'tutorials', label: 'Tutorials', icon: 'arrow-right' },
        { name: 'pricing', label: 'Pricing', icon: 'arrow-right' },
        { name: 'releases', label: 'Releases', icon: 'arrow-right' }
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
  companyName: 'VueLanding',
  companyLogo: 'logo_icon.png',
  themeColor: 'secondary'
}
