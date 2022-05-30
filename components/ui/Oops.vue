<template>
  <div class="body p-14 text-center">
    <svg-icon class="m-auto d-block" :icon-id="'box'" />
    <div class="body__title my-6">
      <h1 class="display-1 font-weight-bold">
        Oops!
      </h1>
    </div>
    <div class="body__paragraph mb-6">
      <p class="body__paragraph--text">
        There is no data to display. Please add items and other info to let us analyse it
      </p>
    </div>
    <div class="body__action mb-6">
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
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import ModalVue from '~/components/ui/Modal.vue'
import SvgIcon from '@/components/ui/SvgIcon.vue'
import ButtonVue from '~/components/ui/Button.vue'

@Component({
  components: {
    ModalVue,
    ButtonVue,
    SvgIcon
  }
})
export default class Oops extends Vue {

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
