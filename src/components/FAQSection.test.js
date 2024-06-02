import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import FaqSection from './FaqSection.vue'
import CTASection from '@/components/CTASection.vue'
import AccordionComponent from '@/commons/AccordionComponent.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'

library.add(faChevronUp)

describe('FaqSection component', () => {
  const topSection = {
    title: 'Top Section Title',
    subTitle: 'Top Section Subtitle',
    ctaButtons: [
      { name: 'Button1', label: 'Button1' },
      { name: 'Button2', label: 'Button2' }
    ],
    bgColor: '#FFFFFF',
    color: '#000000',
    themeColor: 'light'
  }

  const bottomSection = {
    color: '#000000',
    faqQuestions: [
      { question: 'Question 1?', answer: 'Answer 1' },
      { question: 'Question 2?', answer: 'Answer 2' }
    ]
  }

  const props = {
    topSection: topSection,
    bottomSection: bottomSection
  }

  const wrapper = mount(FaqSection, {
    props: props,
    global: {
      directives: {
        'safe-html': {
          mounted(el, binding) {
            el.innerHTML = binding.value
          },
          updated(el, binding) {
            el.innerHTML = binding.value
          }
        }
      }
    }
  })

  test('component should be mounted', () => {
    expect(FaqSection).toBeTruthy()
    expect(wrapper.find('.faqSection').exists()).toBeTruthy()
  })

  test('CTA section should be rendered if it has content', () => {
    expect(wrapper.findComponent(CTASection).exists()).toBeTruthy()
  })

  test('Accordion components should be rendered for each FAQ question', () => {
    const accordionComponents = wrapper.findAllComponents(AccordionComponent)
    expect(accordionComponents.length).toBe(bottomSection.faqQuestions.length)
  })

  test('Accordion header should display the FAQ question', () => {
    const accordionHeaders = wrapper.findAll('.faqSection_accordionQuestion')
    bottomSection.faqQuestions.forEach((faqQuestion, idx) => {
      expect(accordionHeaders[idx].text()).toContain(faqQuestion.question)
    })
  })

  test('Accordion content should display the FAQ answer when clicked header', async () => {
    const accordionContents = wrapper.findAll('.faqSection_accordion')
    const accordionHeaders = wrapper.findAll('.faqSection_accordionQuestion')
    bottomSection.faqQuestions.forEach(async (faqQuestion, idx) => {
      expect(accordionContents[idx].text()).not.toContain(faqQuestion.answer)
      await accordionHeaders[idx].trigger('click')
      expect(accordionContents[idx].text()).toContain(faqQuestion.answer)
    })
  })

  test('emits clickTopSectionCtaButton event when CTA button is clicked', async () => {
    await wrapper.findComponent('.faqSection_ctaSection').vm.$emit('clickCtaButton', 'Button1')
    expect(wrapper.emitted().clickTopSectionCtaButton[0]).toEqual(['Button1'])
  })
})
