<template>
  <v-app-bar
      absolute
      color="secondary"
      elevation="0"
      dark
      app
      height="80px"
  >
    <v-container class="pa-0">
      <v-row no-gutters>
        <v-col
            cols="12"
            class="d-flex align-center"
        >
          <img class="main_logo" src="/logos/project_logo/xpto.png" alt="logo">
        </v-col>
      </v-row>
    </v-container>
  </v-app-bar>
</template>

<script>
export default {
  components: {
  },
  data () {
    return {
    }
  },
  methods: {
    go_to(link){
      window.open(link, "_blank");
    }
  }
}
</script>

<style>
.main_logo{
  max-height: 40px;
}
</style>
