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
            <ActiveProducts/>
            <div class="flex justify-content-end">
                <Button 
                class="mx-6 p-4" 
                icon="pi pi-plus" 
                severity="success"
                raised 
                rounded
                @click="addProduct"
                />
            </div>
            <div v-if="this.visible == true">
                <ProductForm :visible="this.visible" @closedDialog="visible=$event"/>
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
        ]
    }   
  },
  methods: {
    addProduct(){
        this.visible = true;
    }
  },
}
</script>