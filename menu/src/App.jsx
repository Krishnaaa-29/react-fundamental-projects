import { useState } from "react";
import Menu from "./Menu";
import Title from "./Title";
import data from "./data";
import CategoryButtons from "./CategoryButtons";

const newSet = new Set(data.map((item) => item.category));
const allCategories = ["all", ...newSet];

function App() {
  const [menu, setMenu] = useState(data);
  const [categories, setCategories] = useState(allCategories);

  const handleClick = (category) => {
    if (category === "all") {
      setMenu(data);
      return;
    }
    const newMenu = data.filter((item) => item.category === category);
    setMenu(newMenu);
  };

  return (
    <main>
      <Title />
      <CategoryButtons categories={categories} handleClick={handleClick} />
      <Menu menu={menu} />
    </main>
  );
}

export default App;
