import { shallow } from 'enzyme';
import RegistrationForm from '../RegistrationForm';
import React from 'react';

describe('<RegistrationForm />', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<RegistrationForm />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should submit form', () => {
    const handleSubmit = jest.fn();
    const wrapper = shallow(<RegistrationForm handleSubmit={handleSubmit} />);
    wrapper.find('form').simulate('submit');
    expect(handleSubmit).toHaveBeenCalledTimes(1);
  });
});
