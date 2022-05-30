<template>
  <div class="d-flex">
    <div
      v-for="(item, index) in list"
      :key="index"
      :style="{background: item.color, width: `${item.percent}%`}"
      class="line-progress" />
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class ProgressLine extends Vue {
  @Prop([]) readonly list!: []
}
</script>
<style scoped lang="sass">
.line-progress
  height: 12px
  width: 100%
  &:first-of-type
    border-top-left-radius: 12px
    border-bottom-left-radius: 12px
  &:last-of-type
    border-top-right-radius: 12px
    border-bottom-right-radius: 12px

  // &::after
  //   content: ''
  //   position: absolute
  //   width: 100%
  //   height: 100%
  //   left: 0
  //   background: red

</style>
