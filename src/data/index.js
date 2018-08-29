export const getTasks = () => ({
  tasks: [
    {id: 'task-1', author: 'user-1', title: 'task 1',count:0},
    {id: 'task-2', author: 'user-2', title: 'task 2',count:0}
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
