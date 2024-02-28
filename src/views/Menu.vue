<template>
  <div class="menu-container">
    <v-card>
      <v-layout>
        <v-app-bar>
          <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
          <v-toolbar-title class="d-flex justify-center mt-2">
            <router-link to="/">
              <img class="logo-image mt-4" src="../views/images/logo3.svg" :width="260"/>
            </router-link>
          </v-toolbar-title>
          <router-link to="/listnews">
            <v-btn 
              class="menu-button text-uppercase font-weight-bold text-brown-darken-3 xs-" 
              variant="flat" 
              color="orange-darken-1" 
              rounded="xl" 
              size="large"
              @click="redirectToListNews()" 
            >
              IR PARA O BLOG
            </v-btn>
          </router-link>
        </v-app-bar>
        <v-navigation-drawer
          v-model="drawer"
          location="left"
          color="orange-darken-1"
          temporary
        >
          <v-list class="d-flex flex-column ma-3">
            <a href="#home" class="text-decoration-none text-h6 font-weight-bold text-white">
              Início
            </a>
            <a href="#cases" class="text-decoration-none text-h6 font-weight-bold text-white">
              Cases em Destaque
            </a>
            <a href="#contact-us" class="text-decoration-none text-h6 font-weight-bold text-white">
              Fale Conosco
            </a>
          </v-list>
        </v-navigation-drawer>
      </v-layout>
    </v-card>
  </div>
</template>

<script>
  export default {
    data: () => ({
      drawer: false,
      group: null,
    }),

    watch: {
      group () {
        this.drawer = false
      },
    },
    methods: {
      redirectToListNews() {
       this.$router.push(`/listnews/`)
    }
    },
  }
</script>

<style scoped>
.menu-container {
  position: fixed;
  width: 100%;
  z-index: 1000;
}

.logo-image {
  max-width: 100%;
  padding: 50px;
}

.menu-button {
  width: 100%; 
}

@media screen and (max-width: 600px) {
  .menu-container {
    width: 90%;
  }

  .logo-image {
    max-width: 80%;
  }

  .menu-button {
    margin-left: -36px;
  }
}
</style>