<template>
  <modal-vue v-model="value" :max-width="'808px'" @change="closeModal">
    <template #title>
      <v-row class="mt-4">
        <v-col class="text-left">
          <div class="text-h5 font-weight-bold">
            {{ title }}
          </div>
        </v-col>
        <v-col class="text-right">
          <button-vue
            class="mr-2"
            icon-id="import"
            :color="'primary'"
            :text="'Import'"
            outlined
          />
        </v-col>
      </v-row>
    </template>
    <template #body>
      <v-divider />
      <v-form
        ref="form"
        v-model="valid"
      >
        <v-row class="mt-5">
          <v-col cols="6">
            <text-input
              v-model="itemObj.custom_id"
              label="Item Id"
              :rules="['required']"
              dense
            />
          </v-col>
          <v-col cols="6">
            <select-input
              v-model="itemObj.inch"
              label="Inches"
              dense
            />
          </v-col>
          <v-col cols="6">
            <text-input
              v-model="itemObj.standart_cost"
              label="Standart cost"
              :type="'number'"
              :rules="['required' ,'number']"
              dense
            />
          </v-col>
          <v-col cols="6">
            <text-input
              v-model="itemObj.length"
              label="Length (inches)"
              :type="'number'"
              :rules="['required' ,'number']"
              dense
            />
          </v-col>
          <v-col cols="6">
            <text-input
              v-model="itemObj.quantity"
              label="Quantity"
              :type="'number'"
              :rules="['required' ,'number']"
              dense
            />
          </v-col>
          <v-col cols="6">
            <text-input
              v-model="itemObj.width"
              label="Width (inches)"
              :type="'number'"
              :rules="['required' ,'number']"
              dense
            />
          </v-col>
          <v-col cols="6">
            <text-input
              v-model="itemObj.days_supply"
              label="Days of supply"
              :type="'number'"
              :rules="['required' ,'number']"
              dense
            />
          </v-col>
          <v-col cols="6">
            <text-input
              v-model="itemObj.height"
              label="Height (inches)"
              :type="'number'"
              :rules="['required' ,'number']"
              dense
            />
          </v-col>
        </v-row>
      </v-form>
    </template>
    <template #action>
      <div class="mb-6">
        <button-vue
          class="mr-2"
          :color="'primary'"
          :text="'Cancel'"
          outlined
          @click="closeModal(false)"
        />
        <button-vue
          class="mr-2"
          :color="'primary'"
          :text="btnText"
          :loading="loading"
          @click="submit"
        />
      </div>
    </template>
  </modal-vue>
</template>
<script lang="ts">
import { Vue, Component, Prop, Watch } from 'vue-property-decorator'
import ModalVue from '../ui/Modal.vue'
import TextInput from '../ui/TextInput.vue'
import SelectInput from '../ui/SelectInput.vue'
import ButtonVue from '@/components/ui/Button.vue'
import SvgIcon from '@/components/ui/SvgIcon.vue'

@Component({
  components: {
    TextInput,
    SelectInput,
    SvgIcon,
    ButtonVue,
    ModalVue
  }
})
export default class AddModal extends Vue {
    @Prop(Boolean) readonly value?: boolean
    @Prop(Boolean) readonly edit?: boolean
    @Prop({}) readonly item?: {}

    valid: boolean = true
    loading: boolean = false

    $refs!: {
      form: HTMLFormElement
    }

    itemObj: {} = {
      custom_id: '',
      inch: '',
      standart_cost: '',
      length: '',
      quantity: '',
      width: '',
      days_supply: '',
      height: ''
    }

    get title () {
      return this.edit ? 'Editing Item' : 'Adding item'
    }

    get btnText () {
      return this.edit ? 'Edit Item' : 'Add item'
    }

    @Watch('value')
    onValueChanged (val: any, _oldVal: any) {
      if (!val) {
        this.resetInput()
        this.$refs.form.reset()
      }
    }

    @Watch('item')
    onItemChanged (val: any, _oldVal: any) {
      if (val) {
        this.itemObj = { ...val }
      } else {
        this.resetInput()
      }
    }

    closeModal (val: boolean) {
      this.$refs.form.reset()
      this.$emit('input', val)
    }

    resetInput () {
      this.itemObj = {
        custom_id: '',
        inch: '',
        standart_cost: '',
        length: '',
        quantity: '',
        width: '',
        days_supply: '',
        height: ''
      }
      this.loading = false
    }

    submit () {
      const isValid = this.$refs.form.validate()
      if (isValid) {
        this.loading = true
        if (this.item) {
          this.$emit('on-edit', this.itemObj)
          return
        }
        this.$emit('on-submit', this.itemObj)
      }
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
