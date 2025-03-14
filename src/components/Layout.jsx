import Nav from "./Nav";
import "../styles/layout.scss";

export default function Layout({ children }) {
    return (
        <>
        <Nav></Nav>
        {children}
        </>
    );
  }