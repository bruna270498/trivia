import { ADD_RANK } from '../actions';

const INITIAL_STATE = [];

const rank = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case ADD_RANK:
    return [...state, {
      score: action.payload.score,
      assertions: action.payload.assertions,
      email: action.payload.email,
      nome: action.payload.nome,
    }];
  default: return state;
  }
};
export default rank;
