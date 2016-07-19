import _ from 'lodash';
import React from 'react';
import Group from './components/group';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const TasksAndGoals = function TasksAndGoals() {
  return (
    <MuiThemeProvider>
      <div className="tasks-and-goals">
        {[...Array(_.random(2, 10))].map((x, i) => <Group key={i + 1} />)}
      </div>
    </MuiThemeProvider>
  );
};

export default TasksAndGoals;
