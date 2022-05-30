<template>
  <div>
    <v-card width="530" class="mx-auto px-16 py-14 card" rounded="20">
      <v-card-title class="card__title pl-0">
        Create a new password
      </v-card-title>
      <v-card-subtitle class="my-2 mt-0 card__subtitle pl-0">
        Congratulations! You have verified your e-mail Please create a new password
      </v-card-subtitle>
      <v-card-text class="px-0">
        <v-row class="w-100 m-auto">
          <v-col cols="12" class="p-0">
            <text-input
              label="Create password"
              :type="getPasswordInputType"
              icon-id="mdi-eye-off"
              @append-click="changeInputType"
            />
          </v-col>
          <v-col cols="12" class="p-0">
            <text-input
              label="Confirm password"
              :type="getPasswordInputType"
              icon-id="mdi-eye-off"
              @append-click="changeInputType"
            />
          </v-col>
        </v-row>
      </v-card-text>

      <v-card-actions class="px-0">
        <div class="w-100">
          <button-vue
            color="primary"
            text="Create"
            class="mb-4"
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
import TextInput from '~/components/ui/TextInput.vue'
import ButtonVue from '~/components/ui/Button.vue'

@Component({
  layout: 'auth',
  components: {
    TextInput,
    ButtonVue
  }
})
export default class NewPassword extends Vue {
  showPassword: boolean = false

  get getPasswordInputType () {
    return this.showPassword ? 'text' : 'password'
  }

  changeInputType () {
    this.showPassword = !this.showPassword
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
