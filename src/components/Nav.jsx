import "../styles/nav.scss";
import { resources } from "../assets/ressurser.js";
import { Link, useLocation } from "react-router-dom"; 

export default function Nav() {
  const location = useLocation(); 

  return (
    <header>
      <nav>
        <ul>
          {resources.map((item, index) => {
            const linkPath = `/${item.category.split(' ')[0].toLowerCase()}`;
            const isActive = location.pathname === linkPath; 

            return (
              <li key={index}
              style={{
                backgroundColor: isActive ? "white" : "var(--morkeblaa)", 
                color: isActive ? "black !important" : "white", 
              }}>
                <Link
                  to={linkPath}
                  className={isActive ? "active" : ""} 
                >
                  {item.category}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}