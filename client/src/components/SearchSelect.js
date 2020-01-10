import React, { useEffect, useCallback } from "react";
import Select from "react-select";
import { useSelector, useDispatch } from "react-redux";
import * as StockPrint from "../actions/StockPrintActions";

// const scaryAnimals = [
//   { label: "Alligators", value: 1 },
//   { label: "Crocodiles", value: 2 },
//   { label: "Sharks", value: 3 },
//   { label: "Small crocodiles", value: 4 },
//   { label: "Smallest crocodiles", value: 5 },
//   { label: "Snakes", value: 6 }
// ];

const SelectSearch = () => {
  const getList = useSelector(state => state.assetlist);
  const dispatch = useDispatch();

  const loadStockPrint = useCallback(async () => {
    try {
      await dispatch(StockPrint.getAssetList());
    } catch (err) {
      console.error(err.message);
    }
  }, [dispatch]);

  useEffect(() => {
    loadStockPrint();
    // eslint-disable-next-line
  }, []);

  return <Select options={getList} />;
};

export default SelectSearch;
