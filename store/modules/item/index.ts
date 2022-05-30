import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import { ItemInterface } from '~/core/shared/interfaces/item.interface'
import { ItemService } from '~/core/shared/services/item.service'

const Api = new ItemService()

@Module
export default class Item extends VuexModule {
  items: {
    items: Array<ItemInterface>,
  } = { items: [] }

  @Mutation
  SET_ITEMS (payload: any) {
    this.items = payload
  }

  @Mutation
  SET_CREATED_ITEM (payload: any) {
    this.items.items.unshift(payload)
    this.items.items.pop()
  }

  @Action({ commit: 'SET_ITEMS' })
  async getList (payload: any): Promise<any> {
    const result: any = await Api.getAll(payload)
    return result.data
  }

  @Action({ commit: 'SET_CREATED_ITEM' })
  async createItem (entity: ItemInterface): Promise<any> {
    const result: any = await Api.create(entity)
    return { ...entity, ...result.data }
  }

  @Action
  async deleteItem (id: string): Promise<any> {
    const result = await Api.delete(id)
    console.log('result', result)
  }

  @Action
  async updateItem (id: string): Promise<any> {
    const result = await Api.update(id)
    console.log('result', result)
  }

  @Action
  async deleteAllItem (ids: Array<string>): Promise<any> {
    const result = await Api.deleteAllItem(ids)
    console.log('result', result)
  }
}
