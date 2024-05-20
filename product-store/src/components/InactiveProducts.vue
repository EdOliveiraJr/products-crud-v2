<template>
  <div class="inactive-products">
    <h2> Produtos Inativos </h2>
    <DataView :value="products">
      <template #list="slotProps">
        <div class="grid grid-nogutter">
          <div v-for="(item, index) in slotProps.items" 
            class="col-12"
            :key="index" 
          >
            <div class="flex flex-column sm:flex-row sm:align-items-center p-4 gap-3" 
              :class="{'border-top-1 surface-border' : index !== 0}"
            >
              <div class="flex flex-column md:flex-row justify-content-around md:align-items-center flex-1 gap-4">
                <Tag :value="item.isActive ? 'Ativo' : 'Inativo'"></Tag>
                <div class="flex flex-row md:flex-column justify-content-between align-items-start gap-2">
                  <div>
                    <div class="text-lg font-medium text-900 mt-2">{{ item.name }}</div>
                    <span class="font-medium text-secondary text-sm">{{ item.description }}</span>
                  </div>
                </div>
                <div class="flex flex-column md:align-items-end gap-5">
                  <span class="text-xl font-semibold text-900">{{ formatTextToCurrency(item.price) }}</span>
                </div>
                <div>
                  <Button 
                    class="btn-form" 
                    label="Ativar"
                    severity="success" 
                    @click="activateProduct(item.id)"
                  />
                  <Button 
                    class="btn-form" 
                    label="Deletar"
                    severity="danger" 
                    @click="deleteProduct(item.id)"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>
    </DataView>
  </div>
</template>

<script>
import Button from 'primevue/button';
import DataView from 'primevue/dataview';
import service from '@/service';

export default {
  name: 'InactiveProducts',
  components: { Button, DataView },
  props: {
    products: Array
  },
  methods: {
    formatTextToCurrency(value) {
      return 'R$ ' + value + ',00';
    },
    async activateProduct(id) {
      try {
        const response =  await service.activeProduct(id);
        if(response) this.$emit('loadProducts');
      } catch (error) {
          console.log("Erro ao obter dados:", error);
      }
    },
    async deleteProduct(id) {
      try {
       const response = await service.deleteProduct(id);
       if (response) this.$emit('loadProducts');        
      } catch (error) {
        console.log("Erro ao obter dados:", error);
      }
    }
  }
}
</script>