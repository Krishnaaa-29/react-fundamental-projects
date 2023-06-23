import { useState } from "react";
import Form from "./Form";
import Items from "./Items";
import { nanoid } from "nanoid";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const getLocalStorage = () => {
  let list = localStorage.getItem("list");
  if (list) {
    list = JSON.parse(localStorage.getItem("list"));
  } else {
    list = [];
  }

  return list;
};

const setLocalStorage = (items) => {
  localStorage.setItem("list", JSON.stringify(items));
};

const defaultItems = JSON.parse(localStorage.getItem("list") || "[]");

function App() {
  const [items, setItems] = useState(defaultItems);

  const addItems = (item) => {
    const newItem = { name: item, id: nanoid(), completed: false };
    const newItems = [...items, newItem];
    setItems(newItems);
    setLocalStorage(newItems);
    toast.success("Item added");
  };

  const removeItem = (id) => {
    const newItems = items.filter((item) => item.id !== id);
    setItems(newItems);
    setLocalStorage(newItems);
    toast.success("Item removed");
  };

  const editItem = (id) => {
    const newItems = items.map((item) => {
      if (item.id === id) {
        const newItem = { ...item, completed: !item.completed };
        return newItem;
      }
      return item;
    });

    setItems(newItems);
    setLocalStorage(newItems);
  };

  return (
    <main className="main-container">
      <ToastContainer position="top-center" />
      <Form addItems={addItems} />
      <Items items={items} removeItem={removeItem} editItem={editItem} />
    </main>
  );
}

export default App;
