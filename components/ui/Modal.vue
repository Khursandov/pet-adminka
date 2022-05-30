<template>
  <v-row justify="space-around">
    <v-col cols="auto">
      <v-dialog
        :value="value"
        transition="dialog-bottom-transition"
        :max-width="maxWidth"
        @keydown.esc="onEsc"
        @click:outside="onOutside"
      >
        <v-card>
          <v-card-title v-if="hasTitleSlot">
            <slot name="title" />
          </v-card-title>

          <v-card-text v-if="hasBodySlot">
            <slot name="body" />
          </v-card-text>

          <v-card-actions v-if="hasActionSlot" class="justify-end">
            <slot name="action" />
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-col>
  </v-row>
</template>
<script>

export default {
  name: 'ModalVue',

  props: {
    value: {
      type: Boolean,
      default: false
    },

    icon: {
      type: String,
      default: ''
    },

    maxWidth: {
      type: String,
      default: '70%'
    }
  },

  computed: {
    hasTitleSlot () {
      return !!this.$slots.title
    },
    hasBodySlot () {
      return !!this.$slots.body
    },
    hasActionSlot () {
      return !!this.$slots.action
    }
  },

  methods: {
    onEsc () {
      this.$emit('onEsc', false)
      this.$emit('change', false)
    },

    onOutside () {
      this.$emit('onOutside', false)
      this.$emit('change', false)
    }
  }
}
</script>
