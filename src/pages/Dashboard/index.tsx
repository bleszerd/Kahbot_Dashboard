import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div>
      <ul>
        <li>
          <Link to={"/dashboard/commands"}>Commands</Link>
        </li>
      </ul>
    </div>
  );
}
