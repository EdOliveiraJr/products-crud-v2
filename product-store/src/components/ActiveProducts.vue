<template>
	<div class="active-products" >
		<Toast/>
		<h2> Produtos Ativos </h2>
		<DataView :value="products">
			<template #list="slotProps">
				<div class="grid grid-nogutter">
					<div v-for="(item, index) in slotProps.items" 
						class="col-12"
						:key="index" 
					>
						<div class="flex flex-column sm:flex-row sm:align-items-center p-4 gap-3" 
							:class="{'border-top-1 surface-border': index !== 0}"
						>
							<div  class="flex flex-column md:flex-row justify-content-around md:align-items-center flex-1 gap-4">
								<Tag :tabindex="0" :value="item.isActive ? 'Ativo' : 'Inativo'"></Tag>
								<div class="flex flex-row md:flex-column justify-content-between align-items-start gap-2">
									<div :tabindex="0">
										<div class="text-lg font-medium text-900 mt-2">{{ item.name }} </div>
										<span class="font-medium text-secondary text-sm">{{ item.description }}</span>
									</div>
								</div>
								<div class="flex flex-column md:align-items-end gap-5">
									<span class="text-xl font-semibold text-900" :tabindex="0">{{ formatTextToCurrency(item.price) }}</span>
								</div>
								<div>
									<Button
										class="btn-form" 
										label="Editar"
										severity="info" 
										@click="openProductFormEdit(item)"
									/>
									<Button
										class="btn-form" 
										label="Inativar"
										severity="warning" 
										@click="inactivateProduct(item.id)"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</template>
		</DataView>
		<template v-if="this.visible == true">
			<ProductForm 
				:header="header" 
				:productEdit="product" 
				:visible="this.visible"
				@saveEditProduct="updateProduct($event)" 
				@closedDialog="visible = $event" 
			/>
		</template>
	</div>
</template>

<script>
import DataView from 'primevue/dataview';
import ProductForm from './ProductForm.vue';
import service from '../service/index';

export default {
	name: 'ActiveProducts',
	components: { DataView, ProductForm },
	props: {
		products: Array
	},
	data() {
		return {
			header: 'Editar Produto',
			product: {
				description: '',
				id: '',
				name: '',
				price: '',
			},
			visible: false,
		}
	},
	methods: {
		formatTextToCurrency(value) {
			return 'R$ ' + value + ',00';
		},
		openProductFormEdit(item) {
			this.visible = true;
			this.product = item;
		},
		async inactivateProduct(id) {
			try {
				const response =  await service.inactiveProduct(id)
				if(response) this.$emit('loadProducts');
			} catch (error) {
				console.log("Erro ao obter dados:", error);
			}
		},
		async updateProduct(product) {
			try {
				const response = await service.updateProduct(product.id, product);
				if(response)	this.$emit('loadProducts'); // alterar para load-products
			} catch (error) {
				console.log("Erro ao obter dados:", error);
			}
				// .then(() => {
				// })
				// .catch(error => {
				// });
		}
	}
}
</script>