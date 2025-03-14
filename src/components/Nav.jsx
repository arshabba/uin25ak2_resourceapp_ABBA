import "../styles/nav.scss";
import { resources } from "../assets/ressurser.js";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <header>
      <nav>
        <ul>
          {resources.map((item, index) => (
            <li key={index}>
              <Link to={`/${item.category.split(' ')[0].toLowerCase()}`}>
                {item.category}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}