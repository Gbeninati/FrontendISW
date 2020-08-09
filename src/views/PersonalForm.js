import React, { Component } from "react";
import {
  Container,
  Row,
} from "shards-react";

import PageTitle from "../components/common/PageTitle";
import Personal from "../components/forms/Personal";
import personalService from '../services/personal.service';

class AddNewPost extends Component {

  constructor(props) {
    super(props);

    this.handlePersonalSubmit = this.handlePersonalSubmit.bind(this);
  }

  handlePersonalSubmit(data) {
    personalService.create(data)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  }

  render() {

    return (
      <Container fluid className="main-content-container px-4 pb-4">
        {/* Page Header */}
        <Row noGutters className="page-header py-4">
          <PageTitle sm="4" title="Agregar Personal" subtitle="" className="text-sm-left" />
        </Row>

        <Personal
          onSubmit={this.handlePersonalSubmit}
        ></Personal>
      </Container>
    );
  }
};

export default AddNewPost;
