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
import paciente2Service from '../services/paciente2.service';

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
            paciente2Service.obtenerEstadoDiagnostico(1,1)
              .then((response2) => {
                if(response2.data.res.find(e=>e == data.paciente)){
                  console.log("Paciente Valido");
                  pabellonService.update({'id':data.id,'paciente':data.paciente,'hora':data.hora,'estado':data.estado})
                    .then((response) => console.log(response))
                    .catch((error) => console.log(error));
                  pabellonasgService.asignar({'pabellon':data.id,'personal':data.personal})
                    .then((response) => console.log(response))
                    .catch((error) => console.log(error));
                  paciente2Service.actualizarEstado(data.paciente,3)
                    .then((response) => console.log(response))
                    .catch((error) => console.log(error));
                  historialpacienteService.create({'pabellon':data.id,'paciente':data.paciente,'hora':data.hora})
                    .then((response) => console.log(response))
                    .catch((error) => console.log(error));
                }
                else{
                  console.log("Paciente Invalido");
                }

              }
              );
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
