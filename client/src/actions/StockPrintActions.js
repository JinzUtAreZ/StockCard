import { GET_ASSET_LIST, SET_LOADING, SET_ERROR_MSG } from "../types/StockType";

export const setLoading = () => {
  return {
    type: SET_LOADING
  };
};

export const getAssetList = () => async dispatch => {
  try {
    setLoading();
    const response = await fetch("/api/inventory");
    const data = await response.json();

    dispatch({
      type: GET_ASSET_LIST,
      payload: data
    });
  } catch (err) {
    console.error(err.message);
    dispatch({
      type: SET_ERROR_MSG,
      payload: err.response.statusText
    });
  }
};
