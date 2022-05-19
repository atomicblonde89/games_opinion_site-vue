<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-danger">
    <div class="container">
      <router-link
        class="navbar-brand d-flex w-50 me-auto align-items-center text-light"
        to="/"
      >
        <font-awesome-icon icon="fa-solid fa-headphones-simple" class="me-2" />
        Games Opinion
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="navbar-collapse collapse w-100 justify-content-end"
        id="navbarNavAltMarkup"
      >
        <div class="navbar-nav">
          <router-link class="nav-link text-light" to="/">
            <font-awesome-icon icon="fa-solid fa-house" class="me-2" />
            Home
          </router-link>
          <router-link class="nav-link text-light" to="/opiniones">
            <font-awesome-icon icon="fa-solid fa-comments" class="me-2" />
            Opiniones
          </router-link>
          <router-link class="nav-link text-light" to="/administracion">
            <font-awesome-icon icon="fa-solid fa-users-gear" class="me-2" />
            Administración
          </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  background-image: url("../assets/consoles.jpg");
}
</style>
