<template>
  <div>
    <div v-if="opinions.length === 0" class="alert alert-danger">
      No existen opiniones por mostrar.
    </div>
    <table v-else class="table table-hover">
      <thead>
        <tr>
          <th>#</th>
          <th>Persona</th>
          <th>Juego</th>
          <th>Opinion</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(opinion, index) in opinions" :key="index">
          <th>{{ index }}</th>
          <td>{{ opinion.nombre_usuario }}</td>
          <td>{{ opinion.nombre_juego }}</td>
          <td>{{ opinion.opinion }}</td>
          <td>
            <button
              :id="'btn-eliminar-' + index"
              class="btn btn-danger me-2"
              @click="deleteOpinion(index)"
            >
              Eliminar
            </button>
            <button
              :id="'btn-editar-' + index"
              class="btn btn-info"
              @click="editar(index)"
            >
              Editar
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <ModalComments isEditing />
  </div>
</template>

<script>
import { mapActions, mapState, mapMutations } from "vuex";
import Modal from "./Modal.vue";

export default {
  name: "TableOpinions",
  components: {
    Modal,
  },
  computed: {
    ...mapState(["opinions"]),
  },
  methods: {
    ...mapActions(["deleteOpinion"]),
    editar(index) {
      const findOpinion = this.opinions.find(
        (opinion, indexOpinion) => index === indexOpinion
      );

      this.$store.commit("SET_NOMBREUSUARIO", findOpinion.nombre_usuario);
      this.$store.commit("SET_OPINION", findOpinion.opinion);
      this.$store.commit("SET_ISOPENMODALOPINION", true);
      this.$store.commit("SET_INDEXOPINIONEDIT", index);
    },
  },
};
</script>
