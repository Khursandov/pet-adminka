import { UserInterface } from '../interfaces/user.interface'
import { $axios } from '~/utils/api'
export class TestService {
  static getList (): Promise<UserInterface[]> {
    return new Promise((resolve) => {
      $axios.$get('https://jsonplaceholder.typicode.com/posts').then((data) => {
        resolve(data)
      })
    //   resolve({
    //     firstName: 'string',
    //     lastName: 'string',
    //     phoneNumber: 'string',
    //     email: 'string',
    //     companyName: 'string'
    //   })
    })
  }
}
