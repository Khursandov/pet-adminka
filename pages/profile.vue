<template>
  <div>
    <v-row justify="center" align="center">
      <v-col>
        <v-card width="860px" class="m-auto card">
          <v-card-text>
            <v-row class="m-0">
              <v-col cols="12" class="text-center">
                <div>
                  <v-avatar size="128">
                    <img
                      src="https://cdn.vuetifyjs.com/images/john.jpg"
                      alt="John"
                    >
                  </v-avatar>
                </div>
                <div class="my-2">
                  <h2 class="black-color text-h5 font-weight-bold">
                    Juan Olivera
                  </h2>
                </div>
                <div class="my-4">
                  <button-vue
                    text="Edit"
                    icon-id="edit"
                    :color="'primary'"
                    only-text
                    class="text-subtitle-1"
                    large
                  />
                </div>
              </v-col>
              <v-col cols="12">
                <div>
                  <v-row class="bg-primary border font-weight-medium black-color py-5 px-5">
                    <v-col cols="6">
                      <v-row justify="space-between">
                        <v-col cols="12">
                          <h2 class="font-weight-bold">General information</h2>
                        </v-col>
                        <v-col cols="6">
                          <div class="text-subtitle-1 secondary-color">
                            First name
                          </div>
                        </v-col>
                        <v-col cols="6">
                          <div class="text-subtitle-1 font-weight-medium">
                            Juan
                          </div>
                        </v-col>
                        <v-col cols="6">
                          <div class="text-subtitle-1 secondary-color">
                            Last name
                          </div>
                        </v-col>
                        <v-col cols="6">
                          <div class="text-subtitle-1 font-weight-medium">
                            Olivera
                          </div>
                        </v-col>
                        <v-col cols="6">
                          <div class="text-subtitle-1 secondary-color">
                            Date of birth
                          </div>
                        </v-col>
                        <v-col cols="6">
                          <div class="text-subtitle-1 font-weight-medium">
                            -
                          </div>
                        </v-col>
                      </v-row>
                    </v-col>

                    <v-divider vertical />

                    <v-col cols="6">
                      <v-row justify="space-between">
                        <v-col cols="12">
                          <br>
                        </v-col>
                        <v-col cols="6">
                          <div class="text-subtitle-1 secondary-color">
                            Phone number
                          </div>
                        </v-col>
                        <v-col cols="6">
                          <div class="text-subtitle-1 font-weight-medium">
                            +1 233 999 888 00 00
                          </div>
                        </v-col>
                        <v-col cols="6">
                          <div class="text-subtitle-1 secondary-color">
                            E-mail
                          </div>
                        </v-col>
                        <v-col cols="6">
                          <div class="text-subtitle-1 font-weight-medium">
                            example@gmail.com
                          </div>
                        </v-col>
                        <v-col cols="6">
                          <div class="text-subtitle-1 secondary-color">
                            Company name
                          </div>
                        </v-col>
                        <v-col cols="6">
                          <div class="text-subtitle-1 font-weight-medium">
                            -
                          </div>
                        </v-col>
                      </v-row>
                    </v-col>
                  </v-row>
                </div>
              </v-col>
              <profile-not-completed class="mt-6" />
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import ButtonVue from '@/components/ui/Button.vue'
import ProfileNotCompleted from '@/components/profile/ProfileNotCompleted.vue'

@Component({
  components: {
    ProfileNotCompleted,
    ButtonVue
  }
})
export default class Profile extends Vue {

}
</script>
<style scoped lang="sass">
.card
  padding: 4px 16px
</style>
