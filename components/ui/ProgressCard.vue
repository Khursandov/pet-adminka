<template>
  <v-card rounded="lg" max-width="410" class="text-center">
    <v-card-text>
      <div class="text-left font-weight-black mb-4">
        {{ title }}
      </div>
      <v-progress-circular
        :rotate="360"
        :size="260"
        :width="23"
        :value="value"
        :color="color"
        class="mx-6"
      >
        <div>
          <div class="text-h1 value">
            {{ value }}
          </div>
          <div class="text-h6 value-text">
            {{ valueText }}
          </div>
        </div>
      </v-progress-circular>
    </v-card-text>
    <v-card-subtitle class="subtitle-1 subtitle">
      {{ subtitle }}
    </v-card-subtitle>
    <v-card-actions class="mb-6">
      <slot name="action" />
    </v-card-actions>
  </v-card>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class ProgressCard extends Vue {
  @Prop([String, Number]) readonly value!: string
  @Prop(String) readonly subtitle?: string
  @Prop(String) readonly valueText?: string
  @Prop(String) readonly title?: string
  @Prop(String) readonly color!: string
}
</script>
<style scoped>
.value {
  font-weight: 700;
  color: #263238
}
.value-text {
  color: #2E2E2E;
  font-weight: 700;
}
.subtitle {
  color: #969696;
  font-weight: 400;
  font-size: 16px;
}
</style>
