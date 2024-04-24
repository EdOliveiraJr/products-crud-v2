<template>
  <div class="home">
      <TabMenu :model="items">
          <template #item="{item, props}">
              <div v-bind="props.action" @click="this.label = item.label">
                  {{ item.label }}
               </div>
            </template>
        </TabMenu>
        <div v-if="this.label == 'Produtos Ativos'">
            <ActiveProducts :products="productsActives" @loadProducts="loadProducts"/>
            <div class="flex justify-content-end">
                <Button 
                class="mx-6 p-4" 
                icon="pi pi-plus" 
                severity="success"
                raised 
                rounded
                @click="buttonAddProduct"
                />
            </div>
            <div v-if="this.visible == true">
                <ProductForm 
                    :header="header"
                    :visible="this.visible" 
                    @closedDialog="visible=$event" 
                    @saveProduct="addProduct($event)"
                />
            </div>    
        </div>
        <div v-else>
            <InactiveProducts :products="productsInactives" @loadProducts="loadProducts"/>
        </div> 
    </div>
</template>

<script>
import TabMenu from 'primevue/tabmenu';
import Card from 'primevue/card';
import Button from 'primevue/button';
import InactiveProducts from '../components/InactiveProducts.vue';
import ActiveProducts from '../components/ActiveProducts.vue';
import ProductForm from '../components/ProductForm.vue';
import service from '../service/index';

export default {
  components: { TabMenu, Button, Card, InactiveProducts, ActiveProducts, ProductForm },
  data() {
    return {
        header: 'Adicionar Novo Produto',
        label: '',
        visible: false, 
        items: [
            { label: 'Produtos Ativos', icon: 'pi pi-check-circle'},
            { label: 'Produtos Inativos', icon: 'pi pi-ban'},
        ],
        productsActives: [],
        productsInactives: [],
    }   
  },
  methods: {
    loadProducts(){
        service.getActivesProducts()
        .then(data => {
            this.productsActives = data;
        })
        .catch(error =>{
            console.error("Erro ao obter dados:", error);
        });

        service.getInactivesProducts()
        .then(data => {
            this.productsInactives = data;
        })
        .catch(error =>{
            console.error("Erro ao obter dados:", error);
        });
        
        
    },
    buttonAddProduct(){
        this.visible = true;
    },
    addProduct(event) {
        service.addProduct(event)
        .then(() =>{
            this.loadProducts();
        })
        .catch(error =>{
            console.error("Erro ao obter dados:", error);
        });
    }
  },
  created(){
    this.loadProducts();
  }
}
</script>