import { useRouter } from 'next/router';
import { getRestaurantDetails, getRestaurantsFromSheet } from "../../utils/getDataFromSheet";


export async function getServerSideProps(context) {
    const {params} = context;
    const restaurantDetails = await getRestaurantDetails(params.name);

    return {
        props: {details: restaurantDetails}
    }
}


export default function Details({details}) {
  const router = useRouter();
  const { id } = router.query;

  if (!router.isReady || !restaurantDetails[id]) {
    return <div>정보가 부족합니다.</div>;
  }

  const details = restaurantDetails[id];

  return (
    <div>
      <h1>{details.name}</h1>
      <p>주소: {details.address}</p>
      <p>번호: {details.phone}</p>
      <p>추천 음식: {details.recommendDishes}</p>
    </div>
  );
}
