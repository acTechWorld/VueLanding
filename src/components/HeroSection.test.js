import { mount } from '@vue/test-utils'
import { describe, expect, test, beforeAll, afterAll, vi } from 'vitest'
import HeroSection from './HeroSection.vue'
import CTAButton from '@/commons/CTAButton.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons'

library.add(faPlay, faCircleXmark)
// Mock IntersectionObserver
global.IntersectionObserver = class {
  constructor(callback) {
    this.callback = callback
  }
  observe(element) {
    this.element = element
  }
  unobserve() {
    this.element = null
  }
  disconnect() {
    this.element = null
  }
  triggerIntersecting(isIntersecting) {
    this.callback([{ isIntersecting, target: this.element }])
  }
}

// Mock play and pause methods
const playMock = vi.fn()
const pauseMock = vi.fn()
const loadMock = vi.fn()

HTMLVideoElement.prototype.play = playMock
HTMLVideoElement.prototype.pause = pauseMock
HTMLVideoElement.prototype.load = loadMock

describe('HeroSection.vue', () => {
  let wrapper

  beforeAll(() => {
    wrapper = mount(HeroSection, {
      props: {
        type: 'default',
        title: 'Hero Section Title',
        subTitle: 'Hero Section Subtitle',
        img: 'https://via.placeholder.com/150',
        video: 'https://www.w3schools.com/html/mov_bbb.mp4',
        ctaButtons: [
          { name: 'Button1', label: 'Button1' },
          { name: 'Button2', label: 'Button2' }
        ],
        bgColor: '#FFFFFF',
        color: '#000000',
        themeColor: 'light',
        autoplayVideoOnScroll: true,
        overlayVideoPlayer: true
      },
      global: {
        components: {
          CTAButton
        }
      }
    })
  })

  afterAll(() => {
    wrapper.unmount()
  })

  test('component should be mounted', () => {
    expect(HeroSection).toBeTruthy()
    expect(wrapper.find('.heroSection').exists()).toBeTruthy()
  })

  test('renders title and subtitle correctly', () => {
    const title = wrapper.find('.heroSection_title')
    const subTitle = wrapper.find('.heroSection_subTitle')

    expect(title.exists()).toBe(true)
    expect(title.text()).toBe('Hero Section Title')

    expect(subTitle.exists()).toBe(true)
    expect(subTitle.text()).toBe('Hero Section Subtitle')
  })

  test('renders CTA buttons correctly', () => {
    const ctaButtons = wrapper.findAllComponents(CTAButton)

    expect(ctaButtons.length).toBe(2)
    expect(ctaButtons[0].props().name).toBe('Button1')
    expect(ctaButtons[0].props().label).toBe('Button1')
    expect(ctaButtons[1].props().name).toBe('Button2')
    expect(ctaButtons[1].props().label).toBe('Button2')
  })

  test('renders image correctly', () => {
    const img = wrapper.find('.heroSection_img')

    expect(img.exists()).toBe(true)
    expect(img.attributes().src).toBe('https://via.placeholder.com/150')
  })

  test('renders video correctly', async () => {
    expect(wrapper.find('.heroSection_video').exists()).toBe(false)
    await wrapper.setProps({ img: undefined })

    expect(wrapper.find('.heroSection_video').exists()).toBe(true)
    expect(wrapper.find('.heroSection_video').find('source').attributes().src).toBe(
      'https://www.w3schools.com/html/mov_bbb.mp4'
    )
  })

  test('emits clickCtaButton event when CTA button is clicked', async () => {
    const ctaButton = wrapper.findAllComponents(CTAButton).at(0)
    await ctaButton.trigger('click')

    expect(wrapper.emitted().clickCtaButton[0]).toEqual(['Button1'])
  })

  test('displays video player when play button is clicked', async () => {
    const playButton = wrapper.find('.heroSection_videoPlayBtn')
    await playButton.trigger('click')

    expect(wrapper.vm.displayPlayer).toBe(true)
    const videoPlayer = wrapper.find('.heroSection_videoPlayer')
    expect(videoPlayer.exists()).toBe(true)
  })

  test('hides video player when close button is clicked', async () => {
    wrapper.vm.displayPlayer = true
    await wrapper.vm.$nextTick()

    const closeButton = wrapper.find('.fa-circle-xmark')
    await closeButton.trigger('click')

    expect(wrapper.vm.displayPlayer).toBe(false)
  })
})
