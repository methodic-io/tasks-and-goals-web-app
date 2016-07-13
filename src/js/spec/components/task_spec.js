import expect from 'expect';
import expectJSX from 'expect-jsx';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import Task from '../../components/task';

expect.extend(expectJSX);

describe('Task', () => {
  const renderedTask = function renderedTask() {
    const renderer = TestUtils.createRenderer();
    renderer.render(<Task />);
    return renderer.getRenderOutput();
  };

  it('includes a checkbox', () => {
    expect(renderedTask()).toIncludeJSX(<input type="checkbox" />);
  });

  it('includes a label', () => {
    expect(renderedTask()).toIncludeJSX(<div className="label">Task Label</div>);
  });
});
