import { getQuery } from "h3";

export default defineEventHandler(async (event) => {
  const { placeid } = getQuery(event);
  const config = useRuntimeConfig();

  const url = `https://maps.googleapis.com/maps/api/place/details/json?placeid=${placeid}&key=${config.public.googleApiKey}&language=fr`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.result) {
      const { rating, reviews, user_ratings_total } = data.result;
      return { rating, reviews, user_ratings_total };
    }

    return { rating: null, reviews: [], user_ratings_total: 0 };
  } catch (error) {
    console.error("Erreur lors de la récupération des avis Google:", error);
    return { rating: null, reviews: [], user_ratings_total: 0 };
  }
});
