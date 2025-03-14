import "../styles/resources.scss";

export default function Resources({ category }) {
  return (
    <main>
      <article>
        <h1>{category}</h1>
        <p>text</p>
        <ul>
          <li>
            <a href="url">title</a>
          </li>
          <li>
            <a href="url">title</a>
          </li>
          <li>
            <a href="url">titsle</a>
          </li>
        </ul>
      </article>
    </main>
  );
}
