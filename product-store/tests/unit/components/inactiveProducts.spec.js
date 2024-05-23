import { config, mount } from '@vue/test-utils';
import InactiveProducts from '../../../src/components/InactiveProducts.vue';
import setup from '../setup';
import plugins from '../plugins';
import service from '../../../src/service/index';

config.global = setup.global;

function factory () {
  return mount(InactiveProducts, {
    global: {
      plugins
    },
    props: {
      products: [{id: 1, name: 'Produto 1', price: '10', describe: 'Produto 1'}]
    }
  })
}

jest.mock('../../../src/service/index.js');

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
    //build
    const wrapper = factory();
    const str =  wrapper.vm.formatTextToCurrency(10);
    expect(str).toEqual('R$ 10,00');
  })

  test('Method activateProduct emits loadProducts', async () => {
    //mock
    service.activeProduct.mockResolvedValue( {status: 200});
    //build
    const wrapper = factory();
    const id = 1;
    await wrapper.vm.activateProduct(id);
    //expect
    expect(wrapper.emitted('loadProducts')).toBeTruthy();
  })

  test('Method deleteProduct emits loadProducts', async () => {
    //mock
    service.deleteProduct.mockResolvedValue( {status: 202});
    //build
    const wrapper = factory();
    const id = 1;
    await wrapper.vm.deleteProduct(id);
    //expect
    expect(wrapper.emitted('loadProducts')).toBeTruthy();
  })
})