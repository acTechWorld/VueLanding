import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import ChatBoxInput from './ChatBoxInput.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'

library.add(faPaperPlane)

describe('when component is mounted', () => {
  const props = {
    placeholder: 'test',
    icon: 'paper-plane'
  }
  const wrapper = mount(ChatBoxInput, {
    props: props
  })

  test('component should be mounted', () => {
    expect(ChatBoxInput).toBeTruthy()
    expect(wrapper.find('[data-test="chatBoxInput"]').exists()).toBeTruthy()
  })

  test('placeholder should be correct', () => {
    expect(wrapper.find('[data-test="chatBoxInputTextarea"]').attributes().placeholder).toEqual(
      props.placeholder
    )
  })
  test('click submit button => should submit message', async () => {
    const messageValue = 'tested value'
    wrapper.find('[data-test="chatBoxInputTextarea"]').setValue(messageValue)
    await wrapper.find('[data-test="chatBoxInputSendButton"]').trigger('click')
    expect(wrapper.emitted()['sendMessage'][0][0]).toEqual(messageValue)
  })
  test('send message button should be correctly displayed', async () => {
    expect(wrapper.find('[data-test="chatBoxInputSendButton"]').attributes()['data-icon']).toEqual(
      props.icon
    )
    await wrapper.setProps({
      icon: undefined
    })
    expect(wrapper.find('[data-test="chatBoxInputSendButton"]').exists()).toBeFalsy()
  })
})
