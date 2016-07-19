import { React, expect, shallowWithContext } from '../spec_helper';
import List from '../../components/list';
import Task from '../../components/task';
import { CardHeader } from 'material-ui/Card';

describe('List', () => {
  const wrapper = shallowWithContext(<List />);

  it('includes at least one Task', () => {
    expect(wrapper.find(Task)).to.have.length.of.at.least(1);
  });

  it('includes a CardHeader with the right title', () => {
    expect(wrapper).to.contain(<CardHeader
      title="List Label"
      actAsExpander
      showExpandableButton
    />);
  });
});
