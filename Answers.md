1. What problem does the context API help solve?
   - don't have to pass props from component to component
2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
   -actions describe an interaction that is gonna happen, it brings with it a payload
   - reducers are function that carry out the action, it needs a current state and action
   - store sets the state, its known as single source of truth because the data is stored in only one place
3. What is the difference between Application state and Component state? When would be a good time to use one over the other?
   - application state is tore in one place and any component can acces it whereas component state is different state for each compoennt and to use it on other components it must be passed ass props
4. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
   - lets you call an action returns a afunction instead of an action object, changes action because it allows you to write async logic
5. What is your favorite state management system you've learned and this sprint? Please explain why!
   - favorite state managemnt would context api because it only uses two lines of code to setup up and for me it is easier to understand and can comprehend it a lot better
