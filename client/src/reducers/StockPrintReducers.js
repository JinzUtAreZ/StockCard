import { GET_ASSET_LIST, SET_ERROR_MSG, SET_LOADING } from "../types/StockType";

const iniState = {
  assetlist: ""
};

export default (state = iniState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    case GET_ASSET_LIST:
      return {
        ...state,
        assetlist: action.payload
      };

    default:
      return state;
  }
};
