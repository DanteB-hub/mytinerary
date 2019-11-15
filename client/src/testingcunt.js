import React from 'react';
import { shallow , mount} from 'enzyme';
import Header from "components/header"

describe('Header', () => {
    it('should render correctly in "debug" mode', () => {
      const component = shallow(<Header/>);
    
      expect(component).toMatchSnapshot();
    })});