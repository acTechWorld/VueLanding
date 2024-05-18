import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import SocialProof from './SocialProof.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faStar as fasStar, faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons'

library.add(fasStar, farStar, faArrowLeft, faArrowRight)

describe('when component is mounted', () => {
  const props = {
    type: 'banner',
    datas: [
      {
        testimony:
          "Untitled is the best $129 've spent on my business in a long time. I'm going to keep using it and recommending it to every designer I know.",
        name: 'Caitlyn King',
        title: 'Head of Design, Layers',
        stars: 3,
        imgProfile:
          'https://img.freepik.com/photos-gratuite/portrait-homme-riant_23-2148859448.jpg?size=338&ext=jpg&ga=GA1.1.2116175301.1713916800&semt=ais'
      },
      {
        testimony:
          "Untitled is the best $129 've spent on my business in a long time. I'm going to keep using it and recommending it to every designer I know.",
        name: 'Caitlyn King',
        title: 'Head of Design, Layers',
        stars: 5,
        imgProfile:
          'https://img.freepik.com/photos-gratuite/portrait-homme-riant_23-2148859448.jpg?size=338&ext=jpg&ga=GA1.1.2116175301.1713916800&semt=ais'
      }
    ]
  }
  const wrapper = mount(SocialProof, {
    props: props
  })

  test('component should be mounted', () => {
    expect(SocialProof).toBeTruthy()
    expect(wrapper.find('[data-test="socialProof"]').exists()).toBeTruthy()
  })

  test('number of proof displayed should be correct', () => {
    expect(wrapper.findAll('[data-test="social-proof-item"]').length).toEqual(props.datas.length)
  })

  test('testimony should be displayed correctly', async () => {
    expect(wrapper.findAll('[data-test="social-testimony"]')[0].text()).toEqual(
      props.datas[0].testimony
    )
    await wrapper.setProps({
      datas: [{ title: 'test' }]
    })
    expect(wrapper.findAll('[data-test="social-testimony"]')[0]?.exists()).toBeFalsy()
    await wrapper.setProps({
      datas: props.datas
    })
  })

  test('name should be displayed correctly', async () => {
    expect(wrapper.findAll('[data-test="social-name"]')[0].text()).toEqual(props.datas[0].name)
    await wrapper.setProps({
      datas: [{ title: 'test' }]
    })
    expect(wrapper.findAll('[data-test="social-name"]')[0]?.exists()).toBeFalsy()
    await wrapper.setProps({
      datas: props.datas
    })
  })

  test('title should be displayed correctly', async () => {
    expect(wrapper.findAll('[data-test="social-title"]')[0].text()).toEqual(props.datas[0].title)
    await wrapper.setProps({
      datas: [{ name: 'test' }]
    })
    expect(wrapper.findAll('[data-test="social-title"]')[0]?.exists()).toBeFalsy()
    await wrapper.setProps({
      datas: props.datas
    })
  })

  test('img should be displayed correctly', async () => {
    expect(wrapper.findAll('[data-test="social-imgProfile"]')[0].exists()).toBeTruthy()
    await wrapper.setProps({
      datas: [{ name: 'test', imgProfile: undefined }]
    })
    expect(wrapper.findAll('[data-test="social-imgProfile"]')[0]?.exists()).toBeFalsy()
    await wrapper.setProps({
      datas: props.datas
    })
  })

  test('if no datas => bottom infos should not be displayed', async () => {
    await wrapper.setProps({
      datas: [{ testimony: 'test' }]
    })
    expect(wrapper.findAll('[data-test="bottom-infos"]')[0]?.exists()).toBeFalsy()
    await wrapper.setProps({
      datas: props.datas
    })
  })

  test('stars should be displayed correctly', async () => {
    const icons = wrapper
      .findAll('[data-test="social-proof-item"]')[0]
      .findAll('[data-test="social-star"]')
      .map((el) => ({
        name: el.attributes()['data-icon'],
        prefix: el.attributes()['data-prefix']
      }))
    expect(icons.filter((icon) => icon.name === 'star' && icon.prefix === 'fas').length).toEqual(
      props.datas[0].stars
    )
    expect(icons.filter((icon) => icon.name === 'star' && icon.prefix === 'far').length).toEqual(
      5 - props.datas[0].stars
    )
    await wrapper.setProps({
      datas: [{ testimony: 'test' }]
    })
    expect(
      wrapper
        .findAll('[data-test="social-proof-item"]')[0]
        .findAll('[data-test="social-star"]')[0]
        ?.exists()
    ).toBeFalsy()
    await wrapper.setProps({
      datas: props.datas
    })
  })
})
