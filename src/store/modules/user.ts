
export interface UserState {
  name: String
  date: String
  address: String
}

const state: UserState = {
  name: '贺飞雄',
  date: '2022-05-20',
  address: '深圳宝安'
}

const getters = {}

const actions = {}

const mutations = {}

export default {
  namespace: true,
  state,
  getters,
  actions,
  mutations
}
