<template>
  <v-row>
    <v-col cols="6">
      <facility-table
        :header="header"
        :title="'Main DC fixed costs'"
        sortable
      >
        <template #title>
          <v-row justify="space-between">
            <v-col cols="6">
              <div class="text-h6 black-color">
                Fixed cost
              </div>
            </v-col>
            <v-col cols="6">
              <div class="text-right">
                <button-vue
                  text="Edit"
                  :color="'primary'"
                  outlined
                  only-text
                />
              </div>
            </v-col>
            <v-col cols="12">
              <div class="text-h4 black-color">
                $ 2,070,000.00
                <span class="text-h6 text--secondary">
                  Total fixed cost
                </span>
              </div>
            </v-col>
            <v-col cols="12">
              <ProgressLine :list="progress" />
            </v-col>
            <v-col>
              <div class="text-h5 black-color">
                Main DC fixed costs
              </div>
            </v-col>
          </v-row>
        </template>
      </facility-table>
    </v-col>
    <v-col cols="6">
      <v-row>
        <v-col cols="6">
          <banner-card
            :title="'Total cubic feet'"
            :cost="'9 600 000'"
          />
        </v-col>
        <v-col cols="6">
          <banner-card
            :title="'Daily cost per cubic foot'"
            :cost="'600 000'"
          />
        </v-col>
        <v-col>
          <proggress-card
            :value="'20'"
            :title="'Facility  occupancy'"
          />
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import ButtonVue from '@/components/ui/Button.vue'
import BannerCard from '@/components/ui/BannerCard.vue'
import ProggressCard from '@/components/ui/ProgressCard.vue'
import FacilityTable from '~/components/ui/FacilityTable.vue'
import ProgressLine from '~/components/ui/ProgressLine.vue'

@Component({
  components: {
    BannerCard,
    ProgressLine,
    FacilityTable,
    ProggressCard,
    ButtonVue
  }
})
export default class Facility extends Vue {
  header: Array<String> = [
    'ID',
    'Standart cost',
    'Quantity',
    'Days of supply',
    'Cubic feet'
  ]

  progress: Array<{}> = [
    {
      percent: 10,
      color: 'green'
    },
    {
      percent: 30,
      color: 'red'
    },
    {
      percent: 40,
      color: 'blue'
    }
  ]
}
</script>
