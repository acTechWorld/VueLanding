import AccordionComponent from './AccordionComponent.vue'

export default {
  title: 'Commons/Accordion',
  component: AccordionComponent
}

const Template = (args) => ({
  components: { AccordionComponent },
  setup: () => ({ args }),
  template:
    '<AccordionComponent width="500" v-bind="args"><template v-slot:header><p>Why do I need a UI kit?</p></template><template v-slot:content><p>Good question! We used to ask this all the time. You don’t realize the power of a high-quality UI kit until you start using one. A good UI kit saves you time and money usually spent on meticulously building the same components over and over again. It can 10-100x your workflow.</p></template></AccordionComponent>'
})

export const Default = Template.bind({})
