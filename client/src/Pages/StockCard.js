import React, { useState, useEffect, useCallback } from "react";
import SearchSelect from "../components/SearchSelect";
import { Row, Col, Form, Button, InputGroup } from "react-bootstrap";
//import FontAwesomeIcon from "react-fontawesome";

import { MDBInput } from "mdbreact";
// import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon } from "mdbreact";

import { useSelector, useDispatch } from "react-redux";
import * as StockPrint from "../actions/StockPrintActions";

import SelectedList from "../../src/components/ListData/SelectedList";

const StockCard = ({ saveTodo }) => {
  const asset = useSelector(state => state.stock.assetlist);
  const dispatch = useDispatch();

  const [selected, setSelected] = useState(null);
  const [category, setCategory] = useState("");
  const [unit, setUnit] = useState("");
  const [rackno, setRackno] = useState("");
  const [rowno, setRowno] = useState("");

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
  }, [selected]);
  //// ung selected dito dapat para sa marker sa select

  const optionList = useSelector(state => state.stock.optionList);

  const handleChange = selected => {
    setSelected(selected);
    setCategory(selected.category);
    setUnit(selected.unit);
    setRackno(selected.rackNo);
    setRowno(selected.rowNo);
    console.log(`Option selected:`, selected);
    var elementPos = optionList
      .map(function(x) {
        return x.value;
      })
      .indexOf(selected.value);
    if (elementPos == -1) {
      dispatch(
        StockPrint.addTodo({
          label: selected.label,
          value: selected.value,
          assetcode: selected.assetCode
        })
      );
    }
  };

  const deleteItems = e => {
    dispatch(StockPrint.deleteTodo(e));
  };

  return (
    <div>
      {/* Sample inline styling */}
      <style type="text/css">
        {`
    .btn-flat {
      background-color: purple;
      color: white;
    }

    .btn-xxl {
      padding: 1rem 1.5rem;
      font-size: 1.5rem;
    }
    
    .form-adjust {
      margin-left: 20px;
      margin-right: 20px
    }

    .btn-adjust {
      margin-top: 30px
    }
    `}
      </style>

      {/* <Button variant="flat" size="xxl">
        flat button
      </Button> */}
      {/* Sample inline styling */}

      <Form>
        <Row className="form-adjust">
          <Form.Group as={Col} controlId="formStock">
            <Form.Label>
              <b>Inventory Stock Card - Warehouse</b>
            </Form.Label>
            <SearchSelect
              getList={asset}
              selhandleChange={handleChange}
              //isMulti
            />
          </Form.Group>
        </Row>
        <Row className="form-adjust">
          <Form.Group as={Col} controlId="formStock">
            <Form.Label>Category</Form.Label>
            <Form.Control
              type="text"
              placeholder=""
              disabled
              value={category}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formStock">
            <Form.Label>Unit</Form.Label>
            <Form.Control type="text" placeholder="" disabled value={unit} />
          </Form.Group>

          <Form.Group as={Col} controlId="formStock">
            {/* <Form.Label>Rack No:</Form.Label> */}
            {/* <Form.Control type="text" placeholder="" value={rackno} /> */}
            <MDBInput
              label="Rack No:"
              placeholder=""
              type="text"
              value={rackno}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formStock">
            {/* <Form.Label>Row No:</Form.Label>
            <Form.Control type="text" placeholder="" value={rowno} /> */}
            <MDBInput
              label="Row No:"
              placeholder=""
              type="text"
              value={rowno}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formStock">
            <InputGroup>
              <Button className="btn-adjust" variant="primary" type="submit">
                <i className="fas fa-edit"></i> Update
              </Button>
            </InputGroup>
          </Form.Group>
        </Row>
        <Row className="form-adjust">
          <Button
            style={{ margin: 15 }}
            variant="outline-primary"
            type="submit"
          >
            <i className="fas fa-clipboard-list"></i> Print Below List
          </Button>
          <Button
            style={{ margin: 15 }}
            variant="outline-primary"
            type="submit"
          >
            <i className="fas fa-print"></i> Print All Inventory Stock Card
          </Button>
        </Row>
        <Row className="form-adjust">
          <Form.Group as={Col} controlId="formStock">
            <SelectedList todos={optionList} clickDelete={deleteItems} />
          </Form.Group>
        </Row>
      </Form>
    </div>
  );
};

export default StockCard;
