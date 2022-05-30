import { ItemInterface } from '../interfaces/item.interface'
import { EntityService } from '~/core/services/Entity.service'
import { $axios } from '~/utils/api'

export class ItemService extends EntityService<ItemInterface> {
  constructor () {
    super('items/')
  }

  deleteAllItem (ids: Array<string>): Promise<any> {
    return new Promise((resolve, reject) => {
      $axios.delete(this.baseUrl, {
        data: {
          items_list: ids
        }
      }).then((data: any) => {
        resolve(data.data)
      }).catch((err) => {
        reject(err)
      })
    })
  }
}
