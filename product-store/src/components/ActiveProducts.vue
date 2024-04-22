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
                                    </div>
                                </div>
                                <div class="flex flex-column md:align-items-end gap-5">
                                    <span class="text-xl font-semibold text-900" >{{ money(item.price)}}</span>
                                </div>
                                <div>
                                    <Button class="mx-1" severity="info" rounded raised >Editar</Button>
                                    <Button class="mx-1"  severity="warning" rounded raised >Desativar</Button>
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
import DataView from 'primevue/dataview';

export default {
    props: {
        products: {
            type: Array
        }
    },
    components: { DataView },
    methods: {
        money(value) {
            return 'R$ ' + value + ',00' 
        }
    },
    data(){
        return {
        }
    }
}
</script>