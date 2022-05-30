<template>
  <v-app>
    <v-main>
      <div class="login">
        <div class="m-auto h-100">
          <v-row class="m-auto h-100">
            <v-col class="m-auto">
              <div class="login__wrapper">
                <svg-icon icon-id="logo" />
                <div class="ml-4">
                  <h2 class="white--text">
                    COST TO SERVE
                  </h2>
                  <p class="white--text">
                    Log in or create an account
                  </p>
                </div>
              </div>
            </v-col>
            <v-col class="m-auto">
              <Nuxt />
            </v-col>
          </v-row>
        </div>
      </div>
      <v-main />
    </v-main>
  </v-app>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import SvgIcon from '@/components/ui/SvgIcon.vue'
import TextInput from '~/components/ui/TextInput.vue'
import ButtonVue from '~/components/ui/Button.vue'

@Component({
  components: {
    SvgIcon,
    ButtonVue,
    TextInput
  }
})
export default class Auth extends Vue {
}
</script>
<style scoped lang="sass">
.login
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('~/assets/images/Bg.png')
    background-size: 100% 100%
    width: 100vw
    height: 100vh

    &__wrapper
        margin: 0
        display: flex
        justify-content: center
.card
  &__title
    font-size: 32px
    color: #2E2E2E
    font-weight: 700
    line-height: 120%

  &__subtitle
    color: #8D8E90
    font-size: 16px
    line-height: 140%
</style>
