import User from "../../api/user";
import {add, get} from "../../utils/localStorage"

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
    if (!state.name) {
      return state.name = get('user').name
    }
    return state.name
  },
  getData: () => {
    if (!state.date) {
      return state.date = get('user').date
    }
    return state.date 
  },
  getPassword: () => {
    if (!state.password) {
      return state.password = get('user').password
    }
    return state.password 
  },
  getAddress: () => {
    if (!state.address) {
      return state.address = get('user').address
    }
    return state.address
  },
  getAvatar: () => {
    if (!state.avatar) {
      return state.avatar = get('user').avatar
    }
    return state.avatar 
  },
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
    //@ts-ignore
    add('user', res)
    const test = get('user')
    console.log(test)
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
