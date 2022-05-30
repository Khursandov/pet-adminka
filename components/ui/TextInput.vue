<template>
  <v-text-field
    class="custom-input"
    :value="value"
    :label="label"
    rounded
    filled
    :append-icon="iconId"
    :prepend-inner-icon="prependInnerIcon"
    type="text"
    :rules="rulesArray"
    :dense="dense"
    @click:append="appendClick"
    @input="handleInput"
  >
    <template #prepend-inner>
      <svg-icon :icon-id="prependInnerIcon" />
    </template>
  </v-text-field>
</template>
<script>
import SvgIcon from '@/components/ui/SvgIcon.vue'
const numbers = /^[0-9]+$/

export default {
  name: 'TextInput',

  components: { SvgIcon },

  props: {
    value: {
      type: [String, Number],
      default: ''
    },
    label: {
      type: String,
      required: true,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    iconId: {
      type: String,
      default: ''
    },
    dense: {
      type: Boolean,
      default: false
    },
    prependInnerIcon: {
      type: String,
      default: ''
    },
    rules: {
      type: Array,
      default: () => ([])
    }
  },

  data () {
    return {}
  },

  computed: {
    rulesObj () {
      // eslint-disable-next-line prefer-regex-literals
      const regex = new RegExp('\\s', 'g')
      return {
        required: v => !!v || 'Required',
        number: value => (((numbers.test(value)) && !regex.test(value)) || !value) || 'Only numbers'
      }
    },
    rulesArray () {
      const rules = []
      this.rules.forEach((rule) => {
        rules.push(this.rulesObj[rule])
      })
      return rules
    }
  },

  methods: {
    appendClick () {
      this.$emit('append-click')
    },
    handleInput () {
      if (!event || !event.target) { return }
      let value = event.target.value

      if (this.type === 'number') {
        value = parseFloat(event.target.value)
      }
      if (!value && value !== 0) {
        value = ''
      }
      this.$emit('input', value)
    }
  }
}
</script>
<style>
.v-label {
  font-weight: 400;
}
</style>
<style scoped>
.v-text-field--rounded {
  border-radius: 12px;
}
</style>
