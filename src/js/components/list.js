import _ from 'lodash';
import React from 'react';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import Paper from 'material-ui/Paper';
import Task from './task';

const List = function List() {
  return (
    <Card className="List">
      <CardHeader
        title="List Label"
        actAsExpander
        showExpandableButton
      />
      <CardText expandable>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
        Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
        Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
      </CardText>
      <CardActions expandable>
        <Paper zDepth={2}>
          {[...Array(_.random(2, 10))].map((x, i) => <Task key={i + 1} />)}
        </Paper>
      </CardActions>
    </Card>
  );
};

export default List;
