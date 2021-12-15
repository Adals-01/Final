import { Link } from "react-router-dom";

export default function Links() {
  return (
    <div className="links">
      <h1>
        <Link to={"./dashboard"} className="link">
          Dashboard
        </Link>
      </h1>
      <h1>
        <Link to={"./home"} className="link">
          Order Form
        </Link>
      </h1>
    </div>
  );
}
