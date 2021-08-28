import { rootStore, dispatchModuleAction } from '@/store/root'
import { StoreModuleNames } from '@/models/store'
import { {{ Name }}sStateInterface } from '../models/store'
/**
 * @name {{ name }}sStore
 * @description
 * The {{ Name }}s store wrapper that returns the {{ Name }}sState and exposes a generic action<T>
 * method */
const {{ name }}sStore = {
  get state (): {{ Name }}sStateInterface {
    return rootStore.state.{{ name }}sState
  },
  action<T> (actionName: string, params?: T): void {
    dispatchModuleAction(StoreModuleNames.{{ name }}sState, actionName, params)
  }
}
// export our wrapper using the composition API convention (i.e. useXYZ)
export const use{{ Name }}sStore = () => {
  return {{ name }}sStore
}
