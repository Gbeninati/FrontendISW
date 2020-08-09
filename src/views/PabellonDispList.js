import React, { Component } from 'react';
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
} from "shards-react";
import pabellonService from '../services/pabellon.service';

import PageTitle from "../components/common/PageTitle";

class PabellonDispList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      pabellones: [],
    }
  }

  componentDidMount() {
    pabellonService.getByState({'estado':'Disponible'}).then((response) => {
      this.setState({
        pabellones: response.status === 200 ? response.data : [],
      })
    });
  }

  render() {
    const { pabellones } = this.state;

    return (
      <Container fluid className="main-content-container px-4">
        {/* Page Header */}
        <Row noGutters className="page-header py-4">
          <PageTitle sm="4" title="Lista de Pabellones Disponibles" subtitle="" className="text-sm-left" />
        </Row>

        <Row>
          {pabellones.map((pabellon, index) => {
            return (
              <Col lg="2" key={pabellon.id}>
                <Card small className="card-post mb-4">
                  <CardBody>
                    <p className="card-text text-muted">Id Pabellon: {pabellon.id}</p>
                    <p className="card-text text-muted">Equipamiento: {pabellon.equipamiento}</p>
                    <p className="card-text text-muted">Estado: {pabellon.estado}</p>
                  </CardBody>
                </Card>
              </Col>
            )
          })}
        </Row>
      </Container>
    );
  }

}

export default PabellonDispList;
