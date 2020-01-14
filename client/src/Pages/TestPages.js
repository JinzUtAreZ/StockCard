//import React, { Fragment, useEffect, useState, useCallback } from "react";
import React, { Fragment, useEffect, useCallback } from "react";

import { Row, Col, Button, ButtonToolbar, Container } from "react-bootstrap";
import SearchSelect from "../components/SearchSelect";

import { useSelector, useDispatch } from "react-redux";
import * as StockPrint from "../actions/StockPrintActions";

import FormNew from "../components/FormSample";
import FormValidate from "../components/FormValidate";

const TestPages = () => {
  const asset = useSelector(state => state.stock.assetlist);
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

  return (
    <div>
      {/* {console.log(asset)} */}
      <SearchSelect getList={asset} />
      {/* <p>{asset.length}</p>
      {asset.map((item, key) => (
        <li key={item.id}>{item.assetDesc}</li>
      ))} */}
      <Fragment>
        <ButtonToolbar>
          <Button variant="outline-primary">Primary</Button>
          <Button variant="outline-secondary">Secondary</Button>
          <Button variant="outline-success">Success</Button>
          <Button variant="outline-warning">Warning</Button>
          <Button variant="outline-danger">Danger</Button>
          <Button variant="outline-info">Info</Button>
          <Button variant="outline-light">Light</Button>
          <Button variant="outline-dark">Dark</Button>
        </ButtonToolbar>
      </Fragment>
      <Fragment>
        <Container>
          <Row>
            <Col sm={8}>sm=8</Col>
            <Col sm={4}>sm=4</Col>
          </Row>
          <Row>
            <Col sm>sm=true</Col>
            <Col sm>sm=true</Col>
            <Col sm>sm=true</Col>
          </Row>
        </Container>
      </Fragment>
      <Fragment>
        <FormNew />
        <FormValidate />
      </Fragment>
    </div>
  );
};

export default TestPages;
