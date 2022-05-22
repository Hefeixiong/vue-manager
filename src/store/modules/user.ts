import User from "../../api/user";


export interface UserState {
  name: String;
  date: String;
  address: String;
  avatar: String
}

const state: UserState = {
  name: '', 
  date: '', 
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
    // state.name = payload.name
    // state.date = payload.date
    // state.address = payload.address
    // state.avatar = payload.avatar
    state = payload
    debugger
    console.log('set success')
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
    debugger;
  }
}


export default {
  namespace: true,
  state,
  getters,
  actions,
  mutations
};
