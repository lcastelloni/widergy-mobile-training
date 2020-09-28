import {
  ADD_EXPRESSION,
  DELETE_EXPRESSION,
  DELETE_ALL_EXPRESSIONS,
  EDIT_EXPRESSION,
  REMEMBER_USER_NAME,
} from '../actiontypes/index';

const initialState = { expressions: [] };

const HistoryApp = (state = initialState, action) => {
  switch (action.type) {
    case ADD_EXPRESSION:
      return {
        ...state,
        expressions: [
          ...state.expressions,
          {
            id: action.payload.id,
            text: action.payload.text,
          },
        ],
      };
    case DELETE_EXPRESSION:
      return {
        expressions: state.expressions.filter(expression => expression.id !== action.payload.id),
      };
    case DELETE_ALL_EXPRESSIONS:
      return {
        ...state,
        expressions: [],
      };
    case EDIT_EXPRESSION:
      const newExpressions = [...state.expressions];
      const index = newExpressions
        .map(function (expression) {
          return expression.id;
        })
        .indexOf(action.payload.id);
      newExpressions[index].text = action.payload.text;
      return {
        ...state,
        expressions: newExpressions,
      };

    default:
      return state;
  }
};

const ReducerReduxForm = (state = { userName: '' }, action) => {
  switch (action.type) {
    case REMEMBER_USER_NAME:
      return {
        userName: action.payload.name,
      };

    default:
      return state;
  }
};

export { HistoryApp, ReducerReduxForm };
