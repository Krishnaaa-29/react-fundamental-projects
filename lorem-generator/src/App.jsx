import { useState } from "react";
import Form from "./Form";
import data from "./data";
import { nanoid } from "nanoid";

function App() {
  const [number, setNumber] = useState(1);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(number);
    setText(data.slice(0, amount));
  };

  return (
    <main className="main-container">
      <Form handleSubmit={handleSubmit} setNumber={setNumber} number={number} />
      <section className="para-container">
        {text.map((item) => {
          return (
            <p className="para" key={nanoid()}>
              {item}
            </p>
          );
        })}
      </section>
    </main>
  );
}

export default App;
