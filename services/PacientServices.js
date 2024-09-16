import  PacientRepository  from "../repositories/PacientRepository.js";

const getAllPacients = async() => {
    return await PacientRepository.getAllPacients();
}

const getPacient = async(id) => {
    return await PacientRepository.getPacients(id);
}

const savePacient = async({name, bithdate, email, phone}) => {
    return await PacientRepository.savePacient({name, bithdate, email, phone});
}

const updatePacient = async(id, {name, bithdate, email, phone}) => {
    return await PacientRepository.updatePacient(id, {name, bithdate, email, phone});
}

const deletePacient = async(id) => {
    return await PacientRepository.deletePacient(id);
}

const pacientService = {
    getAllPacients,
    getPacient,
    savePacient,
    updatePacient,
    deletePacient
}

export default pacientService;