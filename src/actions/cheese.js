export const FETCH_CHEESES_REQUEST = 'FETCH_CHEESES_REQUEST';
export const fetchCheesesRequest = () => {
  return {
    type: FETCH_CHEESES_REQUEST
  };
};

export const FETCH_CHEESES_SUCCESS = 'FETCH_CHEESES_SUCCESS';
export const fetchCheesesSuccess = (cheeses) => {
  return {
    type: FETCH_CHEESES_SUCCESS,
    cheeses
  };
};

export const FETCH_CHEESES_ERROR = 'FETCH_CHEESES_ERROR';
export const fetchCheesesError = (error) => {
  return {
    type: FETCH_CHEESES_ERROR,
    error
  };
};

export const fetchCheeses = () => {
  return (dispatch) => {
    dispatch(fetchCheesesRequest);

    fetch('http://localhost:8080/')
      .then(results => results.json())
      .then(cheeses => dispatch(fetchCheesesSuccess(cheeses)))
      .catch(error => dispatch(fetchCheesesError(error)));
  };
};