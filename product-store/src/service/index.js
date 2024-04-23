import api from '../plugins/axios'

const service = {
    async getActivesProducts() {
        try {
            const response = await api.get('/products?isActive=true');
            return response.data.data;
        }
        catch{
            console.log("Erro ao obter dados:", error);
            return null;
        }
    },
    async getInactivesProducts(){
        try{
            const response = await api.get('/products?isActive=false');
            return response.data.data;
        }
        catch{
            console.error("Erro ao obter dados:", error);
            return null;
        }
    },
    async getProduct(id){
        try{
            const response = await api.get(`/products/${id}`);
            return response.data.data;
        }
        catch{
            console.error("Erro ao obter dados:", error);
            return null;
        }
    },
    async addProduct(product){
        try{
            await api.post('/products/', product);
            return alert('Produto adicionado com sucesso');
        }
        catch{
            console.error("Erro ao realizar a operação:", error);
            return null;
        }
    },
    async updateProduct(id, product){
        try{
            await api.put(`/products/${id}`, product);
            return alert('Produto atualizado com sucesso');
        }
        catch{
            console.error("Erro ao realizar operação:", error);
            return null;
        }
    },
    async deleteProduct(id){
        try{
            await api.delete(`/products/${id}`);
            return alert('Produto excluído com sucesso');
        }
        catch{
            console.error("Erro ao realizar operação:", error);
            return null;
        }
    },
    async activeProduct(id){
        try{
            await api.patch(`/products/${id}/active/`);
            return alert('Produto ativado com sucesso');
        }
        catch{
            console.error("Erro ao realizar operação:", error);
            return null;
        }
    },
    async inactiveProduct(id){
        try{
            await api.patch(`/products/${id}/inactive/`);
            return alert('Produto inativado com sucesso');
        }
        catch{
            console.error("Erro ao operação:", error);
            return null;
        }        
    },
}

export default service;