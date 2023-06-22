const CategoryButtons = ({ categories, handleClick }) => {
  return (
    <div className="btn-container">
      {categories.map((category) => {
        return (
          <button
            className="category-btn"
            key={category}
            onClick={() => handleClick(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};
export default CategoryButtons;
