import { LOCATION_CHANGE } from 'react-router-redux';

// location Reducer | Listen to LOCATION_CHANGE (from react-router-redux)
export default function location(state = {
  pathname: '',
  search: '',
  hash: '',
  action: '',
  key: '',
  query: {},
}, action) {
  if (action.type === LOCATION_CHANGE) {
    return action.payload;
  }
  return state;
}
