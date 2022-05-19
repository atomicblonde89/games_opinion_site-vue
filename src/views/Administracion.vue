<template>
  <div>
    <header class="container text-center py-5">
      <h1>Administrando la Lista de Opiniones</h1>
    </header>
    <section class="container">
      <TableOpinions />
    </section>
  </div>
</template>

<script>
import TableOpinions from "../components/TableOpinions.vue"
export default {
  name: "Administracion",
  components: {
    TableOpinions,
  },
};
</script>
