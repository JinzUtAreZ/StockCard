import React, { useState, useEffect, useCallback } from "react";
import SearchSelect from "../components/SearchSelect";
import { Row, Col, Form, Button, InputGroup } from "react-bootstrap";
//import FontAwesomeIcon from "react-fontawesome";

import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon } from "mdbreact";

import { useSelector, useDispatch } from "react-redux";
import * as StockPrint from "../actions/StockPrintActions";

const StockCard = () => {
  const asset = useSelector(state => state.stock.assetlist);
  const dispatch = useDispatch();

  const [selected, setSelected] = useState(null);
  const [category, setCategory] = useState(null);
  const [unit, setUnit] = useState(null);
  const [rackno, setRackno] = useState(null);
  const [rowno, setRowno] = useState(null);

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

  const handleChange = selected => {
    setSelected(selected);
    console.log(`Option selected:`, selected);
    setCategory(selected.category);
    setUnit(selected.unit);
    setRackno(selected.rackNo);
    setRowno(selected.rowNo);
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
            <Form.Label>Rack No:</Form.Label>
            <Form.Control type="text" placeholder="" value={rackno} />
          </Form.Group>

          <Form.Group as={Col} controlId="formStock">
            <Form.Label>Row No:</Form.Label>
            <Form.Control type="text" placeholder="" value={rowno} />
          </Form.Group>

          <Form.Group as={Col} controlId="formStock">
            <InputGroup>
              <Button className="btn-adjust" variant="primary" type="submit">
                <i class="fas fa-edit"></i> Update
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
            <i class="fas fa-clipboard-list"></i> Print Below List
          </Button>
          <Button
            style={{ margin: 15 }}
            variant="outline-primary"
            type="submit"
          >
            <i class="fas fa-print"></i> Print All Inventory Stock Card
          </Button>
        </Row>
      </Form>
    </div>
  );
};

export default StockCard;
