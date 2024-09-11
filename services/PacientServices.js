import  PacientRepository  from "../repositories/PacientRepository";

const getAllPacients = async() => {
    return PacientRepository.getAllPacients();
}

const getPacient = async(id) => {
    return PacientRepository.getPacients(id);
}

const savePacient = async({name, bithdate, email, phone}) => {
    return PacientRepository.savePacient({name, bithdate, email, phone});
}

const updatePacient = async(id, {name, bithdate, email, phone}) => {
    return PacientRepository.updatePacient(id, {name, bithdate, email, phone});
}

const deletePacient = async(id) => {
    return PacientRepository.deletePacient(id);
}

const pacientService = {
    getAllPacients,
    getPacient,
    savePacient,
    updatePacient,
    deletePacient
}

export default pacientService;