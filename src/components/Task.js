import React, { useState } from "react";

function Task({text, category}) {
  const [ clickDelete, setClickDelete ] = useState(false)
  function handleDelete(e){
    setClickDelete(!clickDelete)
  }
  return (
     clickDelete ? null : <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={handleDelete}>X</button>
    </div>
  );
}

export default Task;
