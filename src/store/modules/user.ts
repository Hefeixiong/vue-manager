import User from "../../api/user";


export interface UserState {
  name: String;
  date: String;
  password: String,
  address: String;
  avatar: String
}

const state: UserState = {
  name: '', 
  date: '', 
  password: '',
  address: '',
  avatar: ''
};

const getters = {
  getName: () => {
    return state.name 
  },
  getData: () => {
    return state.date 
  },
  getAddress: () => {
    return state.address
  }
};

const mutations = {
  setInfo (state: UserState ,payload: UserState) {
    state.name = payload.name
    state.date = payload.date
    state.password = payload.password
    state.address = payload.address
    state.avatar = payload.avatar
    console.log('setUserInfo success...')
  },
  getInfo () {
    console.log('hi')
  }
};

const actions = {
  //@ts-ignore
  async getInfo ({commit, state}) {
    const res = await User.getInfo();
    commit('setInfo', res);
  },
  //@ts-ignore
  async loginUser ({commit}, {username = '', password = ''}) {
    const res = await User.login(username, password)
    commit('setInfo', res)
    debugger
  }
}


export default {
  namespace: true,
  state,
  getters,
  actions,
  mutations
};
