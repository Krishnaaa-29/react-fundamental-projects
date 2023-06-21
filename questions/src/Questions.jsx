import { useState } from "react";

import SingleQuestion from "./SingleQuestion";

const Questions = ({ questions, toggleQuestion, activeId }) => {
  return (
    <section className="container">
      <h2 className="header">Questions</h2>
      {questions.map((question) => {
        return (
          <SingleQuestion
            key={question.id}
            {...question}
            toggleQuestion={toggleQuestion}
            activeId={activeId}
          />
        );
      })}
    </section>
  );
};
export default Questions;
