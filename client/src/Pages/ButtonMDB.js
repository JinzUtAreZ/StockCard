import React, { Fragment } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon } from "mdbreact";

const ButtonPage = () => {
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md="8">
          .col-md-8
          <MDBRow>
            <MDBCol md="6">.col-md-6</MDBCol>
            <MDBCol md="6">.col-md-6</MDBCol>
            <MDBBtn gradient="peach">Peach</MDBBtn>
            <MDBBtn gradient="purple">Purple</MDBBtn>
            <MDBBtn gradient="blue">Blue</MDBBtn>
            <MDBBtn gradient="aqua">
              Aqua <i class="fas fa-plus"></i>
            </MDBBtn>
          </MDBRow>
        </MDBCol>
        <MDBCol md="4">.col-md-4</MDBCol>
      </MDBRow>
      <MDBRow>
        <MDBBtn color="primary">
          <MDBIcon icon="magic" className="mr-1" /> Left
        </MDBBtn>
        <MDBBtn color="default">
          Right <MDBIcon icon="magic" className="ml-1" />
        </MDBBtn>
      </MDBRow>
    </MDBContainer>
  );
};

export default ButtonPage;
