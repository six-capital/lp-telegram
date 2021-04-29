<template>
  <div>
    <header_dark />
    <first_session />
    <how_it_works />
    <sign_up_form id="sign_up_form" />
    <footer_dark />
  </div>
</template>

<script>
import header_dark from "~/components/header_dark";
import first_session from "~/components/sessions/first_session";
import how_it_works from "~/components/sessions/how_it_works";
import sign_up_form from "~/components/sessions/sign_up_form";
import footer_dark from '~/components/footer_dark';
export default {
  components: {
    header_dark,
    first_session,
    how_it_works,
    sign_up_form,
    footer_dark
  }
}
</script>
