import createDataContext from './createDataContext';
import fitnessApi from '../api/fitness';
import {navigate} from '../RootNavigation'

const runReducer = (state, action) => {
  switch (action.type) {
    case "add_error":
      return { ...state, errorMessage: action.payload };
    case 'fetch_food':
      return action.payload.reverse();
    case "clear_error_message":
      return { ...state, errorMessage: "" };
    default:
      return state;
  }
};

const fetchFood = dispatch => async () => {
  try {
    const response = await fitnessApi.get('/myFood');
    dispatch({ type: 'fetch_food', payload: response.data });
  }catch(err){
    console.log(err)
  }
};

const clearErrorMessage = (dispatch) => () => {
  dispatch({ type: "clear_error_message" });
};

const createFood = (dispatch) => async ({ name, calories, image, meal, key}) => {
  
  try {
    const stuffIGet = { name, calories, image, meal}
    const response = await fitnessApi.post('/myFood/add', stuffIGet);
    navigate("Walk", {screen: 'Past Walks'})
  } catch (err) {
   console.log(err)
   dispatch({
    type: "add_error",
    payload: "You must provide all fields...",
  });
  }
};

const deleteFood = () => async ({id}) => {
  
  try {
    const response = await fitnessApi.delete(`/myFood/${id}`);
  } catch (err) {
   console.log(err)
  }
};

export const { Provider, Context } = createDataContext(
  runReducer,
  { fetchFood, createFood, clearErrorMessage, deleteFood },
  []
);
