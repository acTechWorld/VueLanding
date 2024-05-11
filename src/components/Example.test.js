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
})
