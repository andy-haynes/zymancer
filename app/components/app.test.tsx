import { shallow } from 'enzyme';
import React from 'react';
import App, { routes } from './app';

describe('App', () => {
  const wrapper = shallow<App>(<App />);

  describe('rendering', () => {
    it('should render a <View />', () => {
      expect(wrapper.find('View')).toHaveLength(1);
    });
  });
});
