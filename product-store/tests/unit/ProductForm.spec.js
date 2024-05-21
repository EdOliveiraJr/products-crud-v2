import { config, mount } from "@vue/test-utils";
import ProductForm from "../../src/components/ProductForm.vue";
import setup from './setup';
import plugins from "./plugins";

config.global = setup.global;

function factory(){
  return mount(ProductForm, {
    global: {
      plugins
    },
    props: {
      header: ''
    }
  })
}

describe('ProductForm', () => {
  test('closeDialog method change value of the attribute visibleDialog for true', ()=> {
    const wrapper = factory();
    wrapper.vm.visibleDialog = true;
    wrapper.vm.closeDialog();
    expect(wrapper.vm.visibleDialog).toBeFalsy();
  })

  test('closeDialog method emits event correctly', ()=> {
    const wrapper = factory();
    wrapper.vm.closeDialog();
    expect(wrapper.emitted('closedDialog')).toBeTruthy();
  })

  test('closeDialog method emits value false', ()=> {
    const wrapper = factory();
    wrapper.vm.closeDialog();
    expect(wrapper.emitted('closedDialog')[1]).toBeFalsy();
  })

  test('saveEditProduct method emits event correctly', () => {
    const wrapper = factory();
    const product = {name: 'Produto 1', price: '10', describe: 'Produto 1'};
    wrapper.vm.saveEditProduct(product);
    expect(wrapper.emitted('saveEditProduct')).toBeTruthy();
  })

  test('saveNewProduct method emits event correctly', () => {
    const wrapper = factory();
    const product = {name: 'Produto 1', price: '10', describe: 'Produto 1'};
    wrapper.vm.saveNewProduct(product);
    expect(wrapper.emitted('saveNewProduct')).toBeTruthy();
  })
})