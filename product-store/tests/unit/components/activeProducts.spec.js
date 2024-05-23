import { config, mount } from '@vue/test-utils';
import ActiveProducts from '../../../src/components/ActiveProducts.vue';
import setup from '../setup';
import plugins from '../plugins';
import service from '../../../src/service/index';

config.global = setup.global;

function factory(){
  return mount(ActiveProducts, {
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

describe('ActiveProducts', () => {
  test('Method formatTextCurrency return correct format', ()=> {
    //build
    const wrapper = factory();
    const str =  wrapper.vm.formatTextToCurrency(10);
    //expect
    expect(str).toEqual('R$ 10,00');
  })

  test('Method openProductFormEdit change variable visible', () => {
    //build
    const wrapper = factory();
    const item = {name: 'Produto 1', price: '10', describe: 'Produto 1'};
    wrapper.vm.openProductFormEdit(item);
    //expect
    expect(wrapper.vm.visible).toBeTruthy();
  })

  test('Method inactivateProduct emits loadProducts', async () => {
    //mock
    service.inactiveProduct.mockResolvedValue( {status: 204});
    //build
    const wrapper = factory();
    const id = 1;
    await wrapper.vm.inactivateProduct(id);
    //expect
    expect(wrapper.emitted('loadProducts')).toBeTruthy();
  })

  test('Method updateProduct emits loadProducts', async () => {
    //mock
    service.updateProduct.mockResolvedValue( {status: 204})
    //build
    const wrapper = factory();
    const product = {name: 'Produto 1', price: '10', describe: 'Produto 1'};
    await wrapper.vm.updateProduct(product);
    //expect
    expect(wrapper.emitted('loadProducts')).toBeTruthy();
  })
})