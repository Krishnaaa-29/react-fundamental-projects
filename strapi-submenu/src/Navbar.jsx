import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "./context";
import Navlinks from "./Navlinks";

const Navbar = () => {
  const { openSidebar, setPageId } = useGlobalContext();

  const handleSubmenu = (e) => {
    if (!e.target.classList.contains("navlinks-btn")) {
      setPageId(null);
    }
  };
  return (
    <nav className="navbar" onMouseOver={handleSubmenu}>
      <h3 className="logo">strapi</h3>
      <button type="button" className="sidebar-toggle" onClick={openSidebar}>
        <FaBars />
      </button>
      <Navlinks />
    </nav>
  );
};
export default Navbar;
