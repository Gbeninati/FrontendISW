import React, { Component } from "react";
import {
  Container,
  Row,
} from "shards-react";

import PageTitle from "../components/common/PageTitle";
import Paciente from "../components/forms/Paciente";
import pacienteService from '../services/paciente.service';


class AddNewPost extends Component {

  constructor(props) {
    super(props);

    this.handlePacienteSubmit = this.handlePacienteSubmit.bind(this);
  }

  handlePacienteSubmit(data) {
    pacienteService.create(data)
      .then((response) => console.log(response))
      .catch((error) => console.log(error.response.data));
  }

  render() {

    return (
      <Container fluid className="main-content-container px-4 pb-4">
        {/* Page Header */}
        <Row noGutters className="page-header py-4">
          <PageTitle sm="4" title="Agregar Paciente" subtitle="" className="text-sm-left" />
        </Row>

        <Paciente
          onSubmit={this.handlePacienteSubmit}
        ></Paciente>
      </Container>
    );
  }
};

export default AddNewPost;
