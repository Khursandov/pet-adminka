<template>
  <v-radio-group :value="value" @change="hadleInput">
    <v-radio
      color="#6D64F1"
      :value="inputValue"
    />
  </v-radio-group>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class RadioInput extends Vue {
    @Prop([String, Boolean]) readonly value?: any
    @Prop(String) readonly inputValue!: string

    hadleInput (val: any) {
      this.$emit('input', val)
    }
}
</script>
