<template>
  <div class="card w-1oo p-5">
    <v-card width="100%" style="padding: 32px !important" rounded="lg">
      <v-card-text class="p-0">
        <slot name="title" />
        <v-divider />
        <div class="card__table w-100">
          <div class="card__table--body">
            <div class="card__table--tr2">
              <div v-for="(i, index) in 3" :key="i" class="card__table--td">
                <div class="d-flex">
                  <v-checkbox
                    v-if="!index && selectable"
                    color="red"
                    value="red"
                    class="my-auto mr-2 p-0"
                    hide-details
                  />
                  <span class="d-block pt-1">
                    0104828
                  </span>
                </div>
              </div>
            </div>

            <div class="card__table--tr2">
              <div class="card__table--td-footer">
                <div class="d-flex">
                  <span class="d-block pt-1 font-weight-bold text-h6">
                    Total
                  </span>
                </div>
              </div>
              <div class="card__table--td-footer">
                <span class="d-block pt-1 font-weight-bold text-h6">
                  $ 1,840,000.00
                </span>
              </div>
              <div class="card__table--td-footer">
                <span class="d-block pt-1 font-weight-bold text-h6">
                  88.889 %
                </span>
              </div>
            </div>
          </div>
        </div>
      </v-card-text>
    </v-card>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class FacilityTable extends Vue {
  @Prop(Boolean) readonly selectable?: boolean
}
</script>
<style lang="sass" scoped>
.card
  &__table
    display: table
    border-collapse: separate
    border-spacing: 0 1em

    &--head
      display: table-header-group

    &--tr
      display: table-cell
      padding: 20px 18px
      text-align: justify
      color: #969696
      font-weight: 400
      font-size: 16px

    &--tr2
      display: table-row
      text-align: justify
      color: #969696
      font-weight: 400
      font-size: 16px
      border-radius: 12px

    &--body
      display: table-row-group

    &--td
      display: table-cell
      color: #2E2E2E
      font-size: 16px
      padding: 18px
      text-align: justify
      background: #F8F8FE
      font-weight: 400
      &:first-child
        border-top-left-radius: 12px
        border-bottom-left-radius: 12px

      &:last-child
        border-top-right-radius: 12px
        border-bottom-right-radius: 12px

    &--td-footer
      display: table-cell
      color: #2E2E2E
      font-size: 16px
      padding: 18px
      text-align: justify
      font-weight: 400
      &:first-child
        border-top-left-radius: 12px
        border-bottom-left-radius: 12px

      &:last-child
        border-top-right-radius: 12px
        border-bottom-right-radius: 12px

</style>
