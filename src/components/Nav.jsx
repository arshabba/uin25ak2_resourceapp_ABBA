import "../styles/nav.scss";
import {resources} from "../assets/ressurser.js"

export default function Nav() {


  return (
    <header>
      <nav>
        <ul>
        {resources.map((resource, index) => (
          <li key={index}>
            <a href="" target="_blank" rel="noopener noreferrer">
              {resource.category}
            </a>
            </li>))}
        </ul>
      </nav>
    </header>
  );
}
