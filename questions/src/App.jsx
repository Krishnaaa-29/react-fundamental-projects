import { useState } from "react";
import data from "./data";
import Questions from "./Questions";

function App() {
  const [questions, setQuestions] = useState(data);
  const [activeId, setActiveId] = useState(null);

  const toggleQuestion = (id) => {
    const newId = id === activeId ? null : id;
    setActiveId(newId);
  };

  return (
    <main>
      <Questions
        questions={questions}
        toggleQuestion={toggleQuestion}
        activeId={activeId}
      />
    </main>
  );
}

export default App;
