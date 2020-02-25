import { ADD_TODO, DELETE_TODO, CHECK_TODO } from "../constants/action-types";

export function addTODO(todo) {
  return { type: ADD_TODO, todo };
}
export function deleteTODO(id) {
  return { type: DELETE_TODO, id };
}
export function checkTODO(id) {
  return { type: CHECK_TODO, id };
}
