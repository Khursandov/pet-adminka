<template>
  <div>
    <Table
      :header="header"
      :list="items.items"
      :title="'Items'"
      sortable
      :selectable="selectable"
      :items-id.sync="itemsId"
      @update-item="onUpdateItem"
      @delete-item="onDeleteItem"
    >
      <!-- Subtitle acions -->
      <template #subtitle>
        <v-row>
          <v-col cols="6">
            <button-vue
              text="Export"
              class="mr-2"
              icon-id="export"
              :color="'primary'"
              outlined
            />
            <button-vue
              text="Import"
              class="mr-2"
              icon-id="import"
              :color="'primary'"
              outlined
            />
            <button-vue
              v-if="!selectable"
              text="Select"
              class="mr-2"
              icon-id="select"
              :color="'primary'"
              outlined
              @click="handleSelectable"
            />
            <button-vue
              v-else
              text="Cancel"
              class="mr-2"
              icon-id="cancel"
              :color="'primary'"
              outlined
              @click="cancelItemsId"
            />
            <button-vue
              v-if="selectable"
              text="Delete"
              class="mr-2"
              icon-id="delete"
              :color="'#F19064'"
              @click="deleteItemModal = true"
            />
          </v-col>
          <v-col class="text-right">
            <button-vue
              text="Add item"
              class="mr-2"
              icon-id="plus"
              :color="'primary'"
              outlined
              @click="openAddItemModal"
            />
            <button-vue
              text="Calculate"
              class="mr-2"
              :color="'primary'"
              disabled
            />
          </v-col>
        </v-row>
      </template>

      <!-- Sortable actions -->
      <template #sortable>
        <!-- Settings -->
        <v-menu :close-on-content-click="false" offset-y min-width="280" rounded="lg">
          <template #activator="{ on, attrs }">
            <span v-bind="attrs" v-on="on">
              <button-vue
                class="mr-2"
                icon-id="settings"
                icon-color="#6D64F1"
                :color="'primary'"
                icon
              />
            </span>
          </template>
          <v-list>
            <Seperator :text="'Unit of measure'" />
            <v-list-item>
              <v-list-item-icon class="my-0 mr-3">
                <radio-input :value="true" />
              </v-list-item-icon>
              <v-list-item-title>Feet</v-list-item-title>
            </v-list-item>

            <v-divider />

            <v-list-item>
              <v-list-item-icon class="my-0 mr-3">
                <radio-input :value="true" />
              </v-list-item-icon>
              <v-list-item-title>Yards</v-list-item-title>
            </v-list-item>
            <Seperator :text="'Total cost'" />
            <v-list-item>
              <v-list-item-icon class="my-0 mr-3">
                <radio-input :value="true" />
              </v-list-item-icon>
              <v-list-item-title>Total cost per item</v-list-item-title>
            </v-list-item>

            <v-divider />

            <v-list-item>
              <v-list-item-icon class="my-0 mr-3">
                <radio-input :value="true" />
              </v-list-item-icon>
              <v-list-item-title>Total cost for all items</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>

        <!-- Sort -->
        <v-menu offset-y min-width="280" rounded="lg">
          <template #activator="{ on, attrs }">
            <span v-bind="attrs" v-on="on">
              <button-vue
                class="mr-2"
                icon-id="swap"
                :color="'primary'"
                icon
              />
            </span>
          </template>
          <v-list>
            <v-list-item>
              <v-list-item-icon class="my-0 mr-3">
                <radio-input v-model="sortBy" input-value="latest" />
              </v-list-item-icon>
              <v-list-item-title>Latest first</v-list-item-title>
            </v-list-item>

            <v-divider />

            <v-list-item>
              <v-list-item-icon class="my-0 mr-3">
                <radio-input v-model="sortBy" input-value="most_expensive" />
              </v-list-item-icon>
              <v-list-item-title>Most expensive first</v-list-item-title>
            </v-list-item>

            <v-divider />

            <v-list-item>
              <v-list-item-icon class="my-0 mr-3">
                <radio-input v-model="sortBy" input-value="cheapest" />
              </v-list-item-icon>
              <v-list-item-title>Cheapest first</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </template>
    </table>

    <!-- Modals -->
    <delete-modal
      v-model="deleteItemModal"
      :list="itemsId"
      @on-submit="onDeleteAllItem"
    />
    <add-modal
      v-model="addItemModal"
      :edit="!!updateItemObj"
      :item="updateItemObj"
      @on-submit="onSubmit"
      @on-edit="OnEdit"
    />

    <Pagination
      v-model="page"
      :lenth-of-items="lenthOfItems"
      @input="onPaginate"
    />
  </div>
