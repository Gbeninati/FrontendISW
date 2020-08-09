import { api } from '../helpers';

function getPersonal() {
    return api.get(`/GetPersonal/`);
}

function borrarAsg(pabellon) {
    return api.delete(`/DelAsignacion?pabellon=${pabellon}`);
}


function asignar(data) {
    return api.post(`/AsignarPabellon/`, data);
}

const pabellonasgService = {
    getPersonal,
    borrarAsg,
    asignar
};

export default pabellonasgService;
