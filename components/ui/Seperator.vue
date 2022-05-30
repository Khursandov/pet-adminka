<template>
  <div class="separator">
    {{ text }}
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class SeperatorVue extends Vue {
  @Prop(String) readonly text!: string
}
</script>
<style scoped>
.separator {
  display: flex;
  align-items: center;
  text-align: center;
  width: 100%;
  color: #969696;
  font-weight: 400;
  font-size: 16px;
}

.separator::before,
.separator::after {
  content: '';
  flex: 1;
  border-bottom: 2px solid #E5E5E5;
}

.separator:not(:empty)::before {
  margin-right: .25em;
}

.separator:not(:empty)::after {
  margin-left: .25em;
}
</style>
