<template>
  <div>
    <v-row>
      <v-col cols="6">
        <v-card rounded="lg" class="card">
          <v-card-title class="px-0 pb-2">
            How it works
          </v-card-title>
          <v-divider />
          <v-card-text>
            <div v-for="i in 3" :key="i" class="card__item mb-6">
              <v-row>
                <v-col cols="6">
                  <no-ssr>
                    <youtube player-width="100%" player-height="200px" video-id="https://www.youtube.com/watch?v=F0sqfPkCcyM" />
                  </no-ssr>
                </v-col>
                <v-col cols="6">
                  <div>
                    <div class="card__item--title">
                      <h2 class="font-weight-bold text-h5 mb-3">
                        Setup an account
                      </h2>
                      <p class="card__item--sub-title font-weight-regular">
                        How to get started with “cost to serve”
                      </p>
                    </div>
                    <div>
                      <ul>
                        <li v-for="i in 3" :key="i" class="font-weight-regular">
                          Create an account
                        </li>
                      </ul>
                    </div>
                  </div>
                </v-col>
              </v-row>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="6">
        <ExpensionPanel
          :list="list"
        />
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import SvgIcon from '@/components/ui/SvgIcon.vue'
import ExpensionPanel from '@/components/ui/ExpansionPanel.vue'

@Component({
  components: {
    ExpensionPanel,
    SvgIcon
  }
})
export default class Info extends Vue {
  list: Array<{}> = [
    {
      text: 'Privacy policy',
      subList: []
    },
    {
      text: 'Terms of service',
      subList: []
    },
    {
      text: 'FAQ',
      subList: [
        {
          text: 'How to perchase more calculations per month?'
        },
        {
          text: 'How can I upload excel files?'
        },
        {
          text: 'How can I export resultts as an excel file?'
        },
        {
          text: 'Add second account or share access'
        },
        {
          text: 'Can i add second payment method?'
        }
      ]
    }
  ]
}
</script>
<style scoped lang="sass">
.card
  padding: 16px 32px

  &__item
    background: #F8F8FE
    border-radius: 12px
    padding: 16px
    color: #2E2E2E

    &--sub-title
      font-size: 16px
</style>
