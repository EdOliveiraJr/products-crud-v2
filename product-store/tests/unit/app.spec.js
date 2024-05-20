import App from "@/App.vue";
import { mount } from "@vue/test-utils";

describe('App', ()=>{
  test('render router link Home', ()=>{
    const wrapper = mount(App)
    expect(wrapper.html()).toContain('<router-link to="/">Home</router-link>')
  })

  test('render router link About', ()=>{
    const wrapper = mount(App)
    expect(wrapper.html()).toContain('<router-link to="/about">About</router-link>')
  })

  test('render router-view', ()=>{
    const wrapper = mount(App)
    expect(wrapper.html()).toContain('router-view')
  })

})