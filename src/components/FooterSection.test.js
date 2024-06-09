import { describe, it, expect, vi, beforeAll } from 'vitest'
import { mount } from '@vue/test-utils'
import FooterSection from '@/components/FooterSection.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons'

library.add(faTwitter, faFacebook)

let wrapper

describe('FooterSection.vue', () => {
  beforeAll(() => {
    wrapper = mount(FooterSection, {
      props: {
        topSection: {
          companyLogo: 'logo.png',
          companyName: 'Company Name',
          text: 'Some text here',
          pages: {
            Category1: ['Page1', 'Page2'],
            Category2: ['Page3', 'Page4']
          },
          bgColor: '#ff0000',
          color: '#00ff00'
        },
        bottomSection: {
          socialLinks: [
            { type: 'twitter', url: 'https://twitter.com' },
            { type: 'facebook', url: 'https://facebook.com' }
          ],
          copyrights: '© 2024 Company Name',
          bgColor: '#0000ff',
          color: '#ffff00'
        }
      }
    })
  })

  it('component should be mounted', () => {
    expect(FooterSection).toBeTruthy()
    expect(wrapper.find('.footerSection').exists()).toBeTruthy()
  })

  it('renders top section with company info', () => {
    expect(wrapper.find('.footerSection_companyLogos').attributes('src')).toBe('logo.png')
    expect(wrapper.find('.footerSection_companyName').text()).toBe('Company Name')
    expect(wrapper.find('.footerSection_text').text()).toBe('Some text here')
  })

  it('renders pages categories and pages', () => {
    expect(wrapper.findAll('.footerSection_pagesCategory').length).toBe(2)
    expect(wrapper.findAll('.footerSection_page').length).toBe(4)
  })

  it('emits clickPage event when a page is clicked', async () => {
    await wrapper.find('.footerSection_page').trigger('click')
    expect(wrapper.emitted()['clickPage'][0][0]).toEqual('Page1')
  })

  it('renders bottom section with social links', () => {
    const socialLinks = wrapper.findAll('.footerSection_socialLink')
    expect(socialLinks.length).toBe(2)
    expect(socialLinks[0].attributes('href')).toBe('https://twitter.com')
    expect(socialLinks[1].attributes('href')).toBe('https://facebook.com')
  })

  it('renders bottom section with copyrights', () => {
    expect(wrapper.find('.footerSection_copyrights').text()).toBe('© 2024 Company Name')
  })

  it('applies custom styles from props', () => {

    expect(wrapper.find('.footerSection_first').attributes('style')).toContain(
      'background-color: rgb(255, 0, 0);'
    )
    expect(wrapper.find('.footerSection_first').attributes('style')).toContain(
      'color: rgb(0, 255, 0);'
    )
    expect(wrapper.find('.footerSection_second').attributes('style')).toContain(
      'background-color: rgb(0, 0, 255);'
    )
    expect(wrapper.find('.footerSection_second').attributes('style')).toContain(
      'color: rgb(255, 255, 0);'
    )
  })
})
