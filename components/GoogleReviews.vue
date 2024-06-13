<script setup>
import { ref, onMounted } from "vue";
import { getGoogleReviews } from "~/services/googleReviews";

const rating = ref(null);
const reviews = ref([]);

const fetchReviews = async () => {
  const placeId = "ChIJVVXpunxu5kcRURQk-HMBEWs";
  const { rating: fetchedRating, reviews: fetchedReviews } =
    await getGoogleReviews(placeId);
  rating.value = fetchedRating;
  reviews.value = fetchedReviews;
};

onMounted(fetchReviews);
</script>

<template>
  <div class="mx-auto mt-4 max-w-4xl rounded-lg bg-white p-6 shadow-md">
    <h2 class="mb-4 text-center text-2xl font-bold text-diagcity-violet">
      Note Google
    </h2>
    <div class="mb-6">
      <p v-if="rating" class="text-lg text-diagcity-gray">
        Note globale :
        <span class="text-xl font-semibold text-green-500"
          >{{ rating }} / 5</span
        >
      </p>
      <p v-else class="text-lg text-gray-500">Aucune note disponible.</p>
    </div>
    <h3 class="mb-4 text-center text-xl font-semibold text-diagcity-violet">
      Derniers avis
    </h3>
    <ul v-if="reviews.length > 0" class="space-y-4">
      <li
        v-for="review in reviews"
        :key="review.author_name"
        class="rounded-lg bg-gray-100 p-4 shadow-sm"
      >
        <p class="text-lg font-semibold text-diagcity-gray">
          <span class="text-diagcity-violet">{{ review.author_name }}</span> -
          <span class="font-bold text-yellow-500"
            >{{ review.rating }} étoiles</span
          >
        </p>
        <p class="mt-2 text-gray-600">{{ review.text }}</p>
      </li>
    </ul>
    <p v-else class="text-center text-lg text-diagcity-gray">
      Aucun avis disponible.
    </p>
  </div>
</template>
