import { config, flushPromises, mount, shallowMount } from "@vue/test-utils";

import HomeView from "../../src/views/HomeView.vue";
import setup from './setup';
import plugins from "./plugins";

import service from "../../src/service/index";

config.global = setup.global;

jest.mock('../../src/service/index.js');

jest.mock('axios', () => ({
  create: jest.fn( () => ({ 
    get: jest.fn(),
    delete: jest.fn(),
    put: jest.fn(),
    patch: jest.fn(),
  }))
}));

describe('HomeView.vue', () => {
  test('Methods that are called on component is mounted', async () => {
    service.getActivesProducts.mockResolvedValue(
      { 
        status: 200, 
        data: {
          data: [] 
        }
      }
    );
    service.getInactivesProducts.mockResolvedValue(
      { 
        status: 200, 
        data: { 
          data: [] 
        }
      }
    );

    const wrapper = shallowMount(HomeView, {
      global: {
        plugins
      }
    })

    await flushPromises();
    const productsActives = wrapper.vm.productsActives;
    const productsInactives = wrapper.vm.productsInactives;

    expect(productsActives).toHaveLength(0)
    expect(productsInactives).toHaveLength(0)
    
  })
})