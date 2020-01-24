import {
  GET_ASSET_LIST,
  SET_ERROR_MSG,
  SET_LOADING,
  ADD_SELECT_OPTION,
  DEL_SELECT_OPTION
} from "../types/StockType";

const iniState = {
  assetlist: [],
  optionList: []
};

export default (state = iniState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    case GET_ASSET_LIST:
      //console.log("reducer", action.payload);
      return {
        ...state,
        assetlist: action.payload
      };
    case ADD_SELECT_OPTION:
      return { ...state, optionList: [action.payload, ...state.optionList] };

    case DEL_SELECT_OPTION:
      return {
        ...state,
        optionList: state.optionList.filter(
          option => option._id !== action.payload
        )
      };
    case SET_ERROR_MSG:
      console.log("error");
      return {
        ...state
      };

    default:
      return state;
  }
};
