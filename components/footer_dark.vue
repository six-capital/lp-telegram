<template>
  <v-footer
    absolute
    app
    class="secondary pt-6 pb-6 unselectable"
  >
    <v-container class="pa-0">
      <v-row no-gutters>
        <v-col
          lg="3"
          md="3"
          sm="2"
          cols="5"
          class="d-flex align-center"
        >
          <img class="footer_logo" src="/logos/project_logo/xpto.png" alt="logo">
        </v-col>
        <v-col
          lg="6"
          md="6"
          sm="10"
          cols="7"
          class="d-flex align-center"
        >
          <p
            class="w-100 mb-0 text-right text-md-center fs-10-pt white--text"
          >
            <nobr>Siga nossas redes sociais:</nobr>
            <nobr>
              <v-btn
                class="ml-2"
                text
                icon
                color="primary"
                @click="go_to('https://www.instagram.com')"
              >
                <img
                  alt="Instagram"
                  src="/logos/social_media_icons/instagram.svg"
                >
              </v-btn>
              <v-btn
                class="ml-1"
                text
                icon
                color="primary"
                @click="go_to('https://www.facebook.com')"
              >
                <img
                  alt="Facebook"
                  src="/logos/social_media_icons/facebook.svg"
                >
              </v-btn>
              <v-btn
                class="ml-1"
                text
                icon
                color="primary"
                @click="go_to('https://twitter.com')"
              >
                <img
                  alt="Twitter"
                  src="/logos/social_media_icons/twitter.svg"
                >
              </v-btn>
            </nobr>
          </p>
        </v-col>
        <v-col
          lg="3"
          md="3"
          sm="12"
          cols="12"
          class="align-center d-none d-md-flex"
        >
          <p
            class="w-100 mb-0 text-right fs-10-pt white--text"
          >
            &copy; {{ new Date().getFullYear() }} All rights reserved.
          </p>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
export default {
  components: {

  },
  methods: {
    go_to(link){
      window.open(link, "_blank");
    },
    go_home() {

    }
  }
}
</script>

<style>
.w-100{
  width: 100%;
}
.fs-10-pt{
  font-size: 10pt;
}
.footer_logo{
  max-height: 40px;
}
</style>
