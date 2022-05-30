<template>
  <v-row justify="start" class="mt-5">
    <v-col cols="3">
      <progress-card
        :value="12"
        :value-text="'items'"
        :color="'#EA5816'"
        subtitle="You dont't have any inventories to calculate. Please choose a plan and add items first"
      >
        <template #action>
          <button-vue
            text="Choose the right plan"
            class="mr-2"
            :color="'primary'"
            outlined
            block
          />
        </template>
      </progress-card>
    </v-col>

    <v-col cols="3">
      <progress-card
        :value="12"
        :value-text="'calculations left'"
        :color="'#6D64F1'"
        subtitle="You have 1 free calculation as a new user. Please choose a plan and add items to use it"
      >
        <template #action>
          <button-vue
            text="Buy more calculations"
            class="mr-2"
            :color="'primary'"
            outlined
            block
          />
        </template>
      </progress-card>
    </v-col>
    <v-col cols="3" />
    <!-- <v-col cols="3">
      <Oops />
    </v-col> -->

    <v-col cols="12">
      <TableVue
        :header="header"
        :title="'Last added items'"
        sortable
        oops
      >
        <template #title-action>
          <button-vue
            text="View all"
            class="mr-2"
            :color="'primary'"
            outlined
          />
        </template>
      </TableVue>
    </v-col>
    <!-- <congratulation-modal v-model="modal" /> -->
  </v-row>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { Getter } from 'vuex-class'
import ButtonVue from '@/components/ui/Button.vue'
import TableVue from '~/components/ui/Table.vue'
import ProgressCard from '~/components/ui/ProgressCard.vue'
import Oops from '~/components/ui/Oops.vue'
// import CongratulationModal from '~/components/modals/CongratulationModal.vue'

@Component({
  components: {
    // CongratulationModal,
    ButtonVue,
    TableVue,
    Oops,
    ProgressCard
  }
})
export default class IndexPage extends Vue {
  @Getter('modules/ui/userStatus') userStatus: any
  modal: boolean = true
  header: Array<String> = [
    'ID',
    'Standart cost',
    'Quantity',
    'Days of supply',
    'Cubic feet'
  ]
}
</script>
