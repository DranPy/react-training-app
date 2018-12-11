import { shallow } from 'enzyme';
import React from 'react';

import ProductsList from '../ProductsList';

describe('<ProductsList />', () => {
  const defaultProps = {
    fetchProducts: () => {},
    isLoading: false,
    products: [
      {
        id: '1',
        name: 'test1',
        category: 'category 1',
        price: '1$',
        imgUrl: 'src/1.jpg',
      },
    ],
  };

  it('should render component', () => {
    const wrapper = shallow(<ProductsList {...defaultProps} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should not render component', () => {
    const wrapper = shallow(<ProductsList {...defaultProps} isLoading={true} />);
    expect(wrapper).toMatchSnapshot();
  });
});
