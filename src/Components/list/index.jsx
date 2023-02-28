import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import Add from "../additems";
import AllItems from "../Items/AllItems";

import "./list.css";

const List = () => {
  const [Items, setItems] = useState([]);

  const itemsClick = (itemId) => {
    const buyItem = Items.map((item) => {
      if (item.id === itemId) return { ...item, buy: !item.buy };
      return item;
    });
    setItems(buyItem);
  };

  const handleAddItems = (ItemName) => {
    const NewItems = [
      ...Items,
      {
        id: uuidv4(),
        name: ItemName,
        buy: false,
      },
    ];

    setItems(NewItems);
  };

  const deleteItems = (itemId) => {
    const newItems = Items.filter((item) => item.id != itemId);
    setItems(newItems);
  };

  return (
    <div className="all">
      <h1 className="title">Lista de compras</h1>
      <div className="list-container">
        <section className="add-container">
          <Add handleAddItems={handleAddItems} />
        </section>
        <section className="list">
          <AllItems
            items={Items}
            itemsClick={itemsClick}
            deleteItems={deleteItems}
          />
        </section>
      </div>
    </div>
  );
};

export default List;
