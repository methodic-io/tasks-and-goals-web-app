import React from 'react';
import Chip from 'material-ui/Chip';
import Toggle from 'material-ui/Toggle';

require('../../styles/components/subtask.scss');

const Subtask = function Subtask() {
  return (
    <div className="subtask">
      <Chip>
        <Toggle label="Subtask label" labelPosition="right" />
      </Chip>
    </div>
  );
};

export default Subtask;
