import { createStore } from 'redux';

const counterReducer = (state = 0, action) => {
  switch(action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}

const store = createStore(counterReducer);

// console.log(store.getState());

// store.dispatch({type: 'INCREMENT'});
// console.log(store.getState());

// store.dispatch({type: 'INCREMENT'});
// store.dispatch({type: 'INCREMENT'});
// store.dispatch({type: 'INCREMENT'});
// console.log(store.getState());

// store.dispatch({type: 'DECREMENT'});
// store.dispatch({type: 'DECREMENT'});
// console.log(store.getState());

// store.dispatch({type: 'UNKNOWN_ACTION'});
//console.log(store.getState());

// ----------------------------- //

// store.subscribe(() => {
//   document.body.innerText = store.getState();
// });

// document.addEventListener('click', () => {
//   store.dispatch({ type: 'INCREMENT' });
// });

// ----------------------------- //

const render = () => {
  document.body.innerText = store.getState();
};

store.subscribe(render);
render();

document.addEventListener('click', () => {
  store.dispatch({ type: 'INCREMENT' });
});
