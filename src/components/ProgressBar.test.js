import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import ProgressBar from './ProgressBar.vue'

describe('when component is mounted', () => {
  const props = {
    value: 10
  }
  const wrapper = mount(ProgressBar, {
    props: props
  })

  test('component should be mounted', () => {
    expect(ProgressBar).toBeTruthy()
    expect(wrapper.find('[data-test="progressBar"]').exists()).toBeTruthy()
  })

  test('progress bar width should be initial value', () => {
    expect(wrapper.find('[data-test="progressBarValueBar"').attributes().style).toContain(
      'max-width: ' + props.value
    )
  })
  test('progress bar text value should not be displayed', () => {
    expect(wrapper.find('[data-test="progressBarValue"').exists()).toBeFalsy()
  })
  test('update value => progress bar width should be new value', async () => {
    const newValue = 11
    await wrapper.setProps({ value: newValue })
    expect(wrapper.find('[data-test="progressBarValueBar"').attributes().style).toContain(
      'max-width: ' + newValue
    )
  })
  test('displayValue to true =>  progress bar text value shoulda be displayed', async () => {
    await wrapper.setProps({ displayValue: true })
    expect(wrapper.find('[data-test="progressBarValue"').exists()).toBeTruthy()
  })
})
