import { React, expect, shallowWithContext } from '../spec_helper';
import Task from '../../components/task';
import Subtask from '../../components/subtask';
import Toggle from 'material-ui/Toggle';
import { CardHeader } from 'material-ui/Card';

describe('Task', () => {
  const wrapper = shallowWithContext(<Task />);

  it('includes a Toggle', () => {
    expect(wrapper.find(Toggle)).to.have.length(1);
  });

  it('includes at least one Subtask', () => {
    expect(wrapper.find(Subtask)).to.have.length.of.at.least(1);
  });

  it('includes a CardHeader with the right title', () => {
    expect(wrapper).to.contain(<CardHeader
      title="Task Label"
      actAsExpander
      showExpandableButton
    />);
  });
});
