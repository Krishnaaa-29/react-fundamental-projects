import MenuItem from "./MenuItem";

const Menu = ({ menu }) => {
  return (
    <section className="menu-container">
      {menu.map((item) => {
        return <MenuItem key={item.id} {...item} />;
      })}
    </section>
  );
};
export default Menu;
