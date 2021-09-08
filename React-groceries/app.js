import React, { useState, useEffect } from "react";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
  faCircle,
  faCheckCircle,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";

const App = () => {
  // HINT: each "item" in our list names a name, a boolean to tell if its been completed, and a quantity
  const [items, setItems] = useState([
    { itemName: "Apple", quantity: 1, isPurchased: false },
    { itemName: "Grapes", quantity: 3, isPurchased: true },
    { itemName: "Mango", quantity: 2, isPurchased: false },
  ]);
  const [inputValue, setInputValue] = useState("");

  const [totalItemCount, setTotalItemCount] = useState(0);

  const handleAddButtonClick = (index) => {
    const newItem = {
      itemName: inputValue,
      quantity: 1,
      isPurchased: false,
    };

    const newItems = [...items, newItem];

    setItems(newItems);
    setInputValue("");
  };

  const toggleComplete = (index) => {
    const newItems = [...items];

    newItems[index].isPurchased = !newItems[index].isPurchased;

    setItems(newItems);
  };

  const add = (index) => {
    const newItems = [...items];

    var newtotalItemCount = totalItemCount

    newItems[index].quantity++

    setItems(newItems)
  };

  const subtract = (index) => {
    const newItems = [...items];

    newItems[index].quantity--;

    setItems(newItems)
  };

    const total = (index) => {
      const newtotalItemCount = totalItemCount;

      const newItems = [...items];

      return newtotalItemCount + newItems[index].quantity

      setTotalItemCount(newtotalItemCount)
    }
  
    const calculateTotal = () => {
    const totalItemCount = items.reduce((total, item) => {
      return total + item.quantity;
    }, 0);
  
    setTotalItemCount(totalItemCount);
  };
  
  return (
    <div className="app-background">
      <div className="main-container">
        <div className="add-item-box">
          <input
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
            className="add-item-input"
            placeholder="Add an item..."
          />
          <FontAwesomeIcon
            icon={faPlus}
            onClick={() => handleAddButtonClick()}
          />
        </div>
        <div className="item-list">
          {items.map((item, index) => (
            <div className="item-container">
              <div className="item-name" onClick={() => toggleComplete(index)}>
                {item.isPurchased ? (
                  <>
                    <FontAwesomeIcon icon={faCheckCircle} />
                    <span className="completed">{item.itemName}</span>
                  </>
                ) : (
                  <>
                    <FontAwesomeIcon icon={faCircle} />
                    <span>{item.itemName}</span>
                  </>
                )}
              </div>
              <div className="quantity">
                <button>
                  <FontAwesomeIcon icon={faChevronLeft} onClick={() => subtract(index)}/>
                </button>
                <span> {item.quantity} </span>
                <button>
                  <FontAwesomeIcon icon={faChevronRight} onClick={() => add(index)}/>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
