import React from 'react';
import {shallow} from 'enzyme';
import {Video} from '../Video';


describe('Video', () => {
    test('renders video component correctly', () => {
        const wrapper = shallow(
            <Video id='HAuXJVI_bUs' />
        );
        expect(wrapper).toMatchSnapshot();
    });

    test('renders null if id in video component is not specified', () => {
        const wrapper = shallow(
            <Video />
        );
        expect(wrapper).toMatchSnapshot();
    });
});