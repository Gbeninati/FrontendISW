import { api } from '../helpers';

function getAll() {
    return api.get(`/DispHistorial/`);
}

function getByPaciente(paciente) {
    return api.get(`/HistorialPaciente?paciente=${paciente}`);
}


function create(data) {
    return api.post(`/DatosHistorial/`, data);
}

const historialpacienteService = {
    getAll,
    getByPaciente,
    create
};

export default historialpacienteService;
