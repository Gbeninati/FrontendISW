import { api } from '../helpers';

function getAll() {
    return api.get(`/DatosPersonal`);
}

function getById(data) {
    return api.post(`/Datos1Personal/`, data);
}

function update(data) {
    return api.put(`/DatosPersonal/`, data);
}

function create(data) {
    return api.post(`/DatosPersonal/`, data);
}

const personalService = {
  getAll,
  getById,
  update,
  create,
};

export default personalService;
