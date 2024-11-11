import { mount } from '@vue/test-utils'
import { describe, expect, test, vi, beforeEach, afterAll } from 'vitest'
import VideoComponent from './VideoComponent.vue'

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

describe('VideoComponent.vue', () => {
  let wrapper

  const props = {
    video: 'video.mp4',
    muted: true,
    autoplayVideoOnScroll: true,
    playButton: true
  }

  beforeEach(() => {
    wrapper = mount(VideoComponent, {
      props,
      global: {
        stubs: {
          FontAwesomeIcon: true
        }
      }
    })
  })

  afterAll(() => {
    wrapper.unmount()
  })

  test('component should be mounted', () => {
    expect(VideoComponent).toBeTruthy()
    expect(wrapper.find('.video').exists()).toBeTruthy()
  })

  test('renders video with correct src', () => {
    const video = wrapper.find('video')
    expect(video.attributes('src')).toBeUndefined()
    const source = video.find('source')
    expect(source.attributes('src')).toBe(props.video)
    expect(source.attributes('type')).toBe('video/mp4')
  })

  test('renders play button when playButton prop is true', () => {
    expect(wrapper.find('.videoPlayBtn').exists()).toBe(true)
  })

  test('does not render play button when playButton prop is false', async () => {
    await wrapper.setProps({ playButton: false })
    expect(wrapper.find('.videoPlayBtn').exists()).toBe(false)
  })

  test('emits clickPlayButton event when play button is clicked', async () => {
    await wrapper.find('.videoPlayBtn').trigger('click')
    expect(wrapper.emitted('clickPlayButton')).toBeTruthy()
  })
})
