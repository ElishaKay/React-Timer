export const FETCH_TASKS = "fetch_tasks";
export const SAVE_TASK = "save_task";
export const DELETE_TASK = "delete_task";

export function fetchTasks() {
  let tasks = {1: { 
			id: 1,
			title: 'Learn React',
			time: 230
		},
		2: { 
			id: 2,
			title: 'Learn Redux',
			time: 100
		}
	}
  return {
    type: FETCH_TASKS,
    payload: tasks
  };
}

export function createTask(values, callback) {
  console.log('newTask Passed to the actions file: ', values)

  return {
    type: SAVE_TASK,
    payload: {title: 'new task'}
  };
}

export function deleteTask(id, callback) {

  return {
    type: DELETE_TASK,
    payload: id
  };
}
