import React, { Component } from "react";
import {
  Container,
  Row,
} from "shards-react";

import PageTitle from "../components/common/PageTitle";
import Liberacion from "../components/forms/Liberacion";
import pabellonService from '../services/pabellon.service';
import pabellonasgService from '../services/pabellonasg.service';
import paciente2Service from '../services/paciente2.service';

class AddNewPost extends Component {

  constructor(props) {
    super(props);

    this.handleLiberacionSubmit = this.handleLiberacionSubmit.bind(this);
  }

  handleLiberacionSubmit(data) {
    pabellonService.getById(data)
      .then((response) => {
        paciente2Service.actualizarEstado(response.data.paciente,1)
          .then((response) => console.log("Paciente liberado"))
          .catch((error) => console.log(error));
        pabellonService.update(data)
          .then((response) => console.log(response))
          .catch((error) => console.log(error));

        pabellonasgService.borrarAsg(data.id)
          .then((response) => console.log(response))
          .catch((error) => console.log(error));
      }
    );


  }

  render() {

    return (
      <Container fluid className="main-content-container px-4 pb-4">
        {/* Page Header */}
        <Row noGutters className="page-header py-4">
          <PageTitle sm="4" title="Liberar Pabellon" subtitle="" className="text-sm-left" />
        </Row>

        <Liberacion
          onSubmit={this.handleLiberacionSubmit}
        ></Liberacion>
      </Container>
    );
  }
};

export default AddNewPost;