</template>
<script lang="ts">
import { Vue, Component, Watch } from 'vue-property-decorator'
import { namespace } from 'vuex-class'
import ButtonVue from '@/components/ui/Button.vue'
import Table from '~/components/ui/Table.vue'
import Pagination from '~/components/ui/Pagination.vue'
import DeleteModal from '~/components/item/DeleteModal.vue'
import AddModal from '~/components/item/AddModal.vue'
import RadioInput from '@/components/ui/RadioInput.vue'
import Seperator from '@/components/ui/Seperator.vue'

// Vuex module
const ItemModule = namespace('modules/item')

// Components
@Component({
  components: {
    Table,
    AddModal,
    ButtonVue,
    Seperator,
    RadioInput,
    Pagination,
    DeleteModal
  }
})
export default class Item extends Vue {
  // Vuex
  @ItemModule.State('items') items: any
  @ItemModule.Action('updateItem') updateItem: any
  @ItemModule.Action('getList') getList: any
  @ItemModule.Action('createItem') createItem: any
  @ItemModule.Action('deleteItem') deleteItem: any
  @ItemModule.Action('deleteAllItem') deleteAllItem: any

  // Data
  header: Array<{}> = [
    {
      tag: 'custom_id',
      text: 'ID'
    },
    {
      tag: 'standart_cost',
      text: 'Standart cost'
    },
    {
      tag: 'quantity',
      text: 'Quantity'
    },
    {
      tag: 'days_supply',
      text: 'Days of supply'
    },
    {
      tag: 'days_supply',
      text: 'Cubic feet'
    },
    {
      tag: 'days_supply',
      text: 'Cost per cubic feet'
    },
    {
      tag: 'days_supply',
      text: 'Operational cost'
    },
    {
      tag: 'days_supply',
      text: 'Operational cost'
    },
    {
      tag: 'days_supply',
      text: 'Total cost'
    }
  ]

  selectable: Boolean = false
  addItemModal: Boolean = false
  deleteItemModal: Boolean = false
  itemsId: Array<String> = []
  updateItemObj: any = null
  page: number = 1
  sortBy: String = 'value'

  // Watch
  @Watch('addItemModal')
  onItemModalChanged (val: any, _oldVal: any) {
    if (!val) {
      this.updateItemObj = null
    }
  }

  @Watch('sortBy')
  onSortByChanged (val: any, _oldVal: any) {
    const query: any = this.$route.query
    const newQuery: any = { ...query, ...{ sort_by: val } }

    this.$router.replace({
      path: this.$router.currentRoute.path,
      query: newQuery
    })
    this.getList(newQuery)
  }

  // Computed
  get lenthOfItems (): number {
    return Math.ceil(this.items.total_count / 10)
  }

  // Methods
  onPaginate (): void {
    const query: any = this.$route.query
    const newQuery: any = { ...query, ...{ offset: (this.page - 1) * 10 } }

    this.$router.replace({
      path: this.$router.currentRoute.path,
      query: newQuery
    })
    this.getList(newQuery)
  }

  handleSelectable (): void {
    this.selectable = !this.selectable
  }

  onSubmit (data: any): void {
    this.createItem(data).then(() => {
      this.addItemModal = false
    })
  }

  OnEdit (data: any): void {
    this.updateItem(data).then(() => {
      this.addItemModal = false
      this.getList()
    })
  }

  onDeleteItem (id: string) {
    this.deleteItem(id).then(() => {
      this.getList()
    })
  }

  onUpdateItem (item: any) {
    this.updateItemObj = item
    this.addItemModal = true
  }

  openAddItemModal (): void {
    this.updateItemObj = null
    this.addItemModal = true
  }

  onDeleteAllItem (): void {
    if (this.itemsId.length) {
      this.deleteAllItem(this.itemsId).then(() => {
        this.deleteItemModal = false
        this.cancelItemsId()
        this.getList()
      })
    }
  }

  cancelItemsId (): void {
    this.itemsId = []
    this.selectable = !this.selectable
  }

  mounted () {
    const query: any = this.$route.query
    if (query.offset) {
      this.page = query.offset / 10 + 1
    }
    if (query.sort_by) {
      this.sortBy = query.sort_by
    }
    this.getList(query)
  }
}
</script>
