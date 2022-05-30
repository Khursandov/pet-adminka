<template>
  <modal-vue :value="value" :max-width="'460px'" @change="closeModal">
    <template #title>
      <div class="text-h5 px-5 text-center font-weight-bold mt-5">
        Are you sure you want to delete <br> this items?
      </div>
    </template>
    <template #body>
      <div class="text-center text-h7">
        Items
        <span
          v-for="(item, index) in list"
          :key="index"
          class="text-link"
        >{{ item }},
        </span>
        will be deleted permanently
      </div>
    </template>
    <template #action>
      <v-row justify="center" class="mb-5">
        <v-col class="text-center">
          <button-vue
            class="mr-2"
            :color="'primary'"
            :text="'Cancel'"
            outlined
            @click="closeModal(false)"
          />
          <button-vue
            class="mr-2"
            :color="'#F19064'"
            icon-id="delete"
            :text="'Delete'"
            :loading="loading"
            @click="onSubmit"
          />
        </v-col>
      </v-row>
    </template>
  </modal-vue>
</template>
<script lang="ts">
import { Vue, Component, Prop, Watch } from 'vue-property-decorator'
import ModalVue from '../ui/Modal.vue'
import ButtonVue from '@/components/ui/Button.vue'
import SvgIcon from '@/components/ui/SvgIcon.vue'

@Component({
  components: {
    SvgIcon,
    ButtonVue,
    ModalVue
  }
})
export default class DeleteModal extends Vue {
  @Prop(Boolean) readonly value?: boolean
  @Prop(Array) readonly list!: Array<string>

  loading: boolean = false

  @Watch('value')
  onValueChanged (_val: any, _oldVal: any) {
    this.loading = false
  }

  closeModal (val: boolean) {
    this.$emit('input', val)
  }

  onSubmit () {
    this.loading = true
    this.$emit('on-submit')
  }
}
</script>
<style scoped>
.text-h7 {
  font-size: 16px;
}
.text-link {
  color: #6D64F1;
}
</style>
