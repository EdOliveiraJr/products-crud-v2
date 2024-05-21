import { config, mount } from "@vue/test-utils";
import InactiveProducts from "../../src/components/InactiveProducts.vue";
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

describe('InactiveProducts', () => {
  test('Method formatTextCurrency return correct format', ()=> {
    const wrapper = mount(InactiveProducts, {
      global: {
        plugins
      }
    })
    const str =  wrapper.vm.formatTextToCurrency(10);
    expect(str).toEqual('R$ 10,00');
  })
  test('Method activateProduct emits loadProducts', async () => {
    service.activeProduct.mockResolvedValue( {status: 200});
    const wrapper = mount(InactiveProducts, {
      global: {
        plugins
      },
      props: {
        products: [{id: 1, name: 'Produto 1', price: '10', describe: 'Produto 1'}]
      }
    })
    const id = 1;
    await wrapper.vm.activateProduct(id);
    expect(wrapper.emitted('loadProducts')).toBeTruthy();
  })

  test('Method deleteProduct emits loadProducts', async () => {
    service.deleteProduct.mockResolvedValue( {status: 202});
    const wrapper = mount(InactiveProducts, {
      global: {
        plugins
      },
      props: {
        products: [{id: 1, name: 'Produto 1', price: '10', describe: 'Produto 1'}]
      }
    })
    const id = 1;
    await wrapper.vm.deleteProduct(id);
    expect(wrapper.emitted('loadProducts')).toBeTruthy();
  })
})