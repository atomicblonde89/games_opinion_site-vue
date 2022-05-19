<template>
  <div class="row">
    <CardGames
      v-for="(juego, index) in juegos"
      :key="index"
      :juego="juego"
      :index="index"
    />
    <Modal/>
  </div>
</template>

<script>
import { mapState } from "vuex";

import CardGames from "./CardGames.vue"
import Modal from "./Modal.vue"

export default {
  name: "CardListGames",
  components: {
    CardGames,
    Modal,
  },
  computed: {
    ...mapState(["juegos"]),
  },
};
</script>
