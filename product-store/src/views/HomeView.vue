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
      </div>
      <div v-else>
          <InactiveProducts/>
      </div>
  </div>
</template>

<script>
import TabMenu from 'primevue/tabmenu'
import Card from 'primevue/card';
import InactiveProducts from '../components/InactiveProducts.vue'
import ActiveProducts from '../components/ActiveProducts.vue'

export default {
  components: { TabMenu, Card, InactiveProducts, ActiveProducts },
  data() {
      return {
          label: '',
          items: [
              { label: 'Produtos Ativos', icon: 'pi pi-check-circle'},
              { label: 'Produtos Inativos', icon: 'pi pi-ban'},
          ]
      }   
  },
}
</script>