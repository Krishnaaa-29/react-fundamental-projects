const Form = ({ handleSubmit, setNumber, number }) => {
  const handleChange = (e) => {
    e.preventDefault();
    setNumber(e.target.value);
    console.log(e.target.value);
  };

  return (
    <section className="form-container">
      <h4 className="header">Tired of boring lorem ipsum?</h4>
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="para-number" className="form-label">
          paragraphs:{" "}
        </label>
        <input
          type="number"
          min={1}
          max={8}
          step={1}
          name="para-number"
          className="form-input"
          onChange={handleChange}
          value={number}
        />
        <button type="submit" className="submit-btn">
          generate
        </button>
      </form>
    </section>
  );
};
export default Form;
