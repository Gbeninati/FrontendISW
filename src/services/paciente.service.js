import { api } from '../helpers';

function getAll() {
    return api.get(`/DatosPaciente`);
}

function getOne(data) {
    return api.post(`/Datos1Paciente/`,data);
}

function getByRut(data) {
    return api.post(`/DatosPacienteRut/`,data);
}

function create(data) {
    return api.post(`/DatosPaciente/`, data);
}

const pacienteService = {
    getAll,
    getOne,
    getByRut,
    create,

};

export default pacienteService;
