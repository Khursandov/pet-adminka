import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import { UserInterface } from '~/core/shared/interfaces/user.interface'
import { TestService } from '~/core/shared/services/test.service'

@Module
export default class Ui extends VuexModule {
  rightbar: boolean = false
  isConfirmed: boolean = false

  @Mutation
  SET_RIGHTBAR (status: boolean) {
    this.rightbar = status
  }

  @Action({ commit: 'TEST' })
  getList (): Promise<UserInterface[]> {
    return TestService.getList()
  }

  get rightbarStatus () {
    return this.rightbar
  }

  get userStatus () {
    return this.isConfirmed
  }
}
