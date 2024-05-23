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
    //build
    const wrapper = factory();
    //expect
    expect(wrapper.html()).toContain('<router-link to="/">Home</router-link>');
  })

  test('render router link About', ()=>{
    //build
    const wrapper = factory();
    //expect
    expect(wrapper.html()).toContain('<router-link to="/about">About</router-link>');
  })

  test('render router-view', ()=>{
    //build
    const wrapper = factory();
    //expect
    expect(wrapper.html()).toContain('router-view');
  })
})