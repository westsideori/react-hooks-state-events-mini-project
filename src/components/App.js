import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [ selected, setSelected ] = useState("All");
  const [ tasks, setTasks ] = useState(TASKS)
  const filteredTasks = (selected === "All" ? tasks : tasks.filter(task => task.category === selected))
  function onTaskFormSubmit(newTask){
    setTasks([...tasks, newTask])
  }
  
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} selected={selected} setSelected={setSelected}/>
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={onTaskFormSubmit}/>
      <TaskList tasks={filteredTasks} selected={selected}/>
    </div>
  );
}

export default App;

