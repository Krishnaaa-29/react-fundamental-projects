import { useGlobalContext } from "./context";
import sublinks from "./data";

const Navlinks = () => {
  const { setPageId } = useGlobalContext();

  return (
    <div className="navlinks">
      {sublinks.map((sublink) => {
        const { pageId, page } = sublink;
        return (
          <button
            type="button"
            key={pageId}
            className="navlinks-btn"
            onMouseEnter={() => setPageId(pageId)}
          >
            {page}
          </button>
        );
      })}
    </div>
  );
};
export default Navlinks;
