import { Link, useRouteError } from "react-router-dom";

const SinglePageError = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div style={{ display: "grid", placeItems: "center" }}>
      <h2 style={{ marginBottom: "2rem" }}>Something Went Wrong...</h2>
      <Link to="/" className="btn">
        Back home
      </Link>
    </div>
  );
};

export default SinglePageError;
