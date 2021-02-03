import React, { useState } from "react";

function NewTaskForm({categories, onTaskFormSubmit}) {
  const [ text, setText ] = useState("");
  const [ category, setCategory ] = useState("Code");

  const options = categories.filter((cat)=> cat !== "All").map((cat, index) => {
    return <option key={index}>{cat}</option>
  })
  function handleSubmit(e){
    e.preventDefault();
    let newTask = {text: text, category: category}
    console.log(category)
    onTaskFormSubmit(newTask);
    setText("");
    setCategory("Code");
  }
  function handleCategory(e){
    setCategory(e.target.value)
  }
  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" value={text} onChange={(e)=> setText(e.target.value)}/>
      </label>
      <label>
        Category
        <select name="category" onChange={handleCategory} value={category}>
          {options}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
