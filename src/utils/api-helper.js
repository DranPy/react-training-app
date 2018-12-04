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
    return response.data;
  },
  updateProduct: async (id, product) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const data = JSON.stringify(product);
    const response = await api.put(`/products/${id}`, data, config);
    return response.data;
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
  signIn: async user => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const response = await api.post('/signIn', JSON.stringify(user), config);
    return response.data;
  },
  signUp: async user => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const response = await api.post('/signUp', JSON.stringify(user), config);
    return response.data;
  },
  checkUserSession: async token => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const response = await api.post('/session', JSON.stringify({ token }), config);
    return response.data;
  },
};

export default apiHelper;
