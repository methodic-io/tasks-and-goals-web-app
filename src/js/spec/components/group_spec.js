import { React, expect, shallowWithContext } from '../spec_helper';
import Group from '../../components/group';
import List from '../../components/list';
import { CardHeader } from 'material-ui/Card';

describe('Group', () => {
  const wrapper = shallowWithContext(<Group />);

  it('includes at least one List', () => {
    expect(wrapper.find(List)).to.have.length.of.at.least(1);
  });

  it('includes a CardHeader with the right title', () => {
    expect(wrapper).to.contain(<CardHeader
      title="Group Label"
      actAsExpander
      showExpandableButton
    />);
  });
});
