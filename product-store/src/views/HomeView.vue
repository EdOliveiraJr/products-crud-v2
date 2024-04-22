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
            <ActiveProducts :products="products"/>
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
                    :visible="this.visible" 
                    @closedDialog="visible=$event" 
                    @saveProduct="addProduct($event)"
                />
            </div>    
        </div>
        <div v-else>
            <InactiveProducts/>
        </div>
    </div>
</template>

<script>
import TabMenu from 'primevue/tabmenu'
import Card from 'primevue/card';
import Button from 'primevue/button';
import InactiveProducts from '../components/InactiveProducts.vue'
import ActiveProducts from '../components/ActiveProducts.vue'
import ProductForm from '../components/ProductForm.vue';

export default {
  components: { TabMenu, Button, Card, InactiveProducts, ActiveProducts, ProductForm },
  data() {
    return {
        label: '',
        visible: false, 
        items: [
            { label: 'Produtos Ativos', icon: 'pi pi-check-circle'},
            { label: 'Produtos Inativos', icon: 'pi pi-ban'},
        ],
        products: [
                {
                    name: 'banana1',
                    price: 2.0,
                    description: 'naninca',
                    isActive: true
                },
                {
                    name: 'banana2',
                    price: 3.0,
                    description: 'prata',
                    isActive: true
                }
            ]
    }   
  },
  methods: {
    buttonAddProduct(){
        this.visible = true;
    },
    addProduct(event) {
        console.log(event);
        this.products.push(event)
        console.log(this.products);
    }
  },
}
</script>