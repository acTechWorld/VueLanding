import SwiperComponent from './SwiperComponent.vue'

export default {
  title: 'Components/Swiper',
  component: SwiperComponent
}

const Template = (args) => ({
  components: { SwiperComponent },
  setup: () => ({ args }),
  template:
    '<SwiperComponent v-bind="args"><div class="text-center bg-red-500 text-white"> <p>Slide 1</p></div> <div class="text-center bg-red-500 text-white"> <p>Slide 2</p></div> <div class="text-center bg-red-500 text-white"> <p>Slide 3</p></div></SwiperComponent>'
})

export const Swipper = Template.bind({})
Swipper.args = {
  animationType: 'appear'
}
