<template>
  <v-select
    :value="value"
    :label="label"
    rounded
    filled
    :rules="rulesArray"
    :dense="dense"
    @click:append="appendClick"
    @input="handleInput"
  />
</template>
<script>
export default {
  name: 'SelectInput',

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
    dense: {
      type: Boolean,
      default: false
    },
    rules: {
      type: Array,
      default: () => ([])
    }
  },

  data () {
    return {
      rulesObj: {
        required: v => !!v || 'Required'
      }
    }
  },

  computed: {
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
      this.$emit('input', event.target.value)
    }
  }
}
</script>
<style scoped>
.v-text-field--rounded {
  border-radius: 12px;
}
</style>
