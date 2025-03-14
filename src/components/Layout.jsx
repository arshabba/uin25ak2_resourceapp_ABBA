import "../styles/layout.scss"
import Nav from "./Nav";
import PageTitle from "./PageTitle"

export default function Layout({ children }) {
    return (
        <>
        <PageTitle></PageTitle>
        <Nav></Nav>
        {children}
        </>
    );
  }