<template>
  <div>
    <v-expansion-panels>
      <v-expansion-panel
        v-for="(item, index) in list"
        :key="index"
        class="my-4 panel"
        @click="tooglePanel(index)"
      >
        <v-expansion-panel-header class="text-h5 header font-weight-bold black-text">
          {{ item.text }}
          <template #actions>
            <span class="icon" :class="{'rotate': checkIndex(index)}">
              <svg-icon icon-id="right" class="m-auto d-block" />
            </span>
          </template>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-expansion-panels flat hover>
            <v-expansion-panel
              v-for="(subItem, subIndex) in item.subList"
              :key="subIndex"
              class="my-2 sub-panel"
            >
              <v-expansion-panel-header class="text-h6 sub-header font-weight-bold">
                {{ subItem.text }}
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                <div>
                  <button-vue
                    text="Go to items"
                    :color="'primary'"
                    only-text
                  />
                </div>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import SvgIcon from '@/components/ui/SvgIcon.vue'
import ButtonVue from '@/components/ui/Button.vue'

@Component({
  components: {
    SvgIcon,
    ButtonVue
  }
})
export default class ExpensionPanel extends Vue {
  @Prop([]) readonly list!: []

  activePanels: Array<Number> = []

  tooglePanel (id: any) {
    const index = this.activePanels.indexOf(id)
    if (index > -1) {
      this.activePanels.splice(index, 1)
    } else {
      this.activePanels.push(id)
    }
  }

  checkIndex (index: any) {
    return this.activePanels.includes(index)
  }
}
</script>
<style>
.icon {
  transition: .3s;
}
.rotate {
  transform: rotate(90deg);
}
.sub-panel {
    border-radius: 12px !important;
    background-color: #F8F8FE !important;
}
.sub-header:hover {
  background-color: #6D64F1 !important;
  color: #fff !important;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
}
.panel {
  border-radius: 12px !important;
  padding: 20px 8px;
}
.theme--light.v-expansion-panels .v-expansion-panel:not(:first-child)::after {
  border-color: transparent;
}
</style>
