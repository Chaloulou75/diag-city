export async function getGoogleReviews(placeId) {
  const url = `/api/google-reviews?placeid=${placeId}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    if (data.rating !== null) {
      return {
        rating: data.rating,
        reviews: data.reviews,
        user_ratings_total: data.user_ratings_total,
      };
    }
    return { rating: null, reviews: [], user_ratings_total: 0 };
  } catch (error) {
    console.error("Erreur lors de la récupération des avis Google:", error);
    return { rating: null, reviews: [], user_ratings_total: 0 };
  }
}
