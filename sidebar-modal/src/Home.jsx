import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "./context";
const Home = () => {
  const { openSidebar, openModal } = useGlobalContext();

  return (
    <div>
      <button type="button" className="sidebar-btn" onClick={openSidebar}>
        <FaBars />
      </button>
      <button type="button" className="modal-btn" onClick={openModal}>
        Show Modal
      </button>
    </div>
  );
};
export default Home;
