<template>
  <v-main class="secondary">
    <v-container>
      <v-row
        no-gutters
        class="mt-0"
      >
        <v-col
          cols="12"
          sm="6"
          class="pa-4"
        >
          <h2 :class="$vuetify.breakpoint.xs ? 'display-1' : 'display-2'" class="text-sm-display-1 primary--text titulo_adapt font-weight-bold mb-4 mt-0 text-uppercase">
            Como funciona <nobr>a X-GREEN</nobr>
          </h2>
          <p class="white--text">
            Apenas copie e cole nossos sinais e lucre em poucos passos.
          </p>
          <p class="white--text">
            Não perca tempo analisando, nem se preocupe em assistir jogos. Você pode fazer de qualquer lugar, nem precisa sair de casa.
          </p>
          <p class="white--text">
            Temos um Robô que seleciona os jogos e uma equipe especializada em fazer as análises para te enviar as melhores oportunidades de lucro.
          </p>
        </v-col>
        <v-col
          cols="12"
          sm="6"
          class="pa-sm-4"
        >
          <div class="ma-0 pr-4 d-sm-flex">
            <div class="pa-0 central_divider d-none d-sm-flex"></div>
            <div class="ma-0 pa-0 w-100">
              <v-list class="transparent" subheader>
                <template v-for="(item, index) in items">
                  <v-subheader
                    v-if="item.header"
                    :key="item.header"
                    v-text="item.header"
                  ></v-subheader>

                  <v-divider
                    v-else-if="item.divider"
                    :key="index"
                    :inset="item.inset"
                    class="list_divider"
                  ></v-divider>

                  <v-list-item
                    v-else
                    :key="item.title"
                  >
                    <v-list-item-avatar>
                      <v-img :src="item.avatar"></v-img>
                    </v-list-item-avatar>

                    <v-list-item-content>
                      <v-list-item-title class="white--text" v-html="item.title"></v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </template>
              </v-list>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>
<script>
export default {
  data: () => ({
    items: [
      {
        avatar: '/images/numbers/01.png',
        title: 'Copie nossas análises',
      },
      { divider: true, inset: true },
      {
        avatar: '/images/numbers/02.png',
        title: 'Lucre com 15 minutos do seu dia',
      },
      { divider: true, inset: true },
      {
        avatar: '/images/numbers/03.png',
        title: 'Opere de qualquer lugar',
      },
      { divider: true, inset: true },
      {
        avatar: '/images/numbers/04.png',
        title: 'Não perca tempo analisando partidas',
      },
      { divider: true, inset: true },
      {
        avatar: '/images/numbers/05.png',
        title: 'Mais de 95% de assertividade',
      }
    ]
  })
}
</script>
<style>
.list_divider{
  border: 1px dashed #00ff5b !important;
}
.central_divider{
  border: 3px solid #435971;
  border-radius: 3px;
  margin: 0 16px 0 0;
}
.w-100{
  width: 100%;
}
@media only screen and (max-width: 450px) {
  .v-list-item__title{
    font-size: .8rem !important;
  }
}
</style>