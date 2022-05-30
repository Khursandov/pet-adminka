import { IEntityService } from '../interfaces/entity-service.interface'
import { $axios } from '~/utils/api'

export class EntityService<T> implements IEntityService {
  baseUrl: string
  constructor (_baseUrl: string) {
    this.baseUrl = '/api/' + _baseUrl
  }

  getAll (entity: any): Promise<T[]> {
    return new Promise((resolve, reject) => {
      $axios.get(this.baseUrl, {
        params: {
          limit: 10,
          ...entity
        }
      }).then((data: any) => {
        resolve(data.data)
      }).catch((err) => {
        reject(err)
      })
    })
  }

  getById (id: string): Promise<T> {
    return new Promise((resolve, reject) => {
      $axios.post(`${this.baseUrl}/${id}`).then((data: any) => {
        resolve(data.data)
      }).catch((err) => {
        reject(err)
      })
    })
  }

  create (entity: any): Promise<T> {
    return new Promise((resolve, reject) => {
      $axios.post(this.baseUrl, entity).then((data: any) => {
        resolve(data.data)
      }).catch((err) => {
        reject(err)
      })
    })
  }

  update (entity: any): Promise<T> {
    return new Promise((resolve, reject) => {
      $axios.put(`${this.baseUrl}${entity.id}`, entity).then((data: any) => {
        resolve(data.data)
      }).catch((err) => {
        reject(err)
      })
    })
  }

  delete (id: string): Promise<T> {
    return new Promise((resolve, reject) => {
      $axios.delete(`${this.baseUrl}${id}`).then((data: any) => {
        resolve(data.data)
      }).catch((err) => {
        reject(err)
      })
    })
  }
}
