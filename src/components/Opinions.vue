<template>
  <div>
    <div v-if="opinions.length === 0" class="alert alert-danger">
      No existen opiniones por mostrar.
    </div>
    <div v-else id="accordin_lista_opinions" class="accordion">
      <div v-for="(opinion, index) in opinions" :key="index" class="accordion-item">
        <h2 class="accordion-header" :id="'heading' + index">
          <b-button
            class="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            :data-bs-target="'#collapse' + index"
            aria-expanded="true"
            :aria-controls="'collapse' + index"
          >
            {{ getLabelAccordinTitle(opinion) }}
          </b-button>
        </h2>
        <div
          :id="'collapse' + index"
          class="accordion-collapse collapse"
          :aria-labelledby="'heading' + index"
          data-bs-parent="#accordin_lista_opinions"
        >
          <div class="accordion-body">
            {{ opinion.opinion }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Opinions",
  computed: {
    ...mapState(["opinions"]),
  },
  methods: {
    getLabelAccordinTitle(opinion) {
      return `Opinión creada por: ${opinion.nombre_usuario}, para el juego: ${opinion.nombre_juego}`;
    },
  },
};
</script>

<style></style>
