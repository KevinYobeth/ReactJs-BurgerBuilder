import axios from '../../axios-orders';
import * as actionTypes from './actionTypes';

export const addIngredient = (name) => {
  return {
    type: actionTypes.ADD_INGREDIENT,
    ingredientName: name
  }
}

export const removeIngredient = (name) => {
  return {
    type: actionTypes.REMOVE_INGREDIENT,
    ingredientName: name
  }
}

export const setIngredients = (ingredients) => {
  return {
    type: actionTypes.SET_INGREDIENTS,
    ingredients: ingredients
  }
}

export const fetchIngredientsFailed = () => {
  return {
    type: actionTypes.FETCH_INREDIENTS_FAILED,
  }
}

// redux thunk
export const initIngredients = () => {
  return dispatch => {
    axios.get('https://udemy-react-myburger-course-default-rtdb.firebaseio.com/ingredients.json')
      .then(response => {
        dispatch(setIngredients(response.data));
      })
      .catch((error) => {
        dispatch(fetchIngredientsFailed());
      });

  }
}