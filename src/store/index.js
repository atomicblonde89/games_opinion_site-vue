import Vue from 'vue'
import Vuex from 'vuex'

import juegos from "../assets/games.json"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    juegos,
    opinions: [],
    opinion: {
      nombre_usuario: "",
      opinion: "",
    },
    gameSelected: {},
    indexOpinionEditing: null,
    isOpenModalOpinion: false,
  },
  mutations: {
    SET_ISOPENMODALOPINION(state, payload) {
      state.isOpenModalOpinion = payload;
    },
    SET_GAMESELECTED(state, payload) {
      state.gameSelected = payload;
    },
    SET_NOMBREUSUARIO(state, payload) {
      state.opinion.nombre_usuario = payload;
    },
    SET_OPINION(state, payload) {
      state.opinion.opinion = payload;
    },
    SET_OPINIONS(state, payload) {
      state.opinions = payload;
    },
    SET_INDEXOPINIONEDIT(state, payload) {
      state.indexOpinionEditing = payload;
    }
  },
  actions: {
    setOpenModalOpinion({ commit, state }, indexGames) {
      const juego_seleccionado = state.juegos.find((juego, index) => {
        return index === indexGames;
      });
      commit('SET_ISOPENMODALOPINION', true);
      commit('SET_GAMESELECTED', juego_seleccionado);
    },
    closeModal({ commit }) {
      commit('SET_ISOPENMODALOPINION', false);
      commit('SET_GAMESELECTED', {});
    },
    addOpinion({ commit, state }) {
      const currentOpinion = {
        ...state.opinion,
        nombre_juego: state.gameSelected.name,
      };
      const newOpinions = [...state.opinions];
      newOpinions.push(currentOpinion);
      commit('SET_OPINIONS', newOpinions);
      commit('SET_ISOPENMODALOPINION', false);
    },
    deleteOpinion({ commit, state }, indexOpinion) {
      const newOpinions = [
        ...state.opinions.slice(0, indexOpinion),
        ...state.opinions.slice(indexOpinion + 1)
      ];
      commit('SET_OPINIONS', newOpinions);
    },
    editOpinion({ commit, state }) {
      const { indexOpinionEditing } = state;
      const currentEditOpinion = {
        ...state.opinions[indexOpinionEditing],
        nombre_usuario: state.opinion.nombre_usuario,
        opinion: state.opinion.opinion,
      };
      const newOpinions = [
        ...state.opinions.slice(0, indexOpinionEditing),
        {
          ...currentEditOpinion,
        },
        ...state.opinions.slice(indexOpinionEditing + 1),
      ];
      commit('SET_OPINIONS', newOpinions);
      commit('SET_ISOPENMODALOPINION', false);
    },
  },
})
