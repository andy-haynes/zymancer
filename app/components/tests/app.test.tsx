import { shallow } from 'enzyme';
import React from 'react';

import App from '../app';

describe('App', () => {
  const wrapper = shallow(<App />);

  describe('rendering', () => {
    it('should render a <View />', () => {
      expect(wrapper.find('View')).toHaveLength(1);
    });
  });
});
