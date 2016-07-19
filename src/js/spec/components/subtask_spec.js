import { React, expect, shallowWithContext } from '../spec_helper';
import Subtask from '../../components/subtask';
import Toggle from 'material-ui/Toggle';

describe('Subtask', () => {
  const wrapper = shallowWithContext(<Subtask />);

  it('includes a Toggle', () => {
    expect(wrapper.find(Toggle)).to.have.length(1);
  });

  it('includes a label', () => {
    expect(wrapper.find(Toggle).prop('label')).to.equal('Subtask Label');
  });
});
