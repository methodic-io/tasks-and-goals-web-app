import _ from 'lodash';
import React from 'react';
import { Card, CardActions, CardHeader } from 'material-ui/Card';
import Paper from 'material-ui/Paper';
import List from './list';

const Group = function Group() {
  return (
    <div className="group">
      <Card>
        <CardHeader
          title="Group label"
          actAsExpander
          showExpandableButton
        />
        <CardActions expandable>
          <Paper zDepth={1}>
            {[...Array(_.random(2, 10))].map((x, i) => <List key={i + 1} />)}
          </Paper>
        </CardActions>
      </Card>
    </div>
  );
};

export default Group;
