<template>
  <v-app>
    <Navbar />
    <!-- <Rightbar /> -->
    <Header />
    <v-main>
      <v-container class="px-12 py-8">
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import Navbar from '@/components/main/Navbar.vue'
import Header from '@/components/main/Header.vue'
import Rightbar from '@/components/main/Rightbar.vue'

@Component({
  components: {
    Rightbar,
    Navbar,
    Header
  }
})
export default class Default extends Vue {
}
</script>
<style>
.black-color {
  color: #2E2E2E;
}
.secondary-color {
  color: #969696;
}
.m-auto {
  margin: auto;
}
</style>
