const SingleQuestion = ({ id, title, info, toggleQuestion, activeId }) => {
  const isActive = id === activeId;
  return (
    <div className="single-question" key={id}>
      <div className="question-title">
        <h5 className="title">{title}</h5>
        <button className="toggle-btn" onClick={() => toggleQuestion(id)}>
          {isActive ? "-" : "+"}
        </button>
      </div>
      {isActive && <p>{info}</p>}
    </div>
  );
};
export default SingleQuestion;
