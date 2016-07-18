import React from 'react';
import Subtask from './subtask';

const Task = function Task() {
  return (
    <div className="task">
      <input type="checkbox" />
      <div className="label">Task Label</div>
      <div className="subtasks">
        <span>Subtasks</span>
        <Subtask />
      </div>
    </div>
  );
};

export default Task;
