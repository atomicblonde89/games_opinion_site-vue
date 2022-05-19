<template>
  <div id="modal" v-if="isOpenModalOpinion">
    <transition name="modal">
      <div class="modal-mask">
        <div class="modal-wrapper">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">
                  {{ getTitleModal(gameSelected) }}
                </h5>
                <b-button
                  type="button"
                  class="close btn btn-danger"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true" @click="closeModal">&times;</span>
                </b-button>
              </div>
              <div class="modal-body">
                <div class="mb-3">
                  <label for="txt_nombre_usuario" class="form-label"
                    >Nombre Usuario</label
                  >
                  <input
                    class="form-control"
                    id="txt_nombre_usuario"
                    placeholder="Evan You"
                    type="text"
                    v-model="nombre_usuario"
                  />
                </div>
                <div class="mb-3">
                  <label for="txt_opinion" class="form-label">Opinion</label>
                  <textarea
                    id="txt_opinion"
                    class="form-control"
                    rows="3"
                    v-model="opinion"
                  ></textarea>
                </div>
              </div>
              <div class="modal-footer">
                <b-button type="button" class="btn btn-secondary" @click="closeModal">
                  Cerrar
                </b-button>
                <button type="button" class="btn btn-primary" @click="accion">
                  Guardar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "Modal",
  props: {
    isEditing: {
      type: Boolean,
      default() {
        return false;
      },
    },
  },
  computed: {
    ...mapState(["isOpenModalOpinion", "gameSelected"]),
    nombre_usuario: {
      get() {
        return this.$store.state.opinion.nombre_usuario;
      },
      set(value) {
        this.$store.commit("SET_NOMBREUSUARIO", value);
      },
    },
    opinion: {
      get() {
        return this.$store.state.opinion.opinion;
      },
      set(value) {
        this.$store.commit("SET_OPINION", value);
      },
    },
  },
  methods: {
    ...mapActions(["closeModal", "addOpinion", "editOpinion"]),
    accion() {
      if (!this.isEditing) {
        this.addOpinion();
      } else {
        this.editOpinion();
      }
    },
    getTitleModal(gameSelected) {
      const { isEditing } = this;
      return isEditing
        ? "Estas editando una opinion"
        : `Escribe tu Opinion para el juego: ${gameSelected.name}`;
    },
  },
};
</script>

<style scoped>

.modal-content {
  background-image:url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSmNFPH_lXFlNt5yCLIsCj4HIClsdxO3QvDw&usqp=CAU");
}
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}
</style>
