import { shallow, mount } from 'enzyme';
import React, { Component } from 'react';

import withProducts from '../withProducts';
import api from '../../utils/api-helper';

jest.mock('../../utils/api-helper');

describe('HOC withProducts', () => {
  let WrapperComponent;

  class MockComponent extends Component {
    render() {
      return <div>Component</div>;
    }
  }

  it('should correct render', () => {
    WrapperComponent = withProducts()(MockComponent);
    const wrapper = shallow(<WrapperComponent />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should fetch products immediately', () => {
    WrapperComponent = withProducts({ isFetchImmediately: true })(MockComponent);
    const wrapper = shallow(<WrapperComponent />, { disableLifecycleMethods: true });
    const instance = wrapper.instance();
    jest.spyOn(instance, 'fetchProducts');
    instance.componentDidMount();
    expect(instance.fetchProducts).toHaveBeenCalledTimes(1);
  });

  it('should not fetch products immediately', () => {
    WrapperComponent = withProducts({ isFetchImmediately: false })(MockComponent);
    const wrapper = shallow(<WrapperComponent />, { disableLifecycleMethods: true });
    const instance = wrapper.instance();
    jest.spyOn(instance, 'fetchProducts');
    instance.componentDidMount();
    expect(instance.fetchProducts).not.toHaveBeenCalledTimes(1);
  });

  it('should fetch products to state', async () => {
    WrapperComponent = withProducts()(MockComponent);
    const mockProducts = [{ name: 'test 1' }, { name: 'test 2' }];
    api.getAllProducts.mockReturnValue(Promise.resolve(mockProducts));
    const wrapper = mount(<WrapperComponent />);
    const instance = wrapper.instance();
    await instance.fetchProducts();
    expect(wrapper.state('products')).toEqual(mockProducts);
  });
});
