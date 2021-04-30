<template>
  <div>
    <v-main class="accent">
      <v-container>
        <v-row
          no-gutters
          class="mt-10"
        >
          <v-col
            cols="12"
            sm="7"
          >
            <h1 v-html="banner.title" :class="$vuetify.breakpoint.xs ? 'display-1' : 'display-2'" class="text-sm-display-1 primary--text titulo_adapt font-weight-bold mb-4 mt-10 text-uppercase">
              {{ banner.title }}
            </h1>
            <h4 class="subheading titlefont-weight-light mb-0 white--text">
              {{ banner.subtitle }}
            </h4>
          </v-col>
          <v-col
            sm="5"
            class="d-none d-sm-flex pl-sm-5 pl-md-16"
          >
            <img :style="'margin-top: -'+( windowTop + 80 )+'px;'" class="telephone-telegram" src="/images/mockup_celular_telegram.png" alt="Grupo Free do Telegram">
          </v-col>
        </v-row>
      </v-container>
    </v-main>
    <v-container class="pa-0 height-0px">
      <v-row
        no-gutters
        class="mt-0 height-0px"
      >
        <v-col
          cols="12"
          sm="7"
          class="text-center height-0px"
        >
          <v-btn
            depressed
            color="warning"
            class="rounded-lg top-dislocation"
            large
            :to="{ path: '/',hash:'#sign_up_form'}"
          >
            Quero conhecer e me inscrever
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  data(){
    return{
      banner:{
        title: 'Faça uma renda extra <span class="white secondary--text">&nbsp;todos os dias&nbsp;</span> com a <nobr>X-GREEN</nobr>',
        subtitle: 'Receba diariamente análises do mercado esportivo no seu celular.'
      },
      windowTop: 0
    }
  },
  mounted(){
    window.addEventListener("scroll", this.onScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll);
  },
  methods: {
    onScroll(e) {
      this.windowTop = e.target.documentElement.scrollTop;
    }
  }
}
</script>
<style>
.height-0px{
  height: 0px;
}
.top-dislocation{
  top: -22px;
}
.telephone-telegram{
  position: absolute !important;
  overflow: visible !important;
  width: 100%;
  max-width: 230px;
  z-index: 5 !important;
}
.telephone-telegram div{
  contain: unset;
}
.v-parallax__image{
  width: 230px;
}
.titulo_adapt{
  line-height: 1.2 !important;
}
</style>
