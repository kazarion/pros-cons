import React, {Component}      from 'react'
import ReactDOM                from 'react-dom'
import {createStore}           from 'redux'
import {Provider}              from 'react-redux'

import {arrayMove}             from 'react-sortable-hoc'

import './index.styl'
import App         from '../../containers/App/App'

const initialState = {
  pros:['It is a long', 'That a reader will be', 'By the readable'],
  cons:['A page when looking', 'The point of using']
}

const reducers = (state = initialState, action) => {
	if (action.type === 'ADD_PROS'){
		return {...state, pros:[...state.pros, action.payload]}
	}
	else if (action.type === 'ADD_CONS'){
		return {...state, cons:[...state.cons, action.payload]}
	}
  else if (action.type === 'UPDATE_PROS'){
    let prosArray = state.pros.map( (item, index) => {
      if (action.id === index) {item = action.value}
      return item
    })
    return {...state, pros:[...prosArray]}
	}
  else if (action.type === 'UPDATE_CONS'){
    let consArray = state.cons.map( (item, index) => {
      if (action.id === index) {item = action.value}
      return item
    })
    return {...state, cons:[...consArray] }
	}
  else if (action.type === 'DELETE_PROS'){
    state.pros.splice(action.id, 1)
    return {...state, pros:[...state.pros]}
	}
  else if (action.type === 'DELETE_CONS'){
    let consArray = state.cons.map( item => item )
    consArray.splice(action.id, 1)
    return {...state, cons:[...consArray]}
	}
  else if (action.type === 'SORT'){
    const exchangeArray = arrayMove(
                              state[action.column],
                              action.oldElement,
                              action.newElement
                            )
                            if (action.column === 'pros'){
                              return {...state, pros:exchangeArray}
                            } else if (action.column === 'cons'){
                              return {...state, cons:exchangeArray}
                            }

	}
	return state
}

const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() )
store.subscribe( () => {} )


const AppPlace = document.getElementById('root')
ReactDOM.render(
<Provider store={store}>
  <App/>
</Provider>,
AppPlace
)
