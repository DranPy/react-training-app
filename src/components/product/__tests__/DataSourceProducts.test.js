import { shallow, mount } from 'enzyme';
import React, { Component } from 'react';

import DataSourceProducts from '../DataSourceProducts';

import api from '../../../utils/api-helper';

jest.mock('../../../utils/api-helper');

describe('<DataSourceProducts />', () => {
  let WrapperComponent;

  class MockComponent extends Component {
    render() {
      return <div>Component</div>;
    }
  }

  it('should correct render', () => {
    const wrapper = mount(
      <DataSourceProducts>{data => <MockComponent {...data} />}</DataSourceProducts>
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should fetch products immediately', () => {
    const wrapper = mount(
      <DataSourceProducts isFetchImmediately={true}>
        {data => <MockComponent {...data} />}
      </DataSourceProducts>,
      { disableLifecycleMethods: true }
    );
    const instance = wrapper.instance();
    jest.spyOn(instance, 'fetchProducts');
    instance.componentDidMount();
    expect(instance.fetchProducts).toHaveBeenCalledTimes(1);
  });

  it('should not fetch products immediately', () => {
    const wrapper = mount(
      <DataSourceProducts isFetchImmediately={false}>
        {data => <MockComponent {...data} />}
      </DataSourceProducts>,
      { disableLifecycleMethods: true }
    );
    const instance = wrapper.instance();
    jest.spyOn(instance, 'fetchProducts');
    instance.componentDidMount();
    expect(instance.fetchProducts).not.toHaveBeenCalledTimes(1);
  });

  it('should fetch products to state', async () => {
    const mockProducts = [{ name: 'test 1' }, { name: 'test 2' }];
    api.getAllProducts.mockReturnValue(Promise.resolve(mockProducts));
    const wrapper = mount(
      <DataSourceProducts>{data => <MockComponent {...data} />}</DataSourceProducts>
    );
    const instance = wrapper.instance();
    await instance.fetchProducts();
    expect(wrapper.state('products')).toEqual(mockProducts);
  });
});
