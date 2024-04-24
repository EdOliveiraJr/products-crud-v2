<template>
    <Dialog 
        :header="header" 
        v-model:visible="visibleDialog" 
        @after-hide="closeDialog"
    >
        <div v-if="!productEdit">
            <FloatLabel class="m-5">
                <InputText id="name" v-model="product.name" />
                 <label for="name">Nome</label>
            </FloatLabel>
            <FloatLabel class="m-5">
                <InputText id="price" v-model="product.price" />
                 <label for="price">Price</label>
            </FloatLabel>
            <FloatLabel class="m-5">
                <InputText id="description" v-model="product.description" />
                 <label for="description">Descrição</label>
            </FloatLabel>
        </div>
        <div v-else>
            <FloatLabel class="m-5">
            <InputText id="name" v-model="productEdit.name" />
             <label for="name">Nome</label>
            </FloatLabel>
            <FloatLabel class="m-5">
                <InputText id="price" v-model="productEdit.price" />
                <label for="price">Price</label>
            </FloatLabel>
            <FloatLabel class="m-5">
                <InputText id="description" v-model="productEdit.description" />
                <label for="description">Descrição</label>
            </FloatLabel>
        </div>
        <div class="flex justify-content-end gap-2">
            <Button type="button" label="Cancelar" severity="secondary" @click="closeDialog"></Button>
            <Button type="button" label="Salvar" @click="saveProduct(product)"></Button>
        </div>
    </Dialog>
</template>

<script>
import Dialog from 'primevue/dialog';
import FloatLabel from 'primevue/floatlabel'

export default {
    props: {
        visible: {
            type: Boolean,
        },
        header: {
            type: String,
            required: true,
        },
        productEdit: {
            type: Object,
        }
    },
    components: { Dialog, FloatLabel },
    data(){
        return {
            visibleDialog: this.visible,
            product: {
                id: '' ,
                name: '',
                price: '',
                description: '',
                isActive: true ,
            },

        }
    },
    methods: {
        closeDialog(){
            this.visibleDialog = false
            this.$emit('closedDialog', this.visibleDialog)
        },
        saveProduct(product){
            this.$emit('saveProduct', product)
            this.closeDialog()
        },
    
    },
    created() {
        if(this.productEdit){
            this.product = this.productEdit
        }
    }
}
</script>

<style>
    
</style>