import "./styles.css";
import React, { useState, useRef, useEffect, useContext } from "react";
// import Completed from "./test";

const todolist = [
  {
    chore: "Grocery Shopping",
    isCompleted: false,
  },
  {
    chore: "Clean bathroom",
    isCompleted: false,
  },
  {
    chore: "Make Dinner",
    isCompleted: false,
  },
  {
    chore: "Vacuum",
    isCompleted: false,
  },
];

export default function App() {
  const [list, setlist] = useState(todolist);

  let addItemRef = useRef();

  useEffect(() => {
    console.log(addItemRef);
    addItemRef.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    let formData = {
      addItemRef: addItemRef.current.value,
    };

    const newChore = {
      chore: formData.addItemRef,
      isCompleted: false,
    };
    const postlist = [...list, newChore];
    console.log(postlist);
    setlist(postlist);
  };

  function handleRemove(chore) {
    const newList = list.filter((item) => item.chore !== chore);

    setlist(newList);
    console.log(newList);
  }

  function toggleComplete(index) {
    const postlist = [...list];
    postlist[index].isCompleted = !postlist[index].isCompleted;

    setlist(postlist);
    console.log(postlist);
  }

  return (
    <div className="Contain">
      {list.map((item, index) =>
      <div>
      {item.isCompleted ? (
       <div className="Completed">
        <ul>
       <span><li>{item.chore}</li></span>
       <button onClick={() => handleRemove(item.chore)}>-</button>
       <button onClick={() => toggleComplete(index)}>Not Complete?</button>
       </ul>
       </div>
      ):(
        <div className="App" >
          <ul>
          <span><li>{item.chore}</li></span>
          <button onClick={() => handleRemove(item.chore)}> -</button>
          <button onClick={() => toggleComplete(index)}>Complete?</button>
          </ul>
        </div>
      )}
      </div>
      )}
      <form onSubmit={handleSubmit}>
        <label htmlfor="AddItem">AddItem: </label>
        <input id="AddItem" ref={addItemRef} type="text" />
        <button>Submit</button>
      </form>
  </div>
  );
}
