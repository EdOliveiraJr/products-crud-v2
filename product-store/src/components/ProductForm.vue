<template>
	<Dialog class="product-form" 
		:header="header" 
		v-model:visible="visibleDialog" 
		@after-hide="closeDialog"
	>
		<div v-if="!productEdit">
			<FloatLabel>
				<InputText id="name" v-model="product.name" />
				<label for="name">Nome</label>
			</FloatLabel>
			<FloatLabel>
				<InputText id="price" v-model="product.price" />
				<label for="price">Preço</label>
			</FloatLabel>
			<FloatLabel>
				<InputText id="description" v-model="product.description" />
				<label for="description">Descrição</label>
			</FloatLabel>
			<div class="flex justify-content-end gap-2">
				<Button 
					class="btn-form"
					label="Cancelar"
					severity="secondary" 
					@click="closeDialog"
				>
				</Button>
				<Button 
					class="btn-form"
					label="Salvar"
					@click="saveNewProduct(product)"
				>
				</Button>
			</div>
		</div>
		<div v-else>
			<FloatLabel>
				<InputText id="name" v-model="productEdit.name" />
				<label for="name">Nome</label>
			</FloatLabel>
			<FloatLabel>
				<InputText id="price" v-model="productEdit.price" />
				<label for="price">Preço</label>
			</FloatLabel>
			<FloatLabel>
				<InputText id="description" v-model="productEdit.description" />
				<label for="description">Descrição</label>
			</FloatLabel>
			<div class="flex justify-content-end gap-2">
				<Button
					class="btn-form"
					label="Cancelar" 
					severity="secondary" 
					@click="closeDialog"
				>
				</Button>
				<Button
					class="btn-form"
					label="Salvar"
					@click="saveEditProduct(productEdit)"
				>
				</Button>
			</div>
		</div>
	</Dialog>
</template>

<script>
import Dialog from 'primevue/dialog';
import FloatLabel from 'primevue/floatlabel';

export default {
	name: 'ProductForm',
	components: { Dialog, FloatLabel },
	props: {
		header: {
			type: String,
			required: true,
		},
		productEdit: {
			type: Object,
		},
		visible: {
			type: Boolean,
		}
	},
	data() {
		return {
			product: {
				id: '',
				name: '',
				price: '',
				description: '',
				isActive: true
			},
			visibleDialog: this.visible
		}
	},
	mounted() {
		if (this.productEdit) {
			this.product = this.productEdit;
		}
	},
	methods: {
		closeDialog() {
			this.visibleDialog = false;
			this.$emit('closedDialog', this.visibleDialog);
		},
		saveEditProduct(product) {
			this.$emit('saveEditProduct', product);
			this.closeDialog();
		},
		saveNewProduct(product) {
			this.$emit('saveNewProduct', product);
			this.closeDialog();
		}
	}
}
</script>
<style></style>