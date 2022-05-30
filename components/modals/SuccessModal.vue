<template>
  <ModalVue v-model="modal" :max-width="'738px'">
    <template #body>
      <div class="modal-body p-16 text-center">
        <svg-icon class="m-auto d-block" :icon-id="'success-monochromatic'" />
        <div class="modal-body__title my-6">
          <h1 class="display-1 font-weight-bold">
            Congratulations!
          </h1>
        </div>
        <div class="modal-body__subtitle mb-6">
          <h2 class="modal-body__subtitle--text">
            You have created an account - activate it!
          </h2>
        </div>
        <div class="modal-body__paragraph mb-6">
          <p class="modal-body__paragraph--text">
            To activate an account you need to pay one time setup payment 249$  and you will receive
            <span>
              <nuxt-link to="/" class="modal-body__paragraph--link text-decoration-none">
                1 FREE CALCULATION
              </nuxt-link>
            </span>
          </p>
        </div>
        <div class="modal-body__action mb-6">
          <button-vue
            color="primary"
            text="Watch tutorial videos"
            class="mb-4"
            outlined
            large
          />
          <button-vue
            color="primary"
            text="Activate my account"
            class="mb-4"
            large
          />
        </div>
        <div clmodal-body__skip>
          <button-vue
            color="primary"
            text="Activate my account"
            class="mb-4"
            large
            only-text
          />
        </div>
      </div>
    </template>
  </ModalVue>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import ModalVue from '~/components/ui/Modal.vue'
import SvgIcon from '@/components/ui/SvgIcon.vue'
import ButtonVue from '~/components/ui/Button.vue'

@Component({
  layout: 'auth',
  components: {
    ModalVue,
    ButtonVue,
    SvgIcon
  }
})
export default class SuccessModal extends Vue {
  modal: boolean = true
}
</script>
<style scoped lang="sass">
.modal-body
  padding: 90px
  color: #2E2E2E

  &__subtitle
    &--text
      font-size: 24px

  &__paragraph
    &--text
      font-size: 16px
    &--link
      color: #6D64F1

  &__action
    display: flex
    justify-content: space-between

</style>
