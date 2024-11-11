import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import CTASection from './CTASection.vue'

describe('when component is mounted', () => {
  const props = {
    title: 'Start your free trial',
    subtitle: 'Join over 4000 statups already growing up with us',
    ctaButtons: [
      {
        name: 'learnMore',
        label: 'Learn more',
        themeColor: 'secondary'
      },
      {
        name: 'getStarted',
        label: 'Get started',
        themeColor: 'tertiary'
      }
    ]
  }
  const wrapper = mount(CTASection, {
    props: props
  })

  test('component should be mounted', () => {
    expect(CTASection).toBeTruthy()
    expect(wrapper.find('.cTASection').exists()).toBeTruthy()
  })

  test('title should be displayed correctly', async () => {
    expect(wrapper.find('.cTASection_title').text()).toEqual(props.title)
    await wrapper.setProps({
      title: undefined
    })
    expect(wrapper.find('.cTASection_title').exists()).toBeFalsy()
    await wrapper.setProps(props)
  })
  test('subtitle should be displayed correctly', async () => {
    expect(wrapper.find('.cTASection_subtitle').text()).toEqual(props.subtitle)
    await wrapper.setProps({
      subtitle: undefined
    })
    expect(wrapper.find('.cTASection_subtitle').exists()).toBeFalsy()
    await wrapper.setProps(props)
  })

  test('ctaButtons should be displayed correctly', async () => {
    expect(wrapper.findAll('.cTASection_ctaButton').length).toEqual(props.ctaButtons.length)
    await wrapper.setProps({
      ctaButtons: []
    })
    expect(wrapper.find('.cTASection_ctaButtons').exists()).toBeFalsy()
    await wrapper.setProps(props)
  })

  test('click CTA Button => should emit "clickCTAButton" ', async () => {
    wrapper.findAll('.cTASection_ctaButton')[0].trigger('click')
    expect(wrapper.emitted()['clickCtaButton'][0][0]).toEqual(props.ctaButtons[0].name)
  })
})
