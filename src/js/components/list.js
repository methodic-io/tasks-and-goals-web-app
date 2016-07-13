import React from 'react';
import Task from './task';

const List = function List() {
  return (
    <div className="List">
      <div className="label">List Label</div>
      <div className="tasks">
        <span>Tasks</span>
        <Task />
      </div>
    </div>
  );
};

export default List;
