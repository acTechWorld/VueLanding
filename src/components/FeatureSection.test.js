import { mount } from '@vue/test-utils'
import { describe, expect, test, beforeEach } from 'vitest'
import FeaturesSection from './FeaturesSection.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

library.add(faCheck)

// Mock components
const MockVideoComponent = {
  name: 'VideoComponent',
  props: ['video'],
  template: '<div><slot /></div>'
}

const MockScrollTransitionContainer = {
  name: 'ScrollTransitionContainer',
  template: '<div><slot /></div>'
}

describe('FeaturesSection.vue', () => {
  let wrapper

  const props = {
    title: 'Features Section Title',
    subtitle: 'Features Section Subtitle',
    features: [
      {
        label: 'Feature 1',
        description: 'Description for feature 1',
        featurePoints: ['Point 1', 'Point 2'],
        img: 'image1.jpg',
        bgColor: '#ffffff',
        color: '#000000'
      },
      {
        label: 'Feature 2',
        description: 'Description for feature 2',
        featurePoints: ['Point 3', 'Point 4'],
        video: 'video1.mp4',
        bgColor: '#ffffff',
        color: '#000000'
      }
    ],
    bgColor: '#ffffff',
    color: '#000000',
    themeColor: 'primary'
  }

  beforeEach(() => {
    wrapper = mount(FeaturesSection, {
      props,
      global: {
        stubs: {
          VideoComponent: MockVideoComponent,
          ScrollTransitionContainer: MockScrollTransitionContainer
        }
      }
    })
  })

  test('component should be mounted', () => {
    expect(FeaturesSection).toBeTruthy()
    expect(wrapper.find('.featuresSection').exists()).toBeTruthy()
  })

  test('renders the correct title and subtitle', () => {
    expect(wrapper.find('.featuresSection_title').text()).toBe(props.title)
    expect(wrapper.find('.featuresSection_subtitle').text()).toBe(props.subtitle)
  })

  test('renders the correct number of features', () => {
    const features = wrapper.findAll('.featuresSection_feature')
    expect(features.length).toBe(props.features.length)
  })

  test('renders the correct feature labels and descriptions', () => {
    props.features.forEach((feature, featureIndex) => {
      const featureWrapper = wrapper.findAll('.featuresSection_feature').at(featureIndex)
      if (feature.label) {
        expect(featureWrapper.find('.featuresSection_feature_label').text()).toBe(feature.label)
      }
      if (feature.description) {
        expect(featureWrapper.find('.featuresSection_feature_description').text()).toBe(
          feature.description
        )
      }
    })
  })

  test('renders the correct feature points', () => {
    const featureWrappers = wrapper.findAll('.featuresSection_feature')
    props.features.forEach((feature, featureIndex) => {
      const points = featureWrappers.at(featureIndex).findAll('.featuresSection_feature_point')
      feature.featurePoints.forEach((point, pointIndex) => {
        expect(points.at(pointIndex).text()).toContain(point)
      })
    })
  })

  test('renders images and videos correctly', () => {
    props.features.forEach((feature, featureIndex) => {
      const featureWrapper = wrapper.findAll('.featuresSection_feature').at(featureIndex)
      if (feature.img) {
        expect(featureWrapper.find('img').attributes('src')).toBe(feature.img)
      }
      if (feature.video) {
        expect(featureWrapper.findComponent(MockVideoComponent).props('video')).toBe(feature.video)
      }
    })
  })

  test('applies correct styles based on props', () => {
    const section = wrapper.find('.featuresSection')
    const expectedStyle = {
      color: 'rgb(0, 0, 0)', // Assuming getTxtColor('#000000', 'light') returns 'rgb(0, 0, 0)'
      backgroundColor: 'rgb(255, 255, 255)' // Assuming getBgColor('#ffffff', 'light') returns 'rgb(255, 255, 255)'
    }
    expect(section.attributes('style')).toContain(`color: ${expectedStyle.color}`)
    expect(section.attributes('style')).toContain(
      `background-color: ${expectedStyle.backgroundColor}`
    )

    props.features.forEach((feature, featureIndex) => {
      const featureWrapper = wrapper.findAll('.featuresSection_feature').at(featureIndex)
      const expectedFeatureStyle = {
        color: 'rgb(0, 0, 0)', // Assuming getTxtColor(undefined, undefined) returns 'rgb(0, 0, 0)'
        backgroundColor: 'rgb(255, 255, 255)' // Assuming getBgColor(undefined, undefined) returns 'rgb(255, 255, 255)'
      }
      expect(featureWrapper.attributes('style')).toContain(`color: ${expectedFeatureStyle.color}`)
      expect(featureWrapper.attributes('style')).toContain(
        `background-color: ${expectedFeatureStyle.backgroundColor}`
      )
    })
  })
})
