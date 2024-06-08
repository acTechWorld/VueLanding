import { mount } from '@vue/test-utils'
import { describe, expect, test, beforeEach, vi } from 'vitest'
import TeamSection from './TeamSection.vue'

const MockScrollTransitionContainer = {
  name: 'ScrollTransitionContainer',
  template: '<div><slot /></div>'
}

describe('TeamSection.vue', () => {
  let wrapper

  const props = {
    title: 'Our Team',
    subtitle: 'Meet the people who make it all happen',
    teamMembers: [
      { img: 'member1.jpg', name: 'Alice', description: 'Developer' },
      { img: 'member2.jpg', name: 'Bob', description: 'Designer' }
    ],
    bgColor: '#ffffff',
    color: '#000000',
    themeColor: 'light',
    animated: true,
    membersClickable: true
  }

  beforeEach(() => {
    wrapper = mount(TeamSection, {
      props,
      global: {
        stubs: {
          ScrollTransitionContainer: MockScrollTransitionContainer
        }
      }
    })
  })

  test('renders the component with the correct title and subtitle', () => {
    expect(wrapper.find('.teamSection_title').text()).toBe(props.title)
    expect(wrapper.find('.teamSection_subtitle').text()).toBe(props.subtitle)
  })

  test('renders the correct number of team members', () => {
    const teamMembers = wrapper.findAll('.teamSection_teamMember')
    expect(teamMembers.length).toBe(props.teamMembers.length)
  })

  test('renders team members with correct details', () => {
    const teamMembers = wrapper.findAll('.teamSection_teamMember')
    teamMembers.forEach((member, idx) => {
      const img = member.find('img')
      const name = member.find('.teamSection_teamMember_name')
      const description = member.find('.teamSection_teamMember_description')

      expect(img.attributes('src')).toBe(props.teamMembers[idx].img)
      expect(name.text()).toBe(props.teamMembers[idx].name)
      expect(description.text()).toBe(props.teamMembers[idx].description)
    })
  })

  test('emits clickMember event with correct payload when a team member is clicked', async () => {
    const teamMembers = wrapper.findAll('.teamSection_teamMember')
    await teamMembers[0].trigger('click')
    expect(wrapper.emitted()['clickMember'][0][0]).toEqual(props.teamMembers[0])
  })

  test('does not emit clickMember event if membersClickable is false', async () => {
    await wrapper.setProps({ membersClickable: false })
    const emitSpy = vi.spyOn(wrapper.vm, '$emit')
    const teamMembers = wrapper.findAll('.teamSection_teamMember')

    await teamMembers[0].trigger('click')
    expect(emitSpy).not.toHaveBeenCalled()
  })

  test('applies the correct styles from props', () => {
    const section = wrapper.find('.teamSection')
    const expectedStyle = {
      color: 'rgb(0, 0, 0)', // Assuming getTxtColor(undefined, undefined) returns 'rgb(0, 0, 0)'
      backgroundColor: 'rgb(255, 255, 255)' // Assuming getBgColor(undefined, undefined) returns 'rgb(255, 255, 255)'
    }

    expect(section.attributes('style')).toContain(`color: ${expectedStyle.color}`)
    expect(section.attributes('style')).toContain(
      `background-color: ${expectedStyle.backgroundColor}`
    )
  })
})
