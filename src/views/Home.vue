<template>
  <Menu />
  <div class="container">
    <div id="home" class="start-container">
      <div class="text-main mx-16" md="6" lg="12" sm="4">
        <h1 class="mb-6 text-orange-darken-1">Tecnologia</h1>
        <p class="text-justify text-h6 mb-3">
          Identificar necessidades, problemas e oportunidades, de forma a propor soluções interativas que facilitem a
          comunicação e otimizem processos.
        </p>
      </div>

      <div class="text-main mx-16" md="6" lg="12" sm="4">
        <h1 class="mb-6 text-orange-darken-1">Comunicação</h1>
        <p class="text-justify text-h6 mb-3">
          Nosso objetivo é criar experiências interativas que aproximem pessoas e marcas.
        </p>
      </div>

      <img src="/src/views/images/text-weknow.svg" :width="400" class="mr-8" md="6" lg="12" sm="4" />
    </div>

    <div id="cases" class="cases-container">
      <v-col cols="6">
        <v-carousel class="start-carousel my-15 ml-16" cycle height="400" hide-delimiter-background
          delimiter-icon="mdi-star" :show-arrows="false">
          <v-carousel-item v-for="(image, photo) in images" :key="photo" :src="image.src" :width="700" cover rounded="xl">
          </v-carousel-item>
        </v-carousel>
      </v-col>

      <v-col cols="6">
        <h1 class="mb-6 ml-16 pl-16">Cases em Destaque </h1>

        <v-col cols="12">
          <div class="d-flex justify-space-around mb-6 w-75">
            <p class="text-justify text-h5 ">
              <strong>Guaraná Jesus</strong>
            </p>

            <v-btn class="menu-button text-uppercase font-weight-bold text-brown-darken-3 xs- " variant="flat"
              color="orange-darken-1" rounded="xl" size="small" @click="redirectToCaseGuarana">
              Mais informações
            </v-btn>
          </div>

          <div class="d-flex justify-space-around mb-6 w-75">
            <p class="text-justify text-h5 ">
              <strong>PDF Maranhão</strong>
            </p>

            <v-btn class="menu-button text-uppercase font-weight-bold text-brown-darken-3 xs- " variant="flat"
              color="orange-darken-1" rounded="xl" size="small" @click="redirectToCasePDF">
              Mais informações
            </v-btn>
          </div>

          <div class="d-flex justify-space-around mb-6 w-75">
            <p class="text-justify text-h5 ">
              <strong>Corre Siô!</strong>
            </p>

            <v-btn class="menu-button text-uppercase font-weight-bold text-brown-darken-3 xs- ml-14" variant="flat"
              color="orange-darken-1" rounded="xl" size="small" @click="redirectToCaseCorreSio">
              Mais informações
            </v-btn>
          </div>

          <div class="d-flex justify-space-around mb-6 w-75">
            <p class="text-justify text-h5 ">
              <strong>Valparaíso</strong>
            </p>

            <v-btn class="menu-button text-uppercase font-weight-bold text-brown-darken-3 xs- ml-14" variant="flat"
              color="orange-darken-1" rounded="xl" size="small" @click="redirectToCaseValparaiso">
              Mais informações
            </v-btn>

          </div>
        </v-col>
      </v-col>

    </div>

    <div id="contact-us" class="contact-us-container">
      <div class="w-50">
        <h1 class="mb-6 mt-10 pa-10">Fale com a gente</h1>
        <p class="text-justify text-h6 mb-3 pr-10">
          Av. dos Holandeses, 1 - Ponta do Farol
        </p>
        <p class="text-justify text-h6 mb-3 pr-10">
          Ed. Biadene Office, 7º Andar
        </p>
        <p class="text-justify text-h6 pr-10 mb-8">
          CEP: 65077-635 - São Luís - MA, Brasil
        </p>
        <div class="button-contact-us">

          <v-btn class="text-h5 text-orange-darken-1 text-uppercase font-weight-bold mt-10 mb-8" color="brown-darken-3"
            rounded="xl" size="x-large" :width="400" :height="60" @click="redirectToContact">
            Entre em contato
          </v-btn>

        </div>
      </div>
      <div class="imagem-contact">
        <v-card class="mx-auto" max-width="900" height="400" width="600"
          image="https://maximize.com.br//assets/img/footer/overview.jpg"></v-card>
      </div>
    </div>

  </div>
</template>

<script>
import Menu from '/src/views/Menu.vue'
import ImagemCarrossel01 from '../views/images/carousel/Case01.png'
import ImagemCarrossel02 from '../views/images/carousel/Case02.png'
import ImagemCarrossel03 from '../views/images/carousel/Case03.png'
import ImagemCarrossel04 from '../views/images/carousel/Case04.png'

export default {
  data() {
    return {
      images: [
        { src: ImagemCarrossel01 },
        { src: ImagemCarrossel03 },
        { src: ImagemCarrossel02 },
        { src: ImagemCarrossel04, },
      ],
    }
  },
  components: {
    Menu
  },
  methods: {
    redirectToCaseGuarana() {
      window.location.href = 'https://maximize.com.br/portfolio/guarana-jesus';
    },
    redirectToCasePDF() {
      window.location.href = 'https://maximize.com.br/portfolio/pdf-ma';
    },
    redirectToCaseCorreSio() {
      window.location.href = 'https://maximize.com.br/portfolio/corre-sio';
    },
    redirectToCaseValparaiso() {
      window.location.href = 'https://maximize.com.br/portfolio/valparaiso';
    },
    redirectToContact() {
      window.location.href = 'https://maximize.com.br/contato';
    }
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

.start-container {
  height: 80vh;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
}

.text-main {
  width: 90%;
}

.cases-container {
  background-color: #000000;
  color: white;

  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.contact-us-container {
  background-color: #EF6C00;
  color: white;

  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.button-contact-us {
  display: flex;
  align-items: center;
  justify-content: center;
}

@media screen and (max-width: 600px) {
  .container {
    font-size: 14px;
  }

  .start-container {
    height: 200vh;
    flex-direction: column;
  }

  .start-carousel img {
    width: 100%;
  }

  .cases-container {
    width: 100%;
    flex-direction: column-reverse;
  }

  .contact-us-container {
    flex-direction: column;
  }

  .imagem-contact {
    width: 100%;
    display: flex;
    text-align: center;
  }

  .adoption-container {
    width: 100%;
  }

  .image-adoption img {
    display: none;
  }
}
</style>