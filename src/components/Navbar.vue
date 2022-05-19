<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-danger">
    <div class="container">
      <router-link
        class="navbar-brand d-flex w-50 me-auto align-items-center text-light"
        to="/"
      >
        <b-icon-headset animation="cylon-vertical" font-scale="1.5" variant="primary"/>
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
            <b-icon-house-door-fill animation="cylon" font-scale="1.5" variant="success"/>
            Home
          </router-link>
          <router-link class="nav-link text-light" to="/opiniones">
            <b-icon-chat-right-dots-fill animation="fade" font-scale="1.5" variant="warning"/>
            Opiniones
          </router-link>
          <router-link class="nav-link text-light" to="/administracion">
            <b-icon-gear-fill animation="spin" font-scale="1.5" variant="danger"/>
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
