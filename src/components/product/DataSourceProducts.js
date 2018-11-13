import { Component } from 'react';
import api from '../../utils/api-helper';

class DataSourceProducts extends Component {
  static defaultProps = {
    isFetchImmediately: false,
  };

  state = {
    isLoading: false,
    products: [],
  };

  fetchProducts = async () => {
    this.setState({ isLoading: true });
    const products = await api.getAllProducts();
    this.setState({
      isLoading: false,
      products,
    });

    return products;
  };

  componentDidMount() {
    const { isFetchImmediately } = this.props;
    if (isFetchImmediately) {
      this.fetchProducts();
    }
  }

  render() {
    const { isLoading, products } = this.state;

    const newProps = {
      fetchProducts: this.fetchProducts,
      isLoading,
      products,
    };

    return this.props.children(newProps);
  }
}

export default DataSourceProducts;
