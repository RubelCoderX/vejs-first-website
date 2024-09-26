import { state } from "./state";
import { ActionContext } from "vuex/types/index.js";
import axiosInstance from "../utils/axiosClient";
type State = typeof state;

export function searchMeals(
  { commit }: ActionContext<State, State>,
  keyword: string
) {
  axiosInstance.get(`/search.php?s=${keyword}`).then(({ data }) => {
    commit("setSearchedMeals", data.meals);
  });
}
