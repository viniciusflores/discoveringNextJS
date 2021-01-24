import { useEffect, useState } from 'react';
import { Title } from '../styles/pages/Home';

interface IProduct {
  id: string;
  title: string;
}

export default function Home() {
  const [recommendedProducts, setRecommendedProducts] = useState<IProduct[]>(
    [],
  );

  useEffect(() => {
    fetch('http://localhost:3333/recommended').then((response) => {
      response.json().then((data) => {
        setRecommendedProducts(data);
      });
    });
  }, []);

  return (
    <div>
      <Title>Hello Rocket</Title>

      <section>
        <Title>Products</Title>

        <ul>
          {recommendedProducts.map((product) => {
            return <li key={product.id}>{product.title}</li>;
          })}
        </ul>
      </section>
    </div>
  );
}
