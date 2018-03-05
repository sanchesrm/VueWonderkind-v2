import Vue from 'vue'
import { mount, shallow } from '@vue/test-utils'
import App from '@/components/App.vue'
import LeftSideMenu from '@/components/LeftSideMenu.vue'
import MainContent from '@/components/MainContent.vue'
import AddEditContact from '@/components/AddEditContact.vue'

describe('App', () => {
  test('is a Vue instance', () => {
    const $route = { path: 'localhost:4000' }
    const wrapper = mount(App, {
      mocks: {
        $route
      }
    })
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  test('has correct content', () => {
    const $route = { path: 'localhost:4000' }
    const wrapper = shallow(App, {
      stubs: { 'leftSideMenu' : LeftSideMenu },
      mocks: {
        $route
      }
    })
    expect(wrapper.contains('div.leftside-menu')).toBe(true)
  })

  test('has correct content', () => {
    const $route = { path: 'localhost:4000' }
    const wrapper = shallow(App, {
      stubs: { 'leftSideMenu' : LeftSideMenu },
      mocks: {
        $route
      }
    })
    expect(wrapper.contains('div.main-content')).toBe(true)
  })
})