function LinkList({ list }) {
  return (
    <ul>
      {list.map((link) => (
        <li key={link.id}>
          <a href={link.url} target="_blank" rel="noreferrer">
            {link.name}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default LinkList;
