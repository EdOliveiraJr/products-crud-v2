<template>
  <div class="home-view">
    <TabMenu :model="items">
      <template #item="{ item, props }">
        <div 
          class="tab" 
          v-bind="props.action" 
          @click="this.label = item.label"
        >
          {{ item.label }}
        </div>
      </template>
    </TabMenu>
    <div v-if="this.label == 'Produtos Ativos'">
      <div class="add">
        <Button id="add-product"
          aria-label="Adicionar Produto"
          class="btn-add-product" 
          icon="pi pi-plus"
          severity="success"
          autofocus
          @click="openProductFormAdd" 
        />
      </div>
      <ActiveProducts :products="productsActives" @loadProducts="loadProducts" />
      <div v-if="this.visible == true">
        <ProductForm 
          :header="header" 
          :visible="this.visible" 
          @saveNewProduct="addProduct($event)" 
          @closedDialog="visible = $event"
        />
      </div>
    </div>
    <div v-else>
      <InactiveProducts :products="productsInactives" @loadProducts="loadProducts" />
    </div>
  </div>
</template>

<script>
import Button from 'primevue/button';
import TabMenu from 'primevue/tabmenu';

import ActiveProducts from '../components/ActiveProducts.vue';
import InactiveProducts from '../components/InactiveProducts.vue';
import ProductForm from '../components/ProductForm.vue';

import service from '../service/index';

export default {
  name: 'HomeView',
  components: {
    ActiveProducts, 
    Button, 
    InactiveProducts, 
    ProductForm, 
    TabMenu
  },
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
  },
  mounted() {
    this.loadProducts();
  },
  methods: {
    async loadProducts() {
      try {
        const response = await service.getActivesProducts();
        this.productsActives =  response.data.data;
      }
      catch(error){
        console.log("Erro ao obter dados:", error);
      }

      try {
        const response =  await service.getInactivesProducts();
        this.productsInactives = response.data.data;
      }
      catch(error){
        console.log("Erro ao obter dados:", error);
      }
    },
    openProductFormAdd() {
      this.visible = true;
    },
    addProduct(product) {
      service.addProduct(product)
        .then(() => {
            this.loadProducts();
        })
        .catch(error => {
            console.error("Erro ao obter dados:", error);
        });
    }
  }
}
</script>