import React from "react";

import Select from "react-select";
import makeAnimated from "react-select/lib/animated";
import "bootstrap/dist/css/bootstrap.css";
// import { useSelector, useDispatch } from "react-redux";
// import * as StockPrint from "../actions/StockPrintActions";

// const scaryAnimals = [
//   { label: "Alligators", value: 1 },
//   { label: "Crocodiles", value: 2 },
//   { label: "Sharks", value: 3 },
//   { label: "Small crocodiles", value: 4 },
//   { label: "Smallest crocodiles", value: 5 },
//   { label: "Snakes", value: 6 }
// ];

const SelectSearch = props => {
  //console.log(props.getList);
  var dataset = [];

  props.getList.map(items =>
    dataset.push({
      label: items.AssetDesc,
      value: items.Tag_num,
      assetCode: items.AssetCode,
      category: items.Category,
      unit: items.Unit,
      rackNo: items.RackNo,
      rowNo: items.RowNo
    })
  );

  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      borderBottom: "2px dotted green",
      color: state.isSelected ? "yellow" : "black",
      backgroundColor: state.isSelected ? "green" : "white"
    })
    // control: provided => ({
    //   ...provided,
    //   marginTop: "5%"
    // })
  };

  //// these codes can also be used ////

  // var dataset = [];
  // props.getList.map(
  //   items =>
  //     (dataset = [...dataset, { label: items.AssetDesc, value: items.Tag_num }])
  // );
  // console.log(dataset);

  //// these codes can also be used ////

  // const dataset = [];
  // for (let key in props.getList) {
  //   if (props.getList.hasOwnProperty(key)) {
  //     dataset.push({
  //       label: props.getList[key].AssetDesc,
  //       value: props.getList[key].Tag_num
  //     });
  //   }
  // }
  //console.log(dataset);

  return (
    <Select
      {...props}
      styles={customStyles}
      options={dataset}
      onChange={props.selhandleChange}
      autoFocus={true}
      components={makeAnimated()}
      //isMulti  //// for multi selection
    />
  );
};

export default SelectSearch;
