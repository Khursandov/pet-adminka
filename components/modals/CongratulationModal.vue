<template>
  <ModalVue v-model="modal" :max-width="'738px'">
    <template #body>
      <div class="modal-body p-14 text-center">
        <div class="modal-body__title my-6">
          <h1 class="display-1 font-weight-bold">
            Congratulations!
          </h1>
        </div>
        <div class="modal-body__paragraph mb-6">
          <p class="modal-body__paragraph--text">
            You are almost there! There is a last step - add items and calculate to capture you real COST TO SERVE
          </p>
        </div>
        <v-progress-linear
          v-model="power"
          disabled
          color="#6D64F1"
          height="24"
          class="mb-6"
          rounded
        >
          <strong class="white--text">{{ power }}%</strong>
        </v-progress-linear>
        <div class="modal-body__action mb-6">
          <button-vue
            color="primary"
            text="Watch tutorial videos"
            class="mb-4 mr-4"
            outlined
            large
          />
          <button-vue
            color="primary"
            text="Add items"
            class="mb-4"
            large
          />
        </div>
      </div>
    </template>
  </ModalVue>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import ModalVue from '~/components/ui/Modal.vue'
import ButtonVue from '~/components/ui/Button.vue'

@Component({
  components: {
    ModalVue,
    ButtonVue
  }
})
export default class CongratulationModal extends Vue {
  modal: boolean = true
  power: number = 90
}
</script>
<style scoped lang="sass">
.modal-body
  padding: 50px 70px
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
    justify-content: center

</style>
