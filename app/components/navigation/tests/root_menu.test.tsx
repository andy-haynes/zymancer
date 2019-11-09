import { shallow } from 'enzyme';
import React from 'react';

import RootMenu from '../root_menu';

describe('RootMenu', () => {
  const wrapper = shallow(<RootMenu />);

  describe('rendering', () => {
    it('should render a <View />', () => {
      expect(wrapper.find('View')).toHaveLength(1);
    });
  });
});
