import { useRouter } from 'next/router';
import { useState } from 'react';
import dynamic from 'next/dynamic';

const AddToCartModal = dynamic(() => import('@/components/AddToCartModal'), {
  loading: () => <p>Loading...</p>,
});

export default function Product() {
  const router = useRouter();
  const [isAddToCartModalVisible, setIsAddToCartModalVisible] = useState(false);

  function handleToCart() {
    setIsAddToCartModalVisible(true);
  }

  return (
    <div>
      <h1>{router.query.slug}</h1>
      <button onClick={handleToCart}>Add to Cart</button>

      {isAddToCartModalVisible && <AddToCartModal />}
    </div>
  );
}
