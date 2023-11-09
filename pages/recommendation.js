import Link from 'next/link';
import { getRestaurantsFromSheet } from '../utils/getDataFromSheet';

export async function getServerSideProps(context) {
  const { query } = context;
  const cuisines = query.cuisines ? query.cuisines.split(',') : [];
  const distance = query.distance ? parseInt(query.distance, 10) : 500;

  const restaurants = await getRestaurantsFromSheet(cuisines, distance);

  return {
    props: { restaurants },
  };
}

export default function Recommendation({restaurants}) {
  return (
    <div>
      <h1>식당 추천</h1>
      <ul>
        {restaurants.map((restaurant) => (
          <li key={restaurant.name}>
            <Link href={`/details/${restaurant.id}`}>
              {restaurant.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}