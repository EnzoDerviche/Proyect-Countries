import React from 'react';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from "enzyme-adapter-react-16";
import Landing from './landing';

Enzyme.configure({adapter: new Adapter()});

describe('<Landing />',() => {

    describe('Estructura', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Landing />);
    })
    it('Renderiza un <Link>', () => {
        expect(wrapper.find('Link')).toHaveLength(1)
    })

    it('Renderiza landing', () => {
      // El orden en el que se encuentran los Labels es importante.
        expect(wrapper.find('div')).toHaveLength(2)
    })
})
});