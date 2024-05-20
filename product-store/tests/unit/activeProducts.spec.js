import { config, flushPromises, mount, shallowMount } from "@vue/test-utils";

import ActiveProducts from "../../src/components/ActiveProducts.vue";
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
    patch: jest.fn()
  }))
}));

describe('ActiveProducts', () => {
  test('Method formatTextCurrency return correct format', ()=> {
    const wrapper = mount(ActiveProducts, {
      global: {
        plugins
      }
    })

    const str =  wrapper.vm.formatTextToCurrency(10);

    expect(str).toEqual('R$ 10,00');

  })

  test('Method openProductFormEdit change variable visible', () => {
    
    const wrapper = mount(ActiveProducts, {
      global: {
        plugins
      }
    })

    const item = {name: 'Produto 1', price: '10', describe: 'Produto 1'}

    wrapper.vm.openProductFormEdit(item);

    expect(wrapper.vm.visible).toBeTruthy();
    
  })

  test('Method inactivateProduct emits loadProducts', async () => {
    service.inactiveProduct.mockResolvedValue( {status: 204})
    
    const wrapper = mount(ActiveProducts, {
      global: {
        plugins
      },
      props: {
        products: [{id: 1, name: 'Produto 1', price: '10', describe: 'Produto 1'}]
      }
    })

    const id = 1;

    await wrapper.vm.inactivateProduct(id);
   
    expect(wrapper.emitted('loadProducts')).toBeTruthy();

  })

  test('Method updateProduct emits loadProducts', async () => {
    service.updateProduct.mockResolvedValue( {status: 204})
    
    const wrapper = mount(ActiveProducts, {
      global: {
        plugins
      },
      props: {
        products: [{id: 1, name: 'Produto 1', price: '10', describe: 'Produto 1'}]
      }
    })

    const product = {name: 'Produto 1', price: '10', describe: 'Produto 1'}

    await wrapper.vm.updateProduct(product);
  
    expect(wrapper.emitted('loadProducts')).toBeTruthy();

  })
})