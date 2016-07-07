import expect from 'expect';
import expectJSX from 'expect-jsx';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import Subtask from '../../components/subtask';

expect.extend(expectJSX);

describe('Subtask', () => {
  const renderedSubtask = function renderedSubtask() {
    const renderer = TestUtils.createRenderer();
    renderer.render(<Subtask />);
    return renderer.getRenderOutput();
  };

  it('includes a checkbox', () => {
    expect(renderedSubtask()).toIncludeJSX(<input type="checkbox" />);
  });

  it('includes a label', () => {
    expect(renderedSubtask()).toIncludeJSX(<div className="label">Subtask Label</div>);
  });
});
