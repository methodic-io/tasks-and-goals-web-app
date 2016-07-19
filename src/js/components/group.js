import _ from 'lodash';
import React from 'react';
import { Card, CardActions, CardHeader } from 'material-ui/Card';
import Paper from 'material-ui/Paper';
import List from './list';

const Group = function Group() {
  return (
    <Card className="group">
      <CardHeader
        title="Group Label"
        actAsExpander
        showExpandableButton
      />
      <CardActions expandable>
        <Paper zDepth={1}>
          {[...Array(_.random(2, 10))].map((x, i) => <List key={i + 1} />)}
        </Paper>
      </CardActions>
    </Card>
  );
};

export default Group;
