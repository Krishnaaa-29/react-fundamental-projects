import { useRef } from "react";
import { useGlobalContext } from "./context";
import sublinks from "./data";

const Submenu = () => {
  const { pageId, setPageId } = useGlobalContext();
  const currentPage = sublinks.find((item) => item.id === pageId);

  const submenuContainer = useRef(null);
  const handleMouseLeave = (e) => {
    const submenu = submenuContainer.current;
    const { left, right, bottom } = submenu.getBoundingClientRect();
    const { clientX, clientY } = e;

    if (clientX < left || clientX > right || clientY > bottom) {
      setPageId(null);
    }
  };

  return (
    <div
      className={
        currentPage ? "submenu-container show-submenu" : "submenu-container"
      }
      onMouseLeave={handleMouseLeave}
      ref={submenuContainer}
    >
      <div className="submenu">
        {sublinks.map((sublink) => {
          const { pageId, page, links } = sublink;
          return (
            <div key={pageId}>
              <h4>{currentPage?.page}</h4>
              <div className="submenu-links">
                {currentPage?.links.map((link) => {
                  const { url, id, icon, label } = link;
                  return (
                    <a key={id} href={url}>
                      {icon}
                      {label}
                    </a>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Submenu;
