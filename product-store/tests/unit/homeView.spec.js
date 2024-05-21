import { config, flushPromises, mount, shallowMount } from "@vue/test-utils";
import HomeView from "../../src/views/HomeView.vue";
import setup from './setup';
import plugins from "./plugins";

import service from "../../src/service/";

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
    const wrapper = mount(HomeView, {
      global: {
        plugins
      }
    })
    await flushPromises();
    const productsActives = wrapper.vm.productsActives;
    const productsInactives = wrapper.vm.productsInactives;
    expect(productsActives).toHaveLength(0);
    expect(productsInactives).toHaveLength(0);
  })

  test('Changing the visible variable to true value when calling the openProductFormAdd method', () => {
    const wrapper = mount(HomeView, {
      global: {
        plugins
      },
      data() {
        return {
          visible: false
        }
      },
    })
    wrapper.vm.openProductFormAdd();
    expect(wrapper.vm.visible).toBeTruthy();
  })

  test('addProduct method', async ()=> {
    service.addProduct.mockResolvedValue({status: 201});
    service.getActivesProducts.mockResolvedValue(
      { 
        status: 200, 
        data: {
          data: [{name: 'Produto 1', price: '10', describe: 'Produto 1'}] 
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
    const wrapper = mount(HomeView, {
      global: {
        plugins
      },
    })
    const item = {name: 'Produto 1', price: '10', describe: 'Produto 1'}
    await wrapper.vm.addProduct(item);
    expect(wrapper.vm.productsActives).toHaveLength(1);
    console.log(wrapper.vm.productsActives);
    //ToDo
  })
  
})