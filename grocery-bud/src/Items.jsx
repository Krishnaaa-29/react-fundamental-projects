const Items = ({ items, removeItem, editItem }) => {
  return (
    <section className="items-container">
      {items.map((item) => {
        return (
          <article key={item.id} className="item">
            <input
              type="checkbox"
              checked={item.completed}
              onChange={() => editItem(item.id)}
              className="item-input"
            />
            <p
              className="item-name"
              style={{ textDecoration: item.completed && "line-through" }}
            >
              {item.name}
            </p>
            <button className="item-btn" onClick={() => removeItem(item.id)}>
              delete
            </button>
          </article>
        );
      })}
    </section>
  );
};
export default Items;
