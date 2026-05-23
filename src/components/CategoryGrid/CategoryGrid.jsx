import './CategoryGrid.css';

export default function CategoryGrid({ categories }) {
  return (
    <div className="category-grid" id="category">
      {categories.map((category) => (
        <article className="category-card" key={category.name}>
          <p className="category-accent">{category.accent}</p>
          <h3>{category.name}</h3>
          <p>{category.description}</p>
        </article>
      ))}
    </div>
  );
}
