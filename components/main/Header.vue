<template>
  <v-app-bar
    clipped-left
    fixed
    height="80"
    color="#fff"
    app
    flat
  >
    <v-app-bar-nav-icon class="logo m-auto">
      <svg-icon icon-id="logo" />
    </v-app-bar-nav-icon>
    <div class="search-input">
      <text-input
        label="Input item ID to find it"
        class="mt-6"
        prepend-inner-icon="search"
        dense
      />
    </div>

    <v-spacer />

    <button-vue
      text="Calculations"
      class="mr-2"
      dense
      disabled
    />

    <button-vue
      text="Items"
      class="mr-8"
      dense
      disabled
    />

    <v-badge
      bordered
      overlap
      color="#F19064"
      class="mr-5"
    >
      <template #badge>
        5
      </template>
      <v-btn icon @click="toggleRightbar">
        <v-avatar color="#DBD8FC" class="p-1" size="48">
          <v-icon>mdi-bell-outline</v-icon>
        </v-avatar>
      </v-btn>
    </v-badge>

    <v-menu
      origin="center center"
      transition="scale-transition"
      rounded="lg"
      offset-y
    >
      <template #activator="{ on, attrs }">
        <v-btn
          color="primary"
          dark
          v-bind="attrs"
          icon
          class="mr-4"
          v-on="on"
        >
          <v-avatar>
            <img
              src="https://cdn.vuetifyjs.com/images/john.jpg"
              alt="John"
            >
          </v-avatar>
        </v-btn>
      </template>

      <v-list>
        <v-list-item-group
          :value="selectedItem"
          color="#EA5816"
        >
          <v-list-item
            v-for="(item, i) in items"
            :key="i"
          >
            <v-list-item-icon class="mr-2">
              <svg-icon :icon-id="item.icon" icon-color="#2E2E2E" />
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-divider />
          <v-list-item color="red">
            <v-list-item-icon class="mr-2">
              <svg-icon icon-id="log-out" />
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Log out</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { Mutation, Getter } from 'vuex-class'
import SvgIcon from '@/components/ui/SvgIcon.vue'
import ButtonVue from '@/components/ui/Button.vue'
import TextInput from '@/components/ui/TextInput.vue'

@Component({
  components: {
    ButtonVue,
    SvgIcon,
    TextInput
  }
})
export default class Header extends Vue {
  @Getter('modules/ui/rightbarStatus') rightbarStatus: any
  @Mutation('modules/ui/SET_RIGHTBAR') SET_RIGHTBAR: any

  selectedItem: number = 2
  items: Array<{}> = [
    { icon: 'profile', title: 'My profile' },
    { icon: 'settings', title: 'Technical support' }
  ]

  toggleRightbar () {
    this.SET_RIGHTBAR(!this.rightbarStatus)
  }
}
</script>
<style scoped>
.logo {
  width: 112px !important;
}
.search-input {
  width: 356px;
}
.logo::before {
  display: none;
}

</style>
<style>
.v-app-bar {
  box-shadow: 0px 4px 6px rgba(98, 98, 98, 0.12) !important;
}
</style>
