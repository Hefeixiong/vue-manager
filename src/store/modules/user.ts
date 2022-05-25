import { store } from "..";
import User from "../../api/user";
import {add, get} from "../../utils/localStorage"

export interface UserState {
  name: String;
  date: String;
  password: String,
  address: String;
  avatar: String
}
//用户组
interface Users {
  users: [
    {
      name: String;
      date: String;
      password: String,
      address: String;
      avatar: String
    }
  ]
}

const state: Users = {
  users: [    
      {
        name: '', 
        date: '', 
        password: '',
        address: '',
        avatar: ''
      }
  ]
};

const getters = {
  getUsers: () => {
    console.log('getUser success...')
    if (localStorage.length > 0) {
      return state.users = get('user')
    }
  }

};

const mutations = {
  //@ts-ignore
  setInfo (state: Users ,payload) {
    add('user', payload)
  }
};

const actions = {
  //@ts-ignore
  async getInfo ({commit, state}) {
    const res = await User.getInfo();
    commit('setInfo', res);
  },
  /**
   *没有后台接口，登陆同时设置user组
   * @param param0 
   * @param param1 
   */
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
