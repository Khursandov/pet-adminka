<template>
  <v-navigation-drawer
    mini-variant
    clipped
    fixed
    app
    :mini-variant-width="112"
  >
    <v-list>
      <v-list-item-group
        v-model="selectedItem"
        color="primary"
      >
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
          class="my-2 p-2 custom-item"
          link
          :to="item.to"
          @click="changeActiveIndex(index)"
        >
          <v-list-item-action class="p-2">
            <v-tooltip right nudge-right="15" color="#6D64F1">
              <template #activator="{ on, attrs }">
                <span v-bind="attrs" v-on="on">
                  <svg-icon
                    :icon-id="item.icon"
                    class="d-block m-auto"
                    :icon-color="selectedItem == index ? '#6D64F1': '#969696'"
                  />
                </span>
              </template>
              <span>{{ selectedItem == index }} {{ selectedItem }} {{ index }}</span>
            </v-tooltip>
          </v-list-item-action>

          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import SvgIcon from '@/components/ui/SvgIcon.vue'

@Component({
  components: {
    SvgIcon
  }
})
export default class Navbar extends Vue {
  selectedItem: number = 0
  items: Array<{}> = [
    {
      icon: 'home',
      title: 'Home',
      to: '/'
    },
    {
      icon: 'dashboard',
      title: 'Dashboard',
      to: '/item'
    },
    {
      icon: 'list',
      title: 'List',
      to: '/facility'
    },
    {
      icon: 'profile',
      title: 'Profile',
      to: '/profile'
    },
    {
      icon: 'danger_circle',
      title: 'Info',
      to: '/info'
    }
  ]

  changeActiveIndex (val: number) {
    this.selectedItem = val
  }
}
</script>
<style scoped>
.theme--light.v-list-item--active::before {
  border-radius: 8px;
  /* background: #DBD8FC; */
}
.custom-item {
  width: 50%;
  margin: auto;
   /* opacity: inherit !important; */
}
.custom-item:hover {
  border-radius: 8px;
  /* background: #DBD8FC; */
  /* opacity: inherit !important; */
}
</style>
