`Adam's Notes about the ReactJS-Book-Lib project: 
From ReactJS-Book-Lib: remove the 2 lines from main App.js:`

// Development only axios helpers!
import axios from 'axios';
window.axios = axios;

`
"Also: Your actions/index.js file should be functional - meaning - no sideeffects or state.
The current issue is that you're handling the "Title Already exists validation" within this file.
Instead, you have 2 options:
a) Use the 'selectors' library:
https://github.com/reduxjs/reselect

b) Pass a callback function from the parent component which has access to the entire 'books title' data.
Then, when the user presses click on the ImageContent component, call the callback function from the parent
component to check whether that title already exists.
`

// This is what an individual task looks like:
export default {
	title: 'Learn React',
	running: 0,
	time: 0
}

// This is what the JSX looks like for the Play/Resume Button:
{id === runningTaskId ? 'Pause' : 'Play'}

// This is what our store looks like:
{
	tasks: {
		1: { 
			id: 1
			title: 'Learn React',
			time: 230
		},
		2: { 
			id: 2
			title: 'Learn Redux',
			time: 100
		}
	},
	runningTaskId: 1
}


4 Actions:

SaveTask
Play
Pause
Increment


Put the setInterval function within the Component Itself. ComponentWillUNmount will hold the clearInterval.

The setInterval function runs on ComponentDidMount() and takes in 2 arguments: id of currently running tasks, plus its time value.


Total:

Loop through time values and continuing adding up the time of each component.

Component?


reselect library caches all the values of the things that you calculate from the store values)

Added value of "selectors":
- we dont need to loop through our state every time component gets rerendered
- single source of truth (not two)
- example: the Total amount of time spent on all tasks combined.


Feature-List:

User can add tasks.
User can play and pause tasks
When User plays one task, all the other tasks automatically pause.
User can see the total amount spent on each task and on all the tasks combined.

Notes:

Within this function, we need 2 things:

posts, and the total amount of time.



const getListing = createSelector(
  state => state.postsById,
  state => state.usersById,
  state => state.postListing,
  (posts, users, listing) => listing.map(id => {
    const post = posts[id];
    return {...post, user: users[post.author]}
  })
);