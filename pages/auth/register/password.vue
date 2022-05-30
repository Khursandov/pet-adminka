<template>
  <div>
    <v-card width="530" class="mx-auto px-16 py-14 card" rounded="20">
      <v-card-title class="card__title pl-0">
        Create an account
      </v-card-title>
      <v-card-subtitle class="my-2 mt-0 card__subtitle pl-0">
        Already have an account?
        <nuxt-link to="/auth/login" class="text-decoration-none">
          Log in
        </nuxt-link>
      </v-card-subtitle>
      <v-card-text class="px-0">
        <v-row class="w-100 m-auto">
          <v-col cols="12" class="p-0">
            <text-input
              label="Create password"
              :type="getPasswordInputType"
              icon-id="mdi-eye-off"
              :value="userPass.password"
              @append-click="changeInputType"
              @input="handleInput({'password': $event})"
            />
          </v-col>
          <v-col cols="12" class="p-0">
            <text-input
              label="Confirm password"
              :type="getPasswordInputType"
              icon-id="mdi-eye-off"
              :value="userPass.rePassword"
              @append-click="changeInputType"
              @input="handleInput({'rePassword': $event})"
            />
          </v-col>
        </v-row>
      </v-card-text>

      <v-card-actions class="px-0">
        <div class="w-100">
          <button-vue
            color="primary"
            text="Sign up"
            class="mb-4"
            :to="'confirm-email'"
            :disabled="isUserDataExists"
            block
            large
          />
          <seperator :text="'Or'" />
          <button-vue
            color="primary"
            text="Continue with Google"
            class="mt-4"
            icon-id="google"
            outlined
            block
            large
          />
        </div>
      </v-card-actions>
    </v-card>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { Getter, Mutation } from 'vuex-class'
import TextInput from '~/components/ui/TextInput.vue'
import ButtonVue from '~/components/ui/Button.vue'
import Seperator from '~/components/ui/Seperator.vue'
@Component({
  layout: 'auth',
  components: {
    TextInput,
    ButtonVue,
    Seperator
  }
})
export default class Password extends Vue {
  @Getter('localStorage/getUser') getUser: any
  @Getter('localStorage/isUserDataExists') isUserDataExists: any
  @Mutation('localStorage/SET_USER') SET_USER: any

  showPassword: boolean = false

  userPass: {} = {
    password: '',
    rePassword: ''
  }

  get getPasswordInputType () {
    return this.showPassword ? 'text' : 'password'
  }

  get user () {
    return this.getUser
  }

  changeInputType () {
    this.showPassword = !this.showPassword
  }

  handleInput (value: any) {
    this.userPass = { ...this.user, ...value }
  }
}
</script>
<style scoped lang="sass">
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
