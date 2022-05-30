<template>
  <v-card
    color="#928BF5"
    dark
  >
    <v-card-subtitle class="text-h5 white--text mt-2 pb-0">
      {{ title }}
    </v-card-subtitle>
    <v-card-title class="text-h4 mb-2 font-weight-bold">
      {{ cost }}
    </v-card-title>
  </v-card>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class BannerCard extends Vue {
  @Prop(String) readonly title!: string
  @Prop(String) readonly cost!: string
}
</script>
