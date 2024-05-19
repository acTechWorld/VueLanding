import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import CTASection from './CTASection.vue'

describe('when component is mounted', () => {
  const props = {
    title: 'Start your free trial',
    subTitle: 'Join over 4000 statups already growing up with us',
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
    expect(wrapper.find('[data-test="cTASection"]').exists()).toBeTruthy()
  })

  test('title should be displayed correctly', async () => {
    expect(wrapper.find('[data-test="cTASection-title"]').text()).toEqual(props.title)
    await wrapper.setProps({
      title: undefined
    })
    expect(wrapper.find('[data-test="cTASection-title"]').exists()).toBeFalsy()
    await wrapper.setProps(props)
  })
  test('subTitle should be displayed correctly', async () => {
    expect(wrapper.find('[data-test="cTASection-subTitle"]').text()).toEqual(props.subTitle)
    await wrapper.setProps({
      subTitle: undefined
    })
    expect(wrapper.find('[data-test="cTASection-subTitle"]').exists()).toBeFalsy()
    await wrapper.setProps(props)
  })

  test('ctaButtons should be displayed correctly', async () => {
    expect(wrapper.findAll('[data-test="cTASection-ctaButton"]').length).toEqual(
      props.ctaButtons.length
    )
    await wrapper.setProps({
      ctaButtons: []
    })
    expect(wrapper.find('[data-test="cTASection-ctaButtons"]').exists()).toBeFalsy()
    await wrapper.setProps(props)
  })

  test('click CTA Button => should emit "clickCTAButton" ', async () => {
    wrapper.findAll('[data-test="cTASection-ctaButton"]')[0].trigger('click')
    expect(wrapper.emitted()['clickCTAButton'][0][0]).toEqual(props.ctaButtons[0].name)
  })
})
