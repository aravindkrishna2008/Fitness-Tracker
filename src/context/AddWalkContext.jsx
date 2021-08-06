import createDataContext from './createDataContext';
import fitnessApi from '../api/fitness';
import {navigate} from '../RootNavigation'
import { Alert } from 'react-native';

const runReducer = (state, action) => {
  switch (action.type) {
    case "add_error":
      return { ...state, errorMessage: action.payload };
    case 'fetch_runs':
      return action.payload.reverse();
    case "clear_error_message":
      return { ...state, errorMessage: "" };
    default:
      return state;
  }
};

const fetchRuns = dispatch => async () => {
  try {
    const response = await fitnessApi.get('/myRuns');
    dispatch({ type: 'fetch_runs', payload: response.data });
  }catch(err){
    console.log(err)
  }
};

const clearErrorMessage = (dispatch) => () => {
  dispatch({ type: "clear_error_message" });
};

const createRun = (dispatch) => async ({ name, description, imageUris, distance}) => {
  
  try {
    const stuffIGet = { name, description, imageUris, distance}
    const response = await fitnessApi.post('/myRuns/add', stuffIGet);
    navigate("Walk", {screen: 'Past Walks'})
  } catch (err) {
   console.log(err)
   dispatch({
    type: "add_error",
    payload: "You must provide all fields...",
  });
  }
};

const deleteRun = () => async ({id}) => {
  
  try {
    const response = await fitnessApi.delete(`myRuns/${id}`);
    navigate("Walk", {screen: 'Past Walks'})
  } catch (err) {
   console.log(err)
  }
};

export const { Provider, Context } = createDataContext(
  runReducer,
  { fetchRuns, createRun, clearErrorMessage, deleteRun },
  []
);
