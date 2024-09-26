import { createStore } from "vuex";

import * as actions from "../../src/vuex/action";

import * as getters from "./getters";
import { state } from "./state";
import setSearchedMeals from "./mutation";

const store = createStore({
  state,
  actions,
  mutations: {
    setSearchedMeals,
  },
  getters,
});

export default store;
