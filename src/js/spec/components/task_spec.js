import { React, expect, mount } from '../spec_helper';
import Task from '../../components/task';

describe('Task', () => {
  it('includes a checkbox', () => {
    expect(mount(<Task />)).to.contain(<input type="checkbox" />);
  });

  it('includes a label', () => {
    expect(mount(<Task />)).to.contain(<div className="label">Task Label</div>);
  });
});
