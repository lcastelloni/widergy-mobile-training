import {
  ADD_EXPRESSION,
  DELETE_EXPRESSION,
  DELETE_ALL_EXPRESSIONS,
  EDIT_EXPRESSION,
  REMEMBER_USER_NAME,
} from '../actiontypes';

export const addExpression = (expressionText, nextExpression) => ({
  type: ADD_EXPRESSION,

  payload: {
    text: expressionText,
    id: nextExpression,
  },
});

export const deleteExpression = idExpression => ({
  type: DELETE_EXPRESSION,

  payload: {
    id: idExpression,
  },
});

export const deleteAllExpressions = () => ({
  type: DELETE_ALL_EXPRESSIONS,
});

export const editExpression = (idExpression, newExpressionText) => ({
  type: EDIT_EXPRESSION,
  payload: {
    id: idExpression,
    text: newExpressionText,
  },
});

export const rememberUser = userName => ({
  type: REMEMBER_USER_NAME,
  payload: {
    name: userName,
  },
});
