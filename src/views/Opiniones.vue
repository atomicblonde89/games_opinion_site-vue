<template>
  <div>
    <header class="container text-center py-5">
      <h1>Lista de Opiniones</h1>
    </header>
    <section class="container">
      <Opinions/>
    </section>
  </div>
</template>

<script>
import Opinions from "../components/Opinions.vue"

export default {
  name: "Opiniones",
  components: {
    Opinions,
  },
};
</script>
