<template>
  <v-main class="accent">
    <v-container>
      <v-row
        no-gutters
        class="mt-0"
      >
        <v-col
          cols="12"
          sm="8"
          offset-sm="2"
        >
          <h2 :class="$vuetify.breakpoint.xs ? 'display-1' : 'display-2'" class="text-sm-display-1 primary--text titulo_adapt font-weight-bold mb-4 mt-0 text-uppercase text-center">
            Cadastre-se agora e lucre hoje mesmo
          </h2>
          <p class="white--text text-center">
            O Grupo Free do Telegram que está dominando o mercado de investimentos esportivos.
          </p>
          <p class="white--text text-center">
            Nossos jogos são separados pelo nosso robô e nossos analistas enviam todos os dias as análises para você lucrar muito!
          </p>
          <p class="white--text text-center">
            Apenas copie, cole e fature com poucos cliques, de forma simples e fácil.
          </p>
          <v-card
            elevation="0"
            class="transparent mt-10 mw-300"
          >
            <v-form
              ref="form"
              v-model="valid"
              lazy-validation
              class="pr-10 pl-10 text-center"
            >
              <v-text-field
                v-model="name"
                :rules="nameRules"
                label="Seu Nome"
                name="nome"
                class="rounded-lg"
                solo
                required
              ></v-text-field>

              <v-text-field
                v-model="email"
                :rules="emailRules"
                label="Seu E-mail"
                name="email"
                class="rounded-lg"
                solo
                required
              ></v-text-field>

              <v-text-field
                v-model="telephone"
                :rules="telephoneRules"
                label="Seu Telefone"
                name="telefone"
                v-mask="['(##) ####-####', '(##) #####-####']"
                class="rounded-lg"
                solo
                required
              ></v-text-field>

              <v-btn
                large
                color="warning"
                id="submit_telegram_form"
                dark
                class="mt-3 mb-10 w-70 rounded-lg"
                @click="process()"
              >
                {{loading ? 'Cadastrando' : 'Cadastre-se'}}
                <v-progress-circular
                  v-if="loading"
                  indeterminate
                  color="white"
                  :size="20"
                  class="ml-3"
                ></v-progress-circular>
              </v-btn>
            </v-form>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-dialog
      v-model="loading"
      hide-overlay
      persistent
      width="300"
    >
      <v-card
        color="secondary"
        dark
      >
        <v-card-text class="pt-3">
          Aguarde, por favor...
          <v-progress-linear
            indeterminate
            color="white"
            class="mb-0"
          ></v-progress-linear>
        </v-card-text>
      </v-card>
    </v-dialog>
    <v-dialog
      v-model="msg_error"
      hide-overlay
      width="300"
    >
      <v-card
        color="orange"
      >
        <v-alert
          type="warning"
          class="mb-0 white--text"
        >
          Nao é possivel prosseguir! <br><small>Algo deu errado 😔</small>
        </v-alert>
      </v-card>
    </v-dialog>
  </v-main>
</template>

<script>
export default {
  data: () => ({
    valid: true,
    name: '',
    nameRules: [
      v => !!v || 'Informe seu nome'
    ],
    email: '',
    emailRules: [
      v => !!v || 'Informe seu e-mail',
      v => /.+@.+\..+/.test(v) || 'O e-mail precisa ser válido',
    ],
    telephone: '',
    telephoneRules: [
      v => !!v || 'Digite seu telefone',
      v => v.length > 13 || 'O telefone precisa ser válido',
    ],
    column: null,
    loading: false,
    msg_error: false
  }),
  methods:{
    process(){
      this.validate_form().then(()=>{
        this.valid ? this.send() : '';
      });
    },
    async validate_form() {
      return await this.$refs.form.validate();
    },
    async send() {
      this.loading = true;
      await this.$axios.$post('x-green/contact',{
          name: this.name,
          email: this.email,
          telephone: this.telephone,
          message: null,
          origin: "LEAD_TELEGRAM_lp_x-green",
          notify_email: null
        }
      )
        .then(response => {
          console.log('Lead cadastrado!');
          console.log(response);
          this.track().then(() => {
            window.location.href = "https://t.me/grupofreeXGREEN";
          })
        })
        .catch(response => {
          this.loading = false;
          this.msg_error = true;
          console.log('Erro!');
          console.log(response);
        });
    },
    async track() {
      await this.$gtag.event('Submit Form Sign Up', {
        'event_label': 'Gs0jCOGluIwCEJCqrLUB',
        'event_category': 'Enviar formulário de lead',
        'value': '1'
      })
    }
  }
}
</script>
<style>
.mw-300{
  max-width: 470px !important;
  margin: 0 auto !important;
}
.w-70{
  width: 70%;
}
</style>
