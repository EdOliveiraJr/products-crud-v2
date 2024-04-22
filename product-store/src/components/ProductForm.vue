<template>
    <Dialog header="Adicionar Novo Produto" v-model:visible="visibleDialog">
        <FloatLabel class="m-5">
            <InputText id="name" v-model="value" />
             <label for="name">Nome</label>
        </FloatLabel>
        <FloatLabel class="m-5">
            <InputText id="price" v-model="value" />
             <label for="price">Price</label>
        </FloatLabel>
        <FloatLabel class="m-5">
            <InputText id="description" v-model="value" />
             <label for="description">Descrição</label>
        </FloatLabel>
        <div class="flex justify-content-end gap-2">
            <Button type="button" label="Cancel" severity="secondary" @click="closeDialog"></Button>
            <Button type="button" label="Save" @click="closeDialog"></Button>
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
            value: ''
        }
    },
    methods: {
        closeDialog(){
            this.visibleDialog = false
            this.$emit('closedDialog', this.visibleDialog)
        }
    }
}
</script>

<style>
    
</style>