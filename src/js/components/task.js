import _ from 'lodash';
import React from 'react';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import Toggle from 'material-ui/Toggle';
import Subtask from './subtask';

const Task = function Task() {
  return (
    <Card className="task">
      <CardHeader
        title="Task Label"
        actAsExpander
        showExpandableButton
      />
      <CardText expandable>
        <Toggle label="Incomplete" labelPosition="right" />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
        Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
        Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
      </CardText>
      <CardActions expandable>
        {[...Array(_.random(2, 10))].map((x, i) => <Subtask key={i + 1} />)}
      </CardActions>
    </Card>
  );
};

export default Task;
