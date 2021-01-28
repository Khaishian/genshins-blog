import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="notfound">
      <h2>Sorry</h2>
      <p>Page cannot be found</p>
      <br />
      <button className="backhome">
        <Link className="linkbutton" to="/">
          Go back
        </Link>
      </button>
    </div>
  );
};

export default NotFound;
