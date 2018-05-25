const initialState = {
  cheeses: []
};

const cheesesReducer = (state = initialState, action) => {
  switch(action.type){
  case '':
    return {};
    
  default:
    return state;
  }
};

export default cheesesReducer;