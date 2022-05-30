<template>
  <v-row class="bg-primary border font-weight-medium black-color py-5 m-0 px-5">
    <v-col cols="12">
      <v-row justify="space-between">
        <v-col cols="12">
          <h2 class="font-weight-bold">
            General information
          </h2>
        </v-col>
        <v-col cols="12">
          <div class="text-subtitle-1 secondary-color">
            <v-progress-linear
              v-model="power"
              disabled
              color="#6D64F1"
              height="24"
              rounded
            >
              <strong class="white--text">{{ power }}%</strong>
            </v-progress-linear>
          </div>
        </v-col>
        <v-col cols="12" v-for="i in 3" :key="i" class="my-2">
          <div class="row item border">
            <div class="col-8 m-auto">
              <div>
                <p class="text-h7 m-auto">
                  <span class="text-primary">Step {{i}}</span> Choose the plan that suits you best (FREE)
                </p>
              </div>
            </div>
            <div class="col-4 text-right">
              <Button
                :color="'primary'"
                text="Choose the plan"
              />
            </div>
          </div>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import Button from '@/components/ui/Button.vue'

@Component({
  components: {
    Button
  }
})
export default class ProfileNotCompleted extends Vue {
  power: Number = 25
}
</script>
<style scoped lang="sass">
.item
  background: #fff
</style>
