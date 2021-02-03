
import React from "react";
import Task from './Task';

function TaskList({tasks, selected}) {

  const taskList = tasks.map((task, index) => {
    return <Task key={index} text={task.text} category={task.category} />
  })

  return (
    <div className="tasks">
      {taskList}
    </div>
  );
}

export default TaskList;
