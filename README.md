# React-Timer

This repo is based on the short YouTube Clip:

<a href="https://www.youtube.com/watch?v=6Xwo5mVxDqI">Reselect with Redux and React.js</a>

And <a href="https://github.com/brigand/react-scratch/tree/master/src/reselect-redux">the related repo</a>.


<h3>Why do we need the Reselect Library?</h3>

Let's start with an example that returns a new posts object based on 3 pieces of state:

```javascript
const getListing = createSelector(
  state => state.postsById,
  state => state.usersById,
  state => state.postListing,
  (posts, users, listing) => listing.map(id => {
    const post = posts[id];
    return {...post, user: users[post.author]}
  })
);

const mapState = (state) => {
  return {posts: getListing(state)};
};

export default connect(mapState)(Tasks);
```

As a general rule: Redux calls the mapState function everytime there's a state-update in the store. In this example, the mapStateToProps function is meant to produce an array of post objects with the relevant user data included in each object.

If we didn't have reselect, here's what the mapState function would look like:

```
const mapState = (state) => {
  const posts = state.postsById;
  const users = state.usersById;
  const listing = state.postListing;
  return {
  	posts: listing.map(id => {
    	const post = posts[id];
    	return {...post, user: users[post.author]}
  })
};
```

The problem is that the listing.map function returns a new array every time it's called. Therefore, we're returning a key-value pair:

```javascript
{posts: [{post1, user1}, {post2, user2},...]}
```

Redux looks at the return value from the mapState function and does a "shallow compare" - is it referencing the same array? If the value of posts is referencing a different array, it rerenders the component. If the value of posts is referencing the same array, it doesn't rerender. Reselect allows us to return a reference to the same array (if none of the computed values have changed.)

Definition: Reselect helps us cache our computations so we can preserve reference equality in our mapStateToProps functions.

Without reselect, this component would get rerendered every time there's a state change!

<h3>How does reselect work?</h3>

The first time our component is rendered, mapState calls the 'getListing' function created with the help of the 'createSelector()' method of reselect. Reselect then executes these 3 lines and stores the result of each:


```javascript
	state => state.postsById,
 	state => state.usersById,
 	state => state.postListing,
```

Reselect then asks: "Have any of these values changed since the last time this selector was called?"

In our case, the state of our posts and user doesn't change, therefore:

a) the 'listing.map' function isn't called again.
b) the 'getListing' function returns a reference to the same array
c) the component decides not to rerender