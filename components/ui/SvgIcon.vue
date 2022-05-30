<template>
  <component
    :is="getComponent"
    v-if="getComponent"
    v-bind="getProps"
  />
</template>

<script>
export default {
  name: 'IconsVue',

  props: { iconId: String, iconColor: String },

  data () {
    return { baseColor: 'black' }
  },

  computed: {
    getComponent () {
      const { iconId } = this
      return !iconId ? null : require(`./icons/${iconId}`).default
    },

    getColor () {
      const { baseColor, iconColor } = this
      return iconColor || baseColor
    },

    getProps () {
      const { getColor, $attrs } = this
      return { color: getColor, ...$attrs, iconColor: undefined }
    }
  }
}
</script>

<style lang="sass" scoped>
::v-deep svg
  max-width: 100%
  max-height: 100%
</style>
