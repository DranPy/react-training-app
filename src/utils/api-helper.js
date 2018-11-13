import api from './api';

const apiHelper = {
  getProduct: async id => {
    const response = await api.get(`/products/${id}`);
    return response.data;
  },
  getAllProducts: async () => {
    const response = await api.get(`/products`);
    return response.data;
  },
  createProduct: async product => {
    const response = await api.post(`/products`, JSON.stringify(product), {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response;
  },
  updateProduct: async (id, product) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const data = JSON.stringify(product);
    const response = await api.put(`/products/${id}`, data, config);
    return response;
  },
  deleteProduct: async id => {
    const response = await api.delete(`/products/${id}`);
    return response;
  },
  getCategory: async id => {
    const response = await api.get(`/categories/${id}`);
    return response.data;
  },
  getAllCategories: async () => {
    const response = await api.get(`/categories`);
    return response.data;
  },
  getCategoriesByIds: async ids => {
    const response = await api.get(`/categories`, { data: ids });
    return response.data;
  },
  getAllAuthors: async () => {
    const response = await api.get(`/authors`);
    return response.data;
  },
  getAuthor: async id => {
    const response = await api.get(`/authors/${id}`);
    return response.data;
  },
  login: async user => {
    const response = await api.post('/login', { data: user });
    return response;
  },
  logup: async user => {
    const response = await api.post('/logup', { data: user });
    return response;
  },
};

export default apiHelper;
