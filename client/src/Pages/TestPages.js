import React, { Fragment } from "react";
import { Row, Col, Button, ButtonToolbar, Container } from "react-bootstrap";
import SearchSelect from "../components/SearchSelect";

import FormNew from "../components/FormSample";
import FormValidate from "../components/FormValidate";

const TestPages = () => {
  return (
    <div>
      <Fragment>
        <SearchSelect />
      </Fragment>
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
