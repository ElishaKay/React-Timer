export const FETCH_TASKS = "fetch_tasks";
export const CREATE_TASK = "create_task";
export const DELETE_TASK = "delete_task";

// export function fetchTasks() {
  

//   return {
//     type: FETCH_TASKS,
//     payload: request
//   };
// }

export function createTask(values, callback) {
  

  return {
    type: CREATE_TASK,
    payload: {title: 'new task'}
  };
}

export function deleteTask(id, callback) {

  return {
    type: DELETE_TASK,
    payload: id
  };
}
