import React, { Component } from "react";
import {
  Container,
  Row,
} from "shards-react";

import PageTitle from "../components/common/PageTitle";
import Asignacion from "../components/forms/Asignacion";
import pabellonService from '../services/pabellon.service';
import pabellonasgService from '../services/pabellonasg.service';
import historialpacienteService from '../services/historialpaciente.service';

class AddNewPost extends Component {

  constructor(props) {
    super(props);

    this.handleAsignacionSubmit = this.handleAsignacionSubmit.bind(this);
  }

  handleAsignacionSubmit(data) {
    if(data.paciente === "" || data.personal === "" || data.hora === ""){
      console.log("Existen alguno campos invalidos");
    }
    else{
      pabellonService.valido({'id':data.id})
        .then((response) => {
          if(response.data){
            pabellonService.update({'id':data.id,'paciente':data.paciente,'hora':data.hora,'estado':data.estado})
              .then((response) => console.log(response))
              .catch((error) => console.log(error));
            pabellonasgService.asignar({'pabellon':data.id,'personal':data.personal})
              .then((response) => console.log(response))
              .catch((error) => console.log(error));
            historialpacienteService.create({'pabellon':data.id,'paciente':data.paciente,'hora':data.hora})
              .then((response) => console.log(response))
              .catch((error) => console.log(error));
          }
          else{
            console.log("Pabellon Invalido")
          }
        });
    }
  }

  render() {

    return (
      <Container fluid className="main-content-container px-4 pb-4">
        {/* Page Header */}
        <Row noGutters className="page-header py-4">
          <PageTitle sm="4" title="Asignar Pabellon" subtitle="" className="text-sm-left" />
        </Row>

        <Asignacion
          onSubmit={this.handleAsignacionSubmit}
        ></Asignacion>
      </Container>
    );
  }
};

export default AddNewPost;
