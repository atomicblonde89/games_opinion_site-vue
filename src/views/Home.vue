<template>
  <div>
    <header class="container text-center py-5">
      <h1>Lista de Juegos Disponibles</h1>
    </header>
    <section class="container">
      <CardListGames />
    </section>
  </div>
</template>

<script>
import CardListGames from "../components/CardListGames.vue"

export default {
  name: "Home",
  components: {
    CardListGames,
  },
};
</script>
