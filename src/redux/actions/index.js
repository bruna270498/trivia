export const addEmail = (email, nome) => ({
  type: 'ADD_EMAIL',
  email,
  nome,
});

// Action Types

export const TOKEN_ID = 'TOKEN_ID';
export const SECONDS = 'SECONDS';
export const ADD_SCORE = 'SCORE';
export const ADD_RANK = 'RANK';

// Action Creator

export const sendToken = (token) => ({
  type: TOKEN_ID,
  payload: {
    token,
  },
});

export const addScore = (score, assertions) => ({
  type: ADD_SCORE,
  payload: {
    score,
    assertions,
  },
});

export const addRank = (score, assertions, email, nome) => ({
  type: ADD_RANK,
  payload: {
    score,
    assertions,
    email,
    nome,
  },
});
