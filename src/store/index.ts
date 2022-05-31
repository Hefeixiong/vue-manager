import {createStore, createLogger} from 'vuex';

import user from './modules/user'
import todo from './modules/todo';


export const store = createStore({
  modules: {
    user,
    todo
  }
})
