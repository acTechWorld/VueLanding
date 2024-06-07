import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import NewsletterSection from './NewsletterSection.vue'
import CTAButton from '@/commons/CTAButton.vue'

describe('NewsletterSection component', () => {
  const props = {
    title: 'Stay Updated',
    subtitle: 'Subscribe to our newsletter to get the latest updates.',
    img: 'https://via.placeholder.com/400',
    placeholderInput: 'Enter your email',
    ctaButton: {
      name: 'subscribe',
      label: 'Subscribe'
    },
    bgColor: '#FFFFFF',
    color: '#000000',
    themeColor: 'light'
  }

  const wrapper = mount(NewsletterSection, {
    props
  })

  test('component should be mounted', () => {
    expect(NewsletterSection).toBeTruthy()
    expect(wrapper.find('.newsletterSection').exists()).toBeTruthy()
  })

  test('renders title and subtitle', () => {
    expect(wrapper.find('.newsletterSection_title').text()).toBe(props.title)
    expect(wrapper.find('.newsletterSection_subTitle').text()).toBe(props.subtitle)
  })

  test('renders input with correct placeholder', () => {
    const input = wrapper.find('.newsletterSection_emailCtn_input')
    expect(input.attributes('placeholder')).toBe(props.placeholderInput)
  })

  test('renders CTA button with correct label', () => {
    const ctaButton = wrapper.findComponent(CTAButton)
    expect(ctaButton.props('label')).toBe(props.ctaButton.label)
  })

  test('renders image if img prop is provided', () => {
    const img = wrapper.find('.newsletterSection_img')
    expect(img.exists()).toBeTruthy()
    expect(img.attributes('src')).toBe(props.img)
  })

  test('does not render image if img prop is not provided', () => {
    const wrapperWithoutImg = mount(NewsletterSection, {
      props: {
        ...props,
        img: undefined
      }
    })
    expect(wrapperWithoutImg.find('.newsletterSection_img').exists()).toBe(false)
  })

  test('emits submit event with email value when CTA button is clicked', async () => {
    const emailInput = wrapper.find('.newsletterSection_emailCtn_input')
    await emailInput.setValue('test@example.com')

    const ctaButton = wrapper.findComponent(CTAButton)
    await ctaButton.trigger('click')

    expect(wrapper.emitted().submit).toBeTruthy()
    expect(wrapper.emitted().submit[0]).toEqual(['test@example.com'])
  })
})
