import "./items.css";
import { TiDeleteOutline as Delete } from "react-icons/ti";

const Item = ({ item, itemsClick, deleteItems }) => {
  const deleteItem = (e) => {
    deleteItems(e);
  };

  return (
    <div
      className="items"
      style={item.buy ? { borderLeft: "6px solid #3A98B9" } : {}}
    >
      <div className="items-name" onClick={() => itemsClick(item.id)}>
        {item.name}
      </div>
      <div className="icons">
        <button
          onClick={() => deleteItem(item.id)}
          className="remove-items-button"
        >
          <Delete />
        </button>
      </div>
    </div>
  );
};

export default Item;
