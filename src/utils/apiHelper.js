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
};

export default apiHelper;
