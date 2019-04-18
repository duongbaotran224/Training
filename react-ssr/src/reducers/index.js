import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'

export default combineReducers({
  todos,
  visibilityFilter
})

//vi redux chi co 1 store state =>
//gom cac reducer lai combine thanh 1 state lon (state store)
//moi reducer quan ly 1 phan cuar state store
