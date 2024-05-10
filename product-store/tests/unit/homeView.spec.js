import HomeView from "@/views/HomeView.vue"
import { mount } from "@vue/test-utils"

jest.mock('axios', () => {
  const mAxiosInstance = { get: jest.fn() };
  
  return {
    create: jest.fn(() => mAxiosInstance),
  };
});

function factory() {
  return mount(HomeView, {
    data() {
      return {
        header: 'Adicionar Novo Produto',
        items: [
          { label: 'Produtos Ativos', icon: 'pi pi-check-circle' },
          { label: 'Produtos Inativos', icon: 'pi pi-ban' },
        ], 
        label: '',
        productsActives: [],
        productsInactives: [],
        visible: false
      }
    }
  })
}

describe('HomeView', ()=>{
  afterAll(() => {
    jest.resetAllMocks();
  });

  it('render Tab Produtos Ativos',()=>{
    const wrapper = factory()
    expect(wrapper.html()).toContain('Produtos Ativos')
  })

  it('render Tab Produtos Inativos',()=>{
    const wrapper = factory()
    expect(wrapper.html()).toContain('Produtos Inativos')
  })

})