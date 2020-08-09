import React, { Component } from 'react';
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
} from "shards-react";
import pabellonasgService from '../services/pabellonasg.service';

import PageTitle from "../components/common/PageTitle";

class PersonalAsgList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      asignados: [],
    }
  }

  componentDidMount() {
    pabellonasgService.getPersonal().then((response) => {
      this.setState({
        asignados: response.status === 200 ? response.data : [],
      })
    });
  }

  render() {
    const { asignados } = this.state;

    return (
      <Container fluid className="main-content-container px-4">
        {/* Page Header */}
        <Row noGutters className="page-header py-4">
          <PageTitle sm="4" title="Personal Asignado a Pabellones" subtitle="" className="text-sm-left" />
        </Row>

        <Row>
          {asignados.map((personal, index) => {
            return (
              <Col lg="2" key={personal.id}>
                <Card small className="card-post mb-4">
                  <CardBody>
                    <h5 className="card-title">Id Pabellon: {personal.pabellon}</h5>
                    <h5 className="card-title">Id Personal: {personal.personal}</h5>
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

export default PersonalAsgList;
