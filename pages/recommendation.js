import Link from 'next/link';

const restaurants = [
  { id: 1, name: '식당 A' },
  { id: 2, name: '식당 B' },
  { id: 3, name: '식당 C' },
];

export default function Recommendation() {
  return (
    <div>
      <h1>식당 추천</h1>
      <ul>
        {restaurants.map((restaurant) => (
          <li key={restaurant.id}>
            <Link href={`/details/${restaurant.id}`}>
              {restaurant.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
