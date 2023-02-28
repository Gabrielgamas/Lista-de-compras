import Item from "./index.jsx";

const AllItems = ({ items, itemsClick, deleteItems }) => {
  return (
    <>
      <h2 className="items-tittle">Itens</h2>
      {items.map((item) => (
        <Item itemsClick={itemsClick} item={item} deleteItems={deleteItems} />
      ))}
    </>
  );
};

export default AllItems;
