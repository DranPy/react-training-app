import { shallow } from 'enzyme';
import LoginForm from '../LoginForm';
import React from 'react';

describe('<LoginForm />', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<LoginForm />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should submit form', () => {
    const handleSubmit = jest.fn();
    const wrapper = shallow(<LoginForm handleSubmit={handleSubmit} />);
    wrapper.find('form').simulate('submit');
    expect(handleSubmit).toHaveBeenCalledTimes(1);
  });
});
