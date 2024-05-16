import api from '../plugins/axios'

const service = {
    async getActivesProducts() {
        return await api.get('/products?isActive=true');
    },
    async getInactivesProducts(){
        return await api.get('/products?isActive=false');
    },
    async getProduct(id){
        return await api.get(`/products/${id}`);
    },
    async addProduct(product){
        return await api.post('/products/', product);
    },
    async updateProduct(id, product){
        return await api.put(`/products/${id}`, product);
    },
    async deleteProduct(id){
        return await api.delete(`/products/${id}`);
    },
    async activeProduct(id){
        return await api.patch(`/products/${id}/active/`);
    },
    async inactiveProduct(id){
        return await api.patch(`/products/${id}/inactive/`);  
    },
}

export default service;