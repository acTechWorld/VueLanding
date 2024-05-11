import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import ChatDisplay from './ChatDisplay.vue'

describe('when component is mounted', () => {
  const props = {
    text: 'test'
  }
  const wrapper = mount(ChatDisplay, {
    props: props
  })

  test('component should be mounted', () => {
    expect(ChatDisplay).toBeTruthy()
    expect(wrapper.find('[data-test="chatDisplay"]').exists()).toBeTruthy()
  })
  test('no loading + animated => text should be displayed letter by letter', async () => {
    expect(wrapper.find('[data-test="chatDisplayText"]').text()).toEqual('')
    await new Promise((resolve) => setTimeout(resolve, 10))
    expect(wrapper.find('[data-test="chatDisplayText"]').text()).toEqual(props.text.slice(0, 2))
    await new Promise((resolve) => setTimeout(resolve, 10))
    expect(wrapper.find('[data-test="chatDisplayText"]').text()).toEqual(props.text)
  })
  test('no loading + not animated => text should be displayed completly', async () => {
    await wrapper.setProps({ animated: false })
    expect(wrapper.find('[data-test="chatDisplayText"]').text()).toEqual(props.text)
  })
  test('loading => text should not be displayed + loading should be displayed', async () => {
    await wrapper.setProps({ loading: true })
    expect(wrapper.find('[data-test="chatDisplayText"]').exists()).toBeFalsy()
    expect(wrapper.find('[data-test="chatDisplayLoader"]').exists()).toBeTruthy()
    await wrapper.setProps({ loading: false })
  })
})
