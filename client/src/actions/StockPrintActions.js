import {
  GET_ASSET_LIST,
  SET_LOADING,
  SET_ERROR_MSG,
  ADD_SELECT_OPTION,
  DEL_SELECT_OPTION
} from "../types/StockType";

export const setLoading = () => {
  return {
    type: SET_LOADING
  };
};

export const getAssetList = () => async dispatch => {
  try {
    setLoading();
    //const arry = [];
    const response = await fetch("/api/inventory");
    const data = await response.json();

    // for (let key in data) {
    //   if (data.hasOwnProperty(key)) {
    //     arry.push({ assetDesc: data[key].AssetDesc });
    //   }
    // }
    // //console.log(arry);
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

export const addTodo = optionList => {
  try {
    return { type: ADD_SELECT_OPTION, payload: optionList };
  } catch (err) {
    console.error(err.message);
    return { type: ADD_SELECT_OPTION, payload: err.message.statusText };
  }
};

export const deleteTodo = optionId => {
  try {
    return { type: DEL_SELECT_OPTION, payload: optionId };
  } catch (err) {
    console.error(err.message);
    return { type: DEL_SELECT_OPTION, payload: err.message.statusText };
  }
};
