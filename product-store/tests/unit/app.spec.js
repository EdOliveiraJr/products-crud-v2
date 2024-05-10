import App from "@/App.vue";
import { mount } from "@vue/test-utils";

describe('App', ()=>{
  it('render router link Home', ()=>{
    const wrapper = mount(App)
    expect(wrapper.html()).toContain('<router-link to="/">Home</router-link>')
  })

  it('render router link About', ()=>{
    const wrapper = mount(App)
    expect(wrapper.html()).toContain('<router-link to="/about">About</router-link>')
  })

  it('render router-view', ()=>{
    const wrapper = mount(App)
    expect(wrapper.html()).toContain('router-view')
  })

})