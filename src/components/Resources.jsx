import "../styles/resources.scss";
import { resources } from "../assets/ressurser.js";
import PageTitle from "./PageTitle";
export default function Resources({ category }) {

  const filteredArticle = resources.filter(item => 
    item.category.toLowerCase().includes(category.toLowerCase())
  );
  const article = filteredArticle[0];

  return (
    <>
      <PageTitle title={article.category}></PageTitle>
      <main>
        <article>
          <h1>{article.category}</h1>
          <p>{article.text}</p>

          {article.sources.map((item, index) => (
            <li key={index}>
              <a href={item.url} target="_blank" rel="noopener noreferrer">
                {item.title}
              </a>
            </li>
          ))}
        </article>
      </main>
    </>
  );
}
