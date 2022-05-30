<template>
  <div class="text-center">
    <v-pagination
      color="#6D64F1"
      :value="value"
      :length="lenthOfItems || 0"
      :total-visible="5"
      @input="onPaginate"
    />
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class Pagination extends Vue {
  @Prop([String, Number]) readonly value!: string | number
  @Prop(Number) readonly lenthOfItems!: number

  onPaginate (index: any) {
    this.$emit('input', index)
  }
}
</script>
