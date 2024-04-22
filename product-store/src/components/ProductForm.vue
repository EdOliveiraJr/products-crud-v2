<template>
    <Dialog header="Adicionar Novo Produto" v-model:visible="visibleDialog" @after-hide="closeDialog">
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
        }
    },
    components: { Dialog, FloatLabel },
    data(){
        return {
            visibleDialog: this.visible,
            product: {
                name: '',
                price: '',
                description: '',
                isActive: true,
            }
        }
    },
    methods: {
        closeDialog(){
            this.visibleDialog = false
            this.$emit('closedDialog', this.visibleDialog)
        },
        saveProduct(product){
            console.log(product);
            this.$emit('saveProduct', product)
            this.closeDialog()
        }
    }
}
</script>

<style>
    
</style>