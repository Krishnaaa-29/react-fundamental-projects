function MenuItem({ id, title, desc, category, price, img }) {
  return (
    <div className="menu-item" key={id}>
      <img src={img} alt={title} className="img" />
      <div className="header">
        <h5 className="title-header">{title}</h5>
        <span className="price">${price}</span>
      </div>
      <p className="desc">{desc}</p>
    </div>
  );
}
export default MenuItem;
