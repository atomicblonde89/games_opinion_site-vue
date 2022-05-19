<template>
  <div class="col-4">
    <div class="card">
      <img :src="juego.background_image" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">{{ juego.name }}</h5>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Rating: {{ juego.rating }}</li>
        <li class="list-group-item">Released: {{ juego.released }}</li>
        <li class="list-group-item">Updated: {{ juego.updated }}</li>
      </ul>
      <div class="card-body">
        <button class="btn btn-primary" @click="setOpenModalOpinion(index)">
          Opinar
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "CardGames",
  props: {
    juego: {
      type: Object,
      default() {
        return {};
      },
    },
    index: {
      type: Number,
      default() {
        return 0;
      },
    },
  },
  methods: {
    ...mapActions(["setOpenModalOpinion"]),
  },
};
</script>
