<template>
  <div class="card w-1oo p-5">
    <v-card width="100%" style="padding: 16px !important" rounded="lg">
      <v-card-title class="card__title">
        <h1 class="card__title--text">
          {{ title }}
        </h1>
        <div class="card__title--action">
          <slot name="title-action" />
        </div>
      </v-card-title>
      <v-divider />
      <v-card-subtitle>
        <slot name="subtitle" />
      </v-card-subtitle>
      <v-card-text>
        <div class="card__table w-100">
          <div class="card__table--head mb-6">
            <div v-for="(item, index) in header" :key="index" class="card__table--tr">
              <div class="d-flex">
                <v-checkbox
                  v-if="!index && selectable"
                  v-model="allSelected"
                  color="#6D64F1"
                  class="my-auto mr-2 p-0"
                  hide-details
                  @change="handleSelectAll"
                />
                <span class="d-block pt-1">{{ item.text }}</span>
              </div>
            </div>

            <div class="card__table--tr text-right">
              <div v-if="sortable">
                <slot name="sortable" />
              </div>
            </div>
          </div>
          <div v-if="!oops" class="card__table--body">
            <div v-for="(item, index) in list" :key="index" class="card__table--tr2">
              <div v-for="(headerItem, headerIndex) in header" :key="headerIndex" class="card__table--td">
                <div class="d-flex">
                  <v-checkbox
                    v-if="!headerIndex && selectable"
                    v-model="selectedList[index]"
                    color="#6D64F1"
                    :value="item.id"
                    class="my-auto mr-2 p-0"
                    hide-details
                  />
                  <span class="d-block pt-1">
                    {{ item[headerItem.tag] }}
                  </span>
                </div>
              </div>

              <div class="card__table--td text-right">
                <v-menu offset-y min-width="280" rounded="lg" transition="scale-transition">
                  <template #activator="{ on, attrs }">
                    <v-btn
                      color="primary"
                      icon
                      small
                      v-bind="attrs"
                      v-on="on"
                    >
                      <v-icon color="#969696">mdi-dots-vertical</v-icon>
                    </v-btn>
                  </template>
                  <v-list tile>
                    <v-list-item class="cursor-pointer" @click="updateItem(item)">
                      <v-list-item-icon class="mr-2">
                        <svg-icon icon-id="edit" />
                      </v-list-item-icon>
                      <v-list-item-content>
                        <v-list-item-title>
                          Edit item
                        </v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                    <v-divider />
                    <v-list-item class="cursor-pointer" color="red" @click="deleteItem(item.id)">
                      <v-list-item-icon class="mr-2" color="red">
                        <v-icon color="red">
                          mdi-delete
                        </v-icon>
                      </v-list-item-icon>
                      <v-list-item-content color="red">
                        <v-list-item-title color="red">
                          Delete item
                        </v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                  </v-list>
                </v-menu>
              </div>
            </div>
          </div>
        </div>
        <div v-if="oops" class="my-15">
          <Oops />
        </div>
      </v-card-text>
    </v-card>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop, Watch } from 'vue-property-decorator'
import Oops from './Oops.vue'
import ButtonVue from '@/components/ui/Button.vue'
import SvgIcon from '@/components/ui/SvgIcon.vue'

@Component({
  components: {
    Oops,
    SvgIcon,
    ButtonVue
  }
})
export default class Table extends Vue {
  @Prop([]) readonly header!: []
  @Prop([]) readonly list?: []
  @Prop(Boolean) readonly selectable?: boolean
  @Prop(String) readonly title!: string
  @Prop(Boolean) readonly sortable?: boolean
  @Prop(Boolean) readonly oops?: boolean
  @Prop(Array) readonly itemsId?: Array<string>

  allSelected: boolean = false

  selectedList: Array<String> | undefined = []

  @Watch('selectedList')
  onSelectedListChanged (val: Array<string>, _oldVal: Array<string>) {
    if (val.length && val.filter(item => !!item).length === this.list?.length) {
      this.allSelected = true
    } else {
      this.allSelected = false
    }
    this.$emit('update:itemsId', val)
  }

  @Watch('itemsId')
  onItemsIdChanged (val: string, _oldVal: string) {
    if (!val.length && this.selectedList?.length) {
      this.selectedList = []
      this.allSelected = false
    }
  }

  handleSelectAll () {
    if (this.allSelected) {
      this.selectedList = this.list?.map((item: any) => item.id)
    } else {
      this.selectedList = []
    }
  }

  deleteItem (id: any) {
    this.$emit('delete-item', id)
  }

  updateItem (item: any) {
    this.$emit('update-item', item)
  }
}
</script>
<style lang="sass" scoped>
.card
  &__title
    display: flex
    justify-content: space-between

    &--text
      font-size: 24px
      font-weight: 700

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

      &:first-of-type
        color: #6D64F1

</style>
