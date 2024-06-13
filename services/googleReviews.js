const API_KEY = "AIzaSyD2FlWIQmV2yQHWbsqePzzcTZ-XoXJLfD8";

export async function getGoogleReviews(placeId) {
  const url = `https://maps.googleapis.com/maps/api/place/details/json?placeid=${placeId}&key=${API_KEY}`;
  try {
    const response = await useFetch(url);
    const data = await response.json();
    if (data.result) {
      const { rating, reviews } = data.result;
      return { rating, reviews };
    }
    return { rating: null, reviews: [] };
  } catch (error) {
    console.error("Erreur lors de la récupération des avis Google:", error);
    return { rating: null, reviews: [] };
  }
}
