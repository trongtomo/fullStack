import actionTypes from "../actions/actionTypes";

const initialState = {
  genders: [],
  roles: [],
  positions: [],
};

const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_GENDER_START:
      console.log("fire fecth gender start:", action);
      return {
        ...state,
      };
    case actionTypes.FETCH_GENDER_SUCCESS:
      let copyState = { ...state };
      copyState.genders = action.data;
      console.log("fire fecth gender success:", copyState);
      return {
        ...copyState,
      };
    case actionTypes.FETCH_GENDER_FAILED:
      console.log("fire fecth gender failed:", action);
      return {
        ...state,
      };

    default:
      return state;
  }
};

export default adminReducer;
