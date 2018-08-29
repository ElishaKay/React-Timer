export const getTasks = () => ({
  tasks: [
    {id: 'task-1', author: 'user-1', title: 'task 1'},
    {id: 'task-2', author: 'user-2', title: 'task 2'},
    {id: 'task-3', author: 'user-3', title: 'task 3'},
    {id: 'task-4', author: 'user-1', title: 'task 4'},
    {id: 'task-5', author: 'user-2', title: 'task 5'},
    {id: 'task-6', author: 'user-3', title: 'task 6'},
  ],
  users: [
    {
      id: 'user-1',
      first: 'Tom',
      last: 'Scott',
    },
    {
      id: 'user-2',
      first: 'Dick',
      last: 'Wolf',
    },
    {
      id: 'user-3',
      first: 'Harry',
      last: 'Scott',
    },
  ],
});
