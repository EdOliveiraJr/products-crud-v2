import { config, mount } from "@vue/test-utils";
import App from "@/App.vue";
import setup from './setup';
import plugins from "./plugins";

config.global = setup.global;

function factory(){
  return mount(App, {
    global: {
      plugins
    }
  })
}

describe('App', ()=>{
  test('render router link Home', ()=>{
    const wrapper = factory();
    expect(wrapper.html()).toContain('<router-link to="/">Home</router-link>');
  })

  test('render router link About', ()=>{
    const wrapper = factory();
    expect(wrapper.html()).toContain('<router-link to="/about">About</router-link>');
  })

  test('render router-view', ()=>{
    const wrapper = factory();
    expect(wrapper.html()).toContain('router-view');
  })
})