import { api } from '../helpers';

function getAll() {
    return api.get(`/DispPabellon`);
}

function getById(data) {
    return api.post(`/Disp1Pabellon/`, data);
}

function getByState(data) {
    return api.post(`/DispPabellonEst/`, data);
}

function update(data) {
    return api.put(`/AsignacionPabellon/`, data);
}

function create(data) {
    return api.post(`/DatosPabellon/`, data);
}

function valido(data) {
    return api.post(`/PabellonValido/`, data);
}

const pabellonService = {
    getAll,
    getById,
    getByState,
    update,
    create,
    valido,
};

export default pabellonService;
