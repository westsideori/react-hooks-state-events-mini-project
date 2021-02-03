import React from "react";

function CategoryFilter({categories, setSelected, selected}) {

  const catList = categories.map((cat, index) => {
    // let classN = (cat === selected ? "selected" : null)
    return <button key={index} onClick={() => setSelected(cat)} className={cat === selected ? "selected" : null}>{cat}</button >
  })

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {catList}
    </div>
  );
}

export default CategoryFilter;

