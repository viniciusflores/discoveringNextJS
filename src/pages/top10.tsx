import { GetStaticProps } from 'next';

interface IProduct {
  id: string;
  title: string;
}

interface ITop10Products {
  products: IProduct[];
}

export default function Top10({ products }: ITop10Products) {
  return (
    <div>
      <h1>Top 10</h1>

      <ul>
        {products.map((product) => {
          return <li key={product.id}>{product.title}</li>;
        })}
      </ul>
    </div>
  );
}

export const getStaticProps: GetStaticProps<ITop10Products> = async (
  context,
) => {
  const response = await fetch('http://localhost:3333/products');
  const products = await response.json();

  return {
    props: { products },
    revalidate: 5,
  };
};
