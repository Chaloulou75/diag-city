<script setup>
import { ref, onMounted } from "vue";
import { getGoogleReviews } from "~/services/googleReviews";

const rating = ref(null);
const reviews = ref([]);
const userRatingsTotal = ref(0);
const loading = ref(true);
const error = ref(null);

const fetchReviews = async () => {
  loading.value = true;
  error.value = null;
  try {
    const placeId = "ChIJVVXpunxu5kcRURQk-HMBEWs";
    const {
      rating: fetchedRating,
      reviews: fetchedReviews,
      user_ratings_total: fetchedUserRatingsTotal,
    } = await getGoogleReviews(placeId);
    rating.value = fetchedRating;
    reviews.value = fetchedReviews;
    userRatingsTotal.value = fetchedUserRatingsTotal;
  } catch (e) {
    error.value = "Failed to fetch Google reviews. Please try again later.";
  } finally {
    loading.value = false;
  }
};

onMounted(fetchReviews);
</script>

<template>
  <div class="max-w-4xl p-6 mx-auto mt-4 bg-white rounded-lg shadow-md">
    <h2 class="mb-4 text-2xl font-bold text-center text-diagcity-violet">
      Avis Google
    </h2>
    <div class="mb-6">
      <p v-if="rating" class="text-lg font-medium text-diagcity-gray">
        <span class="text-xl font-semibold text-green-500">
          {{ rating }} / 5</span
        >
        sur {{ userRatingsTotal }} avis.
      </p>
      <p v-else class="text-lg text-gray-500">Aucune note disponible.</p>
    </div>
    <h3 class="mb-4 text-xl font-semibold text-center text-diagcity-violet">
      Derniers avis
    </h3>
    <ul v-if="reviews.length > 0" class="space-y-4">
      <li
        v-for="review in reviews"
        :key="review.author_name"
        class="flex p-4 rounded-lg shadow-sm bg-gray-50"
      >
        <img
          :src="review.profile_photo_url"
          alt="Avatar"
          class="w-12 h-12 mr-4 rounded-full"
        />
        <div>
          <div class="flex items-center mb-2">
            <p class="text-lg font-semibold text-diagcity-gray">
              {{ review.author_name }}
            </p>
            <span class="flex items-center ml-2 space-x-1 text-yellow-500">
              <svg
                v-for="n in 5"
                :key="n"
                :class="{
                  'text-yellow-500': n <= review.rating,
                  'text-gray-300': n > review.rating,
                }"
                class="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.049 2.927C9.432 1.641 10.568 1.641 10.951 2.927l1.071 3.286a1 1 0 00.95.691h3.462c1.32 0 1.86 1.694.799 2.437l-2.8 2.033a1 1 0 00-.364 1.118l1.07 3.286c.383 1.286-.965 2.351-2.007 1.618l-2.8-2.033a1 1 0 00-1.175 0l-2.8 2.033c-1.042.733-2.39-.332-2.007-1.618l1.07-3.286a1 1 0 00-.364-1.118l-2.8-2.033c-1.061-.743-.521-2.437.799-2.437h3.462a1 1 0 00.95-.691l1.071-3.286z"
                />
              </svg>
            </span>
            <span class="ml-2 font-medium">{{
              review.relative_time_description
            }}</span>
          </div>
          <p class="mt-1 text-gray-600">{{ review.text }}</p>
        </div>
      </li>
    </ul>
    <p v-else class="text-lg text-center text-diagcity-gray">
      Aucun avis disponible.
    </p>
  </div>
</template>
