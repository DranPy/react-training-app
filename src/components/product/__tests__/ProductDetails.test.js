import { shallow } from 'enzyme';
import React from 'react';

import ProductDetails from '../ProductDetails';

describe('<ProductDetails />', () => {
  const product = {
    id: '1',
    name: 'test name 1',
    category: 'category 1',
    price: '1$',
    imgUrl: 'src/1.img',
  };

  const defaultProps = {
    match: {
      params: {
        id: product.id,
      },
    },
    fetchProduct: () => {},
    isLoading: false,
    product,
  };

  it(`should trigger fetchProduct function with argument '${product.id}'`, () => {
    const fetchProductHandler = jest.fn();
    shallow(<ProductDetails {...defaultProps} fetchProduct={fetchProductHandler} />);
    expect(fetchProductHandler).toHaveBeenCalledTimes(1);
    expect(fetchProductHandler).toHaveBeenCalledWith(product.id);
  });

  it('should render product details', () => {
    const wrapper = shallow(<ProductDetails {...defaultProps} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should not render product details', () => {
    const wrapper = shallow(<ProductDetails {...defaultProps} isLoading={true} />);
    expect(wrapper).toMatchSnapshot();
  });
});
