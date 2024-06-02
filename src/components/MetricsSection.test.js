import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import MetricsSection from './MetricsSection.vue'
import CTAButton from '@/commons/CTAButton.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

library.add(faArrowRight)

// Mock data
const topSection = {
  title: 'Top Section Title',
  subTitle: 'Top Section Subtitle',
  bgColor: '#FFFFFF',
  color: '#000000',
  themeColor: 'light'
}

const bottomSection = {
  bgColor: '#F0F0F0',
  color: '#000000',
  themeColor: 'light',
  metrics: [
    { value: '1000+', object: 'Customers', ctaButton: { name: 'MoreInfo', label: 'More Info' } },
    { value: '500+', object: 'Projects' }
  ]
}

const props = {
  topSection: topSection,
  bottomSection: bottomSection
}

describe('MetricSection component', () => {
  const wrapper = mount(MetricsSection, {
    props: props
  })

  test('component should be mounted', () => {
    expect(MetricsSection).toBeTruthy()
    expect(wrapper.find('.metricSection').exists()).toBeTruthy()
  })

  test('renders top section title and subtitle', () => {
    expect(wrapper.find('.metricSection_title').text()).toBe(topSection.title)
    expect(wrapper.find('.metricSection_subTitle').text()).toBe(topSection.subTitle)
  })

  test('renders the correct number of metrics', () => {
    const metrics = wrapper.findAll('.metricSection_metric')
    expect(metrics.length).toBe(bottomSection.metrics.length)
  })

  test('renders the correct metric content', () => {
    bottomSection.metrics.forEach((metric, idx) => {
      const metricWrapper = wrapper.findAll('.metricSection_metric')[idx]

      if (metric.value) {
        expect(metricWrapper.find('.metricSection_metricValue').text()).toBe(metric.value)
      }
      if (metric.object) {
        expect(metricWrapper.find('.metricSection_metricObject').text()).toBe(metric.object)
      }
      if (metric.ctaButton?.name && metric.ctaButton?.label) {
        expect(metricWrapper.findComponent(CTAButton).props('label')).toBe(metric.ctaButton.label)
        expect(metricWrapper.findComponent(CTAButton).props('name')).toBe(metric.ctaButton.name)
      }
    })
  })

  test('emits clickMetric event when CTA button is clicked', async () => {
    const metricWithButton = bottomSection.metrics.find((metric) => metric.ctaButton)
    if (metricWithButton && metricWithButton.ctaButton) {
      const ctaButton = wrapper.findComponent(CTAButton)
      await ctaButton.trigger('click')
      expect(wrapper.emitted().clickMetric[0]).toEqual([metricWithButton.ctaButton.name])
    }
  })
})
