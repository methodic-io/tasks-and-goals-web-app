import React from 'react';
import List from './list';

const Group = function Group() {
  return (
    <div className="group">
      <div className="label">Group Label</div>
      <div className="lists">
        <span>Lists</span>
        <List />
      </div>
    </div>
  );
};

export default Group;
