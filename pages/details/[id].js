import { useRouter } from 'next/router';

const restaurantDetails = {
  '1': { name: '식당 A', description: '식당 A에 대한 설명입니다.' },
  '2': { name: '식당 B', description: '식당 B에 대한 설명입니다.' },
  '3': { name: '식당 C', description: '식당 C에 대한 설명입니다.' },
};

export default function Details() {
  const router = useRouter();
  const { id } = router.query;

  if (!router.isReady || !restaurantDetails[id]) {
    return <div>Loading...</div>;
  }

  const details = restaurantDetails[id];

  return (
    <div>
      <h1>{details.name}</h1>
      <p>{details.description}</p>
    </div>
  );
}
