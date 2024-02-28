<template>
  <Menu />
  <div class="container">
    <h1 class="title">Blog</h1>
      <v-form class="form-container ma-4 w-75 mx-auto">
        <v-text-field 
          placeholder="Digite o nome da notícia que deseja procurar" 
          type="text" 
          v-model="name"
          variant="outlined" 
          rounded="xl" 
          prepend-inner-icon="mdi-magnify">
      </v-text-field>
      </v-form>

    <div class="card-container">
        <v-card v-for="item in filteredNews" 
        :key="item.id"
        width="40%" 
        rounded="xl" 
        class="ma-6" 
        @mouseover="handleMouseOver"
        @mouseout="handleMouseOut" 
        @click="redirectToProfile(item.id)" 
        :class="{ 'card-hover': isHovered }">

        <v-img class="mx-auto " cover height="250" width="100%" rounded="xl"  :src="item.imagem"></v-img>
        
        <h3 class="font-weight-black mt-5 mx-3 text-center">{{ item.titulo }}</h3>
        
        <v-card-text class="text-center">
          <p class="card-text">
            {{ item.descricao }}
          </p>
        </v-card-text>

        <div class="d-flex justify-center text-decoration-none">
          <v-btn 
            class="text-brown-darken-3 font-weight-black text-capitalize mt-2 mb-6" 
            variant="flat"
            color="orange-darken-1" 
            rounded="xl" 
            size="x-large" 
            :width="200">
              Ler mais
          </v-btn>
        </div>
      </v-card>
    </div>
  </div>
</template>

<script>
import Menu from '/src/views/Menu.vue'
import axios from 'axios'

export default {
  data() {
    return {
      news: [],
      isHovered: false,
      name: '',
    }
  },
  mounted() {
    axios.get('http://127.0.0.1:8000/api/listnews')
      .then((response) => {
        this.news = response.data
      })
      .catch(() => {
        alert('Desculpe, não foi possivel carregar as notícias! Por favor, tente novamente.')
      })
  },
  components: {
    Menu
  },
  computed: {
    filteredNews() {
      return this.news.filter(item => {
        const nameMatch = this.name.trim().toLowerCase() === '' || item.titulo.toLowerCase().includes(this.name.trim().toLowerCase());
        return nameMatch;;
      });
    }
  },
  methods: {
    handleMouseOver() {
      this.isHovered = true;
    },
    handleMouseOut() {
      this.isHovered = false;
    },
    redirectToProfile(itemId) {
      // this.$router.push(`/items/${itemId}`)
      this.$router.push(`/listnews/${itemId}`)
    }
  },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Black+Ops+One&family=Noto+Sans:wght@400;700&family=Poppins&family=Quicksand:wght@300&family=Qwitcher+Grypen:wght@700&family=Rubik&family=Secular+One&display=swap');

.container {
  margin: 0;
  padding: 0;
  border: 0;
  box-sizing: border-box;

  font-family: 'Poppins', Arial, Helvetica, sans-serif;
}

.title {
  margin-top: 100px;
  margin-left: 28px;
}

.form-container {
  display: flex;

}

.card-container {
  height: 100vh;
  width: 80%;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  margin-top: -24px;
  margin: 0 auto;
}

.card-text {
  font-size: 18px;
}

.card-hover {
  transition: transform 0.3s ease-in-out;
}

.card-hover:hover {
  transform: translate(0, -10px);
}

@media screen and (max-width: 600px) {
  .form-container {
    max-width: 100%;
    display: flex;
    flex-direction: column;
  }

  .card-container {
    grid-template-columns: 1fr;
  }
}
</style>