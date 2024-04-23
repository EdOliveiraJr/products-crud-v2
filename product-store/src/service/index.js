import api from '../plugins/axios'

const service = {
    async getActivesProducts() {
        try {
            const response = await api.get('/products?isActive=true')
            return response.data.data
        }
        catch{
            console.error("Erro ao obter dados:", error);
            return null;
        }
    },
    async getInactivesProducts(){
        try{
            const response = await api.get('/products?isActive=false')
            return response.data.data
        }
        catch{
            console.error("Erro ao obter dados:", error);
            return null;
        }
    },
    async getProduct(id){
        try{
            const response = await api.get(`/products/${id}`)
            return response.data.data
        }
        catch{
            console.error("Erro ao obter dados:", error);
            return null;
        }
    },
    async addProduct(product){
        try{
            const response = await api.post('/products/', product)
            return alert('Produto adicionado com sucesso', response)
            
        }
        catch{
            console.error("Erro ao obter dados:", error);
            return null;
        }
    },
    async updateProduct(id, product){
        try{
            const response = await api.put(`/products/${id}`, product)
            return alert('Produto atualizado com sucesso', response);
        }
        catch{
            console.error("Erro ao obter dados:", error);
            return null;
        }
    },
    async deleteProduct(id){
        try{
            const response = await api.delete(`/products/${id}`)
            return alert('Produto excluído com sucesso', response)
            
        }
        catch{
            console.error("Erro ao obter dados:", error);
            return null;
        }
    },
    async activeProduct(id){
        try{
            const response = await api.patch(`/products/${id}/active/`)
            return alert('Produto ativado com sucesso', response)
        }
        catch{
            console.error("Erro ao obter dados:", error);
            return null;
        }
    },
    async inactiveProduct(id){
        try{
            const response = await api.patch(`/products/${id}/inactive/`)
            return alert('Produto ativado com sucesso', response)
        }
        catch{
            console.error("Erro ao obter dados:", error);
            return null;
        }        
    },
}

export default service;