<template>
  <v-btn
    :color="propsColor"
    :dark="!disabled"
    :large="large"
    :block="block"
    :outlined="outlined"
    :to="to"
    :icon="icon"
    :small="small"
    :loading="loading"
    :text="onlyText"
    elevation="0"
    :disabled="disabled"
    @click="clickHandle"
  >
    <svg-icon v-if="iconId" :icon-color="iconColor" :icon-id="iconId" />
    <span v-if="text" :class="{'ml-3' : iconId}">
      {{ text }}
    </span>
  </v-btn>
</template>
<script>
import SvgIcon from '@/components/ui/SvgIcon.vue'
export default {
  name: 'ButtonVue',

  components: {
    SvgIcon
  },

  props: {
    text: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: 'light'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    large: {
      type: Boolean,
      default: false
    },
    small: {
      type: Boolean,
      default: false
    },
    outlined: {
      type: Boolean,
      default: false
    },
    iconId: {
      type: String,
      default: ''
    },
    to: {
      type: String,
      default: ''
    },
    iconColor: {
      type: String,
      default: ''
    },
    block: {
      type: Boolean,
      default: false
    },
    onlyText: {
      type: Boolean,
      default: false
    },
    icon: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    }
  },

  data () {
    return {
      colors: {
        primary: '#6D64F1'
      }
    }
  },

  computed: {
    propsColor () {
      return this.colors[this.color] ? this.colors[this.color] : this.color
    }
  },

  methods: {
    clickHandle () {
      this.$emit('click')
    }
  }
}
</script>
<style scoped>
.v-btn {
  border-radius: 8px;
}
</style>
