const redux = require("redux");

//step2 create reducer - needs 2 args(inputs): old state + dispatched action; must return output, has no side effects (pure) and usualy it is an {}
const counterReducer = (state = { counter: 0 }, action) => {
  //step 7 - add if/switch condition
  if (action.type === "INCREMENT") {
    return {
      counter: state.counter + 1,
    };
  }

  if (action.type === "DECREMENT") {
    return {
      counter: state.counter - 1,
    };
  }
  //

  return state;
};

//step 1 - create store
// const store = redux.createStore();

//step 3 - combine step 1 and 2
const store = redux.createStore(counterReducer);

//step 4 add substription - no args
const counterSubscriber = () => {
  const latestState = store.getState();
  console.log(latestState);
};

//step 5 - call subscribe and pass subscriber
store.subscribe(counterSubscriber);

//step 6 - add action; dispatch is a javascript {} with type property
store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "DECREMENT" });
