import { FaTimes } from "react-icons/fa";
import sublinks from "./data";
import { useGlobalContext } from "./context";

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();

  return (
    <aside className={isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}>
      <button className="close-btn" onClick={closeSidebar}>
        <FaTimes />
      </button>
      <ul className="sublinks-container">
        {sublinks.map((sublink) => {
          const { pageId, page, links } = sublink;
          return (
            <article key={pageId}>
              <h4>{page}</h4>
              <div className="sublinks">
                {links.map((link) => {
                  const { id, label, icon, url } = link;
                  return (
                    <li key={id} className="links">
                      <a href={url}>
                        {icon} {label}
                      </a>
                    </li>
                  );
                })}
              </div>
            </article>
          );
        })}
      </ul>
    </aside>
  );
};
export default Sidebar;
