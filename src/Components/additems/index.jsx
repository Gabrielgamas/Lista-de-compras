import { useState } from "react";
import Button from "../button";
import "./additems.css";
import carrinho from "./carrinho.png";

const Add = ({ handleAddItems }) => {
  const [inputData, setInputData] = useState("");

  const handleInputChange = (e) => {
    setInputData(e.target.value);
  };

  const handleAddItemsClick = () => {
    handleAddItems(inputData);
    setInputData("");
  };

  return (
    <div className="all-container-add">
      <div className="container-add">
        <input
          onChange={handleInputChange}
          value={inputData}
          type="text"
          className="add-input"
        />
        <div className="container-button">
          <Button onClick={handleAddItemsClick}>Adicionar</Button>
        </div>
      </div>
      <img className="img" src={carrinho} alt="" />
    </div>
  );
};

export default Add;
