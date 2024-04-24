<template>
    <div>
        <h2>Produtos Ativos</h2>
        <DataView :value="products">
            <template #list="slotProps">
                <div class="grid grid-nogutter">
                    <div v-for="(item, index) in slotProps.items" 
                        :key="index" 
                        class="col-12"
                    >
                        <div 
                            class="flex flex-column sm:flex-row sm:align-items-center p-4 gap-3" 
                            :class="{ 'border-top-1 surface-border'
                            :index !== 0 }"
                        >
                            <div class="flex flex-column md:flex-row justify-content-around md:align-items-center flex-1 gap-4">
                                <Tag :value="item.isActive ? 'Ativo' : 'Inativo'" class="" style="left: 4px; top: 4px"></Tag>
                                <div class="flex flex-row md:flex-column justify-content-between align-items-start gap-2">
                                    <div>
                                        <div class="text-lg font-medium text-900 mt-2">{{ item.name }}</div>
                                        <span class="font-medium text-secondary text-sm">{{ item.description }}</span>
                                        <span class="font-medium text-secondary text-sm"> ID= {{ item.id }}</span>
                                    </div>
                                </div>
                                <div class="flex flex-column md:align-items-end gap-5">
                                    <span class="text-xl font-semibold text-900" >{{ money(item.price)}}</span>
                                </div>
                                <div>
                                    <Button class="mx-1" severity="info" rounded raised @click="buttonEditProduct">Editar</Button>
                                    <Button class="mx-1"  severity="warning" rounded raised >Desativar</Button>
                                </div>
                                <template v-if="this.visible == true">
                                    <ProductForm 
                                        :header="header"
                                        :productEdit="productEdit(item.id, item.name, item.price, item.description)"
                                        :visible="this.visible" 
                                        @closedDialog="visible=$event" 
                                        @saveProduct="addProduct($event)"
                                    />
                                </template> 
                                
                            </div>
                        </div>
                    </div>
                </div>
            </template>
        </DataView>
    </div>
</template>

<script>
import DataView from 'primevue/dataview';
import ProductForm from './ProductForm.vue';

export default {
    props: {
          products: Array
    },
    components: { DataView, ProductForm },
    data(){
        return {
            header: 'Edtiar Produto',
            visible: false,
            product: {
                id: '',
                name: '',
                price: '',
                description: '',
            }
        }
    },
    methods: {
        money(value) {
            return 'R$ ' + value + ',00' 
        },
        buttonEditProduct(){
            this.visible = true;
        },
        addProduct(event) {
            this.$emit('editProduct',event)
        },
        productEdit(id, name, price, description){
            this.product.id = id;
            this.product.name = name; 
            this.product.price = price;
            this.product .description = description;
            return this.product
        }
    },
}
</script>