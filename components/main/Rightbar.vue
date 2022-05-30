<template>
  <v-navigation-drawer
    v-model="rightbarStatus"
    fixed
    app
    right
    width="300"
  >
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="text-h6">
          Notifications
        </v-list-item-title>
      </v-list-item-content>
      <v-list-item-action>
        <button-vue
          text="Clear all"
          class="mr-2"
          small
          :color="'#6D64F1'"
          outlined
        />
      </v-list-item-action>
    </v-list-item>

    <v-divider />

    <v-list
      dense
      nav
    >
      <v-list-item
        class="mt-4"
      >
        <v-card
          color="#EDECFD"
        >
          <v-card-title text--white class="text-h6 card-title">
            Unlimited music now
            <span>
              <svg-icon class="m-auto d-block cursor-pointer" icon-id="eks" />
            </span>
          </v-card-title>

          <v-card-subtitle class="pb-0">
            Listen to your favorite artists and albums whenever and wherever, online and offline.
          </v-card-subtitle>

          <v-card-actions>
            <v-btn text color="#6D64F1">
              Listen Now
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { Getter } from 'vuex-class'
import SvgIcon from '@/components/ui/SvgIcon.vue'
import ButtonVue from '@/components/ui/Button.vue'

@Component({
  components: {
    ButtonVue,
    SvgIcon
  }
})
export default class Rightbar extends Vue {
    @Getter('modules/ui/rightbarStatus') rightbarStatus: any
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

.card-title {
    display: flex;
    justify-content: space-between;
}
</style>
