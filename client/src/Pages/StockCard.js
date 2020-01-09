import React, { Fragment } from "react";
import SearchSelect from "../components/SearchSelect";
import { Row, Col, Container, Form, Button, InputGroup } from "react-bootstrap";
import FontAwesomeIcon from "react-fontawesome";

const StockCard = () => {
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
            <SearchSelect />
          </Form.Group>
        </Row>
        <Row className="form-adjust">
          <Form.Group as={Col} controlId="formStock">
            <Form.Label>Category</Form.Label>
            <Form.Control type="email" placeholder="" disabled />
          </Form.Group>

          <Form.Group as={Col} controlId="formStock">
            <Form.Label>Unit</Form.Label>
            <Form.Control type="password" placeholder="" disabled />
          </Form.Group>

          <Form.Group as={Col} controlId="formStock">
            <Form.Label>Rack No:</Form.Label>
            <Form.Control type="password" placeholder="" />
          </Form.Group>

          <Form.Group as={Col} controlId="formStock">
            <Form.Label>Row No:</Form.Label>
            <Form.Control type="password" placeholder="" />
          </Form.Group>

          <Form.Group as={Col} controlId="formStock">
            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Text>
                  <FontAwesomeIcon
                    className="super-crazy-colors"
                    name="rocket"
                    size="2x"
                    spin
                    style={{ textShadow: "0 1px 0 rgba(0, 0, 0, 0.1)" }}
                  />
                </InputGroup.Text>
              </InputGroup.Prepend>
              <Button className="btn-adjust" variant="primary" type="submit">
                Update
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
            Print Below List
          </Button>
          <Button
            style={{ margin: 15 }}
            variant="outline-primary"
            type="submit"
          >
            Print All Inventory Stock Card
          </Button>
        </Row>
      </Form>
    </div>
  );
};

export default StockCard;
