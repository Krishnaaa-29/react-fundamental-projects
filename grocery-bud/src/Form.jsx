import { useState } from "react";
import { toast } from "react-toastify";

const Form = ({ addItems }) => {
  const [newItem, setNewItem] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) {
      toast.error("Kindly Enter an Item");
      return;
    }
    addItems(newItem);
    console.log(newItem);
    setNewItem("");
  };

  return (
    <section className="form-container">
      <h4 className="header">Grocery Bud</h4>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          value={newItem}
          id="item"
          className="form-input"
          onChange={(e) => setNewItem(e.target.value)}
        />
        <button type="submit" className="form-btn">
          add item
        </button>
      </form>
    </section>
  );
};
export default Form;
