import { React, expect, mount } from '../spec_helper';
import Subtask from '../../components/subtask';

describe('Subtask', () => {
  it('includes a checkbox', () => {
    expect(mount(<Subtask />)).to.contain(<input type="checkbox" />);
  });

  it('includes a label', () => {
    expect(mount(<Subtask />)).to.contain(<div className="label">Subtask Label</div>);
  });
});
