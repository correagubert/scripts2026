import { api } from './api.js'

// Busca e mostra os produtos
export async function getProdutos() {
    const response = await api.get('/produto');
    if (response.status === 200) return response.data?.data ?? [];
    return [];
}

export async function addProdutos(produto) {
    const response = await api.post('/produto', produto);
    if (response.status === 201) return true;
    return false;
}

export async function editProdutos(id, produto) {
    const response = await api.patch(`/produto/${id}`, produto);
    if (response.status === 200) return true;
    return false;
}

export async function deleteProdutos(id) {
    const response = await api.delete(`/produto/${id}`);
    if (response.status === 200) return true;
    return false;
}