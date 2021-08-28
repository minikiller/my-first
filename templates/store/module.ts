import { Module, MutationTree, ActionTree, GetterTree } from 'vuex'
import {
  MutationType,
  RootStateInterface
} from '@/models/store'
import {
  initial{{ Name }}sState
} from './initialState'
import apiClient from '@/api-client'
import { getData } from './utils'
import { {{ Name }}sStateInterface } from '../models/store'
import { {{ Name }}Interface } from '../models/{{ Name }}.interface'

export const mutations: MutationTree<{{ Name }}sStateInterface> = {
  loading{{ Name }}s (state: {{ Name }}sStateInterface) {
    state.loading = true
  },
  loaded{{ Name }}s (state: {{ Name }}sStateInterface, {{ name }}s: {{ Name }}Interface[]) {
    state.{{ name }}s = {{ name }}s
    state.loading = false
  }
}

export const actions: ActionTree<{{ Name }}sStateInterface, RootStateInterface> = {
  load{{ Name }}s ({ commit }) {
    commit(MutationType.{{ name }}s.loading{{ Name }}s)
    // let's pretend we called some API end-point
    // and it takes 1 second to return the data
    // by using javascript setTimeout with 1000 for the milliseconds option
    apiClient.{{ name }}s.getAll().then((data: {{ Name }}Interface[]) => {
      const {{ name }}Data = getData(data)
      commit(MutationType.{{ name }}s.loaded{{ Name }}s, {{ name }}Data)
    })
  }
}

export const getters: GetterTree<{{ Name }}sStateInterface, RootStateInterface> = {
  get{{ Name }}s: (state: {{ Name }}sStateInterface): {{ Name }}Interface[] => {
    console.log('getter test')
    return state.{{ name }}s
  }

}

const namespaced = true
const state: {{ Name }}sStateInterface = initial{{ Name }}sState

export const {{ name }}sState: Module<{{ Name }}sStateInterface, RootStateInterface> = {
  namespaced,
  state,
  getters,
  actions,
  mutations
}
