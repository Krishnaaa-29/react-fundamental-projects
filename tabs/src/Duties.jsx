import { FaAngleDoubleRight } from "react-icons/fa";
import { nanoid } from "nanoid";

const Duties = ({ duties }) => {
  return (
    <div>
      {duties.map((duty) => {
        return (
          <div className="duties-container" key={nanoid()}>
            <span className="icon">
              <FaAngleDoubleRight />
            </span>
            <p className="duty">{duty}</p>
          </div>
        );
      })}
    </div>
  );
};
export default Duties;
