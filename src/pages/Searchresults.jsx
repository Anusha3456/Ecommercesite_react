import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

function SearchResults() {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('q');
  const [results, setResults] = useState([]);

  const allProducts = [
    { id: 1, name: 'iPhone 14', category: 'electronics' },
    { id: 2, name: 'Wooden Sofa', category: 'furniture' },
    { id: 3, name: 'Perfume', category: 'fragrance' },
    { id: 4, name: 'Organic Rice', category: 'groceries' },
    { id: 5, name: 'Cotton Shirt', category: 'mensshirts' },
  ];

  useEffect(() => {
    if (query) {
      const filtered = allProducts.filter((p) =>
        p.name.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filtered);
    }
  }, [query]);

  return (
    <div style={{ padding: '30px' }}>
      <h2>
        Search Results for: <em>{query}</em>
      </h2>
      {results.length > 0 ? (
        <ul>
          {results.map((product) => (
            <li key={product.id}>
              <a href={`/${product.category}/${product.id}`}>
                {product.name}
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <p>No matching products found 😕</p>
      )}
    </div>
  );
}

export default SearchResults;
