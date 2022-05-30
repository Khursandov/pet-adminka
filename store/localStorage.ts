import { Module, VuexModule, Mutation } from 'vuex-module-decorators'
import { UserInterface } from '~/core/shared/interfaces/user.interface'

@Module
export default class LocalStorage extends VuexModule {
  user: UserInterface = {
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    companyName: ''
  }

  @Mutation
  SET_USER (payload: UserInterface) {
    this.user = { ...payload }
  }

  get getUser () {
    return this.user
  }

  get isUserDataExists () {
    return !Object.values(this.user).reduce((a, b) => (a && b))
  }
}
