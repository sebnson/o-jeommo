import { GoogleSpreadsheet } from 'google-spreadsheet';

export async function getRestaurantsFromSheet(cuisines, maxDistance) {
  const doc = new GoogleSpreadsheet(process.env.SPREADSHEET_ID);
  await doc.useServiceAccountAuth({
    client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    private_key: process.env.GOOGLE_PRIVATE_KEY,
  });
  await doc.loadInfo();

  const sheet = doc.sheetsByIndex[0];
  const rows = await sheet.getRows();

  return rows
    .filter(row => {
      const rowDistance = Number(row.distance);
      return (!cuisines.length || cuisines.includes(row.cuisine)) && rowDistance <= maxDistance;
    })
    .slice(0, 3);
}

export async function getRestaurantDetails(restaurantName){
  const sheet = doc.sheetsByIndex[0];
  const row = await sheet.getRows();

  const restaurantRow = rows.find(row=>row.name===restaurantName)

  return restaurantRow ? {
    address: restaurantRow.address,
    phone: restaurantRow.phone,
    recommendedDishes: restaurantRow.recommendedDishes
  } : null;
}