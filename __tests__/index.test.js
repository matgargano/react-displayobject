'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-dom/test-utils';
import DisplayObject from '../src/index';
const key = 'foo';
const value = 'bar';

describe('DisplayObject Component', () => {
  it('should render correctly', () => {
    // Render the DisplayObject component
    const component = TestUtils.renderIntoDocument(
      <DisplayObject data={{[key]: value}}/>
    );

    const titleNode = ReactDOM.findDOMNode(component);
    expect(titleNode.textContent).toContain('\"' + key + '\": \"' + value + '\"');
    
  });
});
