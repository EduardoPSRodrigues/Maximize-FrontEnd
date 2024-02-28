<template>
  <Menu />

  <div v-if="news" class="container">
    <div class="title text-orange-darken-1 text-h5 w-75 text-center">
      <h2> {{ news.titulo }}</h2>
    </div>

    <v-img class="mx-auto mt-5" cover width="40%" rounded="xl" :src="news.imagem"></v-img>

    <div class="title text-h5 text-center ">
      <h2> {{ news.descricao }} </h2>
    </div>

    <v-divider></v-divider>

    <p class="ma-10 text-center"> {{ news.texto_completo }} </p>
  </div>
</template>

<script>
import Menu from '/src/views/Menu.vue'
import axios from 'axios'

export default {
  data: () => ({
    news: null,
  }),

  mounted() {
    const id = this.$route.params.id
    axios.get(`http://127.0.0.1:8000/api/listnews/${id}`).then((response) => {
      this.news = response.data
    })
  },
  components: {
    Menu
  },
  methods: {
  }
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
  margin-left: 110px;
  margin-bottom: 30px;
  width: 80%;
}

@media screen and (max-width: 600px) {

  .container {
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  .title {
    font-size: 1.5rem;
    margin-top: 100px;
  }

}
</style>