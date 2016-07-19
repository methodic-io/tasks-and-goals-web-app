import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import TasksAndGoals from './TasksAndGoals';

// Needed for onTouchTap (this is a pre-requisite for Material UI)
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

require('../styles/app.scss');

ReactDOM.render(<TasksAndGoals />, document.getElementById('app'));
