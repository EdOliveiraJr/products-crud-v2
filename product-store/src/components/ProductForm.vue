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
			<div class="flex justify-content-end gap-2">
				<Button 
					label="Cancelar"
					raised
					rounded
					severity="secondary" 
					@click="closeDialog"
				>
				</Button>
				<Button 
					label="Salvar"
					raised
					rounded 
					@click="saveNewProduct(product)"
				>
				</Button>
			</div>
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
			<div class="flex justify-content-end gap-2">
				<Button 
					label="Cancelar" 
					raised
					rounded
					severity="secondary" 
					@click="closeDialog"
				>
				</Button>
				<Button 
					label="Salvar"
					raised
					rounded 
					@click="saveEditProduct(productEdit)"
				>
				</Button>
			</div>
		</div>
	</Dialog>
</template>

<script>
import Dialog from 'primevue/dialog';
import FloatLabel from 'primevue/floatlabel'

export default {
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
		},
	},
	data() {
		return {
			product: {
				id: '',
				name: '',
				price: '',
				description: '',
				isActive: true,
			},
			visibleDialog: this.visible,

		}
	},
	created() {
		if (this.productEdit) {
			this.product = this.productEdit
		}
	},
	methods: {
		closeDialog() {
			this.visibleDialog = false
			this.$emit('closedDialog', this.visibleDialog)
		},
		saveEditProduct(product) {
			this.$emit('saveEditProduct', product)
			this.closeDialog()
		},
		saveNewProduct(product) {
			this.$emit('saveNewProduct', product)
			this.closeDialog()
		},
	},
}
</script>
<style></style>