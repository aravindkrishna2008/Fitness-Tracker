import createDataContext from './createDataContext';
import fitnessApi from '../api/fitness';
import {navigate} from '../RootNavigation'
import { Alert } from 'react-native';

const exerciseReducer = (state, action) => {
  switch (action.type) {
    case "add_error":
      return { ...state, errorMessage: action.payload };
    case 'fetch_exercise':
      return action.payload.reverse();
    case "clear_error_message":
      return { ...state, errorMessage: "" };
    default:
      return state;
  }
};

const fetchExercises = dispatch => async () => {
  try {
    const response = await fitnessApi.get('/myRoutines');
    dispatch({ type: 'fetch_exercise', payload: response.data });
  }catch(err){
    console.log(err)
  }
};

const clearErrorMessage = (dispatch) => () => {
  dispatch({ type: "clear_error_message" });
};

const createExercise = (dispatch) => async ({ name, exercises}) => {
  
  try {
    const stuffIGet = { name, exercises}
    const response = await fitnessApi.post('/myRoutines/add', stuffIGet);
    navigate("Walk", {screen: 'Past Walks'})
  } catch (err) {
   console.log(err)
   dispatch({
    type: "add_error",
    payload: "You must provide all fields...",
  });
  }
};

const deleteExercise = () => async ({id}) => {
  
  try {
    const response = await fitnessApi.delete(`myRoutines/${id}`);
    navigate("Walk", {screen: 'Past Walks'})
  } catch (err) {
   console.log(err)
  }
};

export const { Provider, Context } = createDataContext(
  exerciseReducer,
  { fetchExercises, createExercise, clearErrorMessage, deleteExercise },
  []
);
