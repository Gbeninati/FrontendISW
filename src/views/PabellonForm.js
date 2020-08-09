import React, { Component } from "react";
import {
  Container,
  Row,
} from "shards-react";

import PageTitle from "../components/common/PageTitle";
import Pabellon from "../components/forms/Pabellon";
import pabellonService from '../services/pabellon.service';

class AddNewPost extends Component {

  constructor(props) {
    super(props);

    this.handlePabellonSubmit = this.handlePabellonSubmit.bind(this);
  }

  handlePabellonSubmit(data) {
    pabellonService.create(data)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  }

  render() {

    return (
      <Container fluid className="main-content-container px-4 pb-4">
        {/* Page Header */}
        <Row noGutters className="page-header py-4">
          <PageTitle sm="4" title="Agregar Pabellon" subtitle="" className="text-sm-left" />
        </Row>

        <Pabellon
          onSubmit={this.handlePabellonSubmit}
        ></Pabellon>
      </Container>
    );
  }
};

export default AddNewPost;
