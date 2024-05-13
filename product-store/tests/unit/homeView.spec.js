import { config, flushPromises, mount, shallowMount } from "@vue/test-utils";

import HomeView from "@/views/HomeView.vue";
import setup from './setup';
import plugins from "./plugins";

import { getActivesProducts, getInactivesProducts } from '../../src/service/index.js'

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
  test('Methods that are called on component is mounted',()=>{
    getActivesProducts.mockResolvedValue({ status: 200, data: [] });
    getInactivesProducts.mockResolvedValue({ status: 200, data: [] });

    const wrapper = shallowMount(HomeView, {
      global: {
        plugins
      }
    })

    // await flushPromises();
    const loadProduct = wrapper.vm.loadProducts;
    expect(loadProduct).toHaveLength(0)
  })
})

// function factory() {
//   return mount(HomeView, {
//     data() {
//       return {
//         header: 'Adicionar Novo Produto',
//         items: [
//           { label: 'Produtos Ativos', icon: 'pi pi-check-circle' },
//           { label: 'Produtos Inativos', icon: 'pi pi-ban' },
//         ], 
//         label: '',
//         productsActives: [],
//         productsInactives: [],
//         visible: false,
//       }
//     }
//   })
// }

// describe('HomeView', ()=>{
//   afterAll(() => {
//     jest.resetAllMocks();
//   });

//   it('loadProduct function', ()=>{
//     getActivesProducts.mockResolvedValue({ status: 200, data: [] })
//     getInactivesProducts.mockResolvedValue({ status: 200, data: [] })

//     const wrapper = factory()
//     wrapper.vm.loadProducts()
//     const productsActives = wrapper.vm.productsActives
//     expect(productsActives).toHaveLength(0)

//   })

  // it('render Tab Produtos Ativos',()=>{
    
  //   getActivesProducts.mockResolvedValue({status: 200})

  //   const wrapper = factory()
    
  //   expect(wrapper.html()).toContain('Produtos Ativos')
  // })

  // it('render Tab Produtos Inativos',()=>{
  //   const wrapper = factory()
  //   expect(wrapper.html()).toContain('Produtos Inativos')
  // })