import { config, flushPromises, mount } from '@vue/test-utils';
import HomeView from '../../../src/views/HomeView.vue';
import setup from '../setup';
import plugins from '../plugins';
import service from '../../../src/service';

config.global = setup.global;

function factory() {
  return mount(HomeView, {
    global: {
      plugins
    },
    data() {
      return {
        visible: false
      }
    }
  })
}

jest.mock('../../../src/service/index.js');

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
    //mocks
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
    //build
    const wrapper = factory();
    await flushPromises();
    const productsActives = wrapper.vm.productsActives;
    const productsInactives = wrapper.vm.productsInactives;
    //expect
    expect(productsActives).toHaveLength(0);
    expect(productsInactives).toHaveLength(0);
  })

  test('Changing the visible variable to true value when calling the openProductFormAdd method', () => {
    //build
    const wrapper = factory();
    wrapper.vm.openProductFormAdd();
    //expect
    expect(wrapper.vm.visible).toBeTruthy();
  })

  test('addProduct method', async ()=> {
    //mocks
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
    //spy
    const spyLoadProducts = jest.spyOn(HomeView.methods, 'loadProducts');
    //build
    const wrapper = factory();
    const item = {name: 'Produto 1', price: '10', describe: 'Produto 1'}
    await wrapper.vm.addProduct(item);
    //expect
    expect(wrapper.vm.productsActives).toHaveLength(1);
    expect(spyLoadProducts).toHaveBeenCalled();
  })
})