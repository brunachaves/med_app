import  Pacient  from "../models/Pacient.js";

const getAllPacients = async () => {
    return await Pacient.find();
}

const getPacient = async (id) => {
    try {
        return await Pacient.findById(id);
    } catch (error) {
        throw new Error(error);
    }
}

const savePacient = async ({name, bithdate, email, phone}) => {
    try {
       const pacient = new Pacient ({name, bithdate, email, phone});
       return await pacient.save();
    } catch (error) {
        throw new Error(error);
    }
}

const updatePacient = async (id, {name, bithdate, email, phone}) => {
    try {
        return await Pacient.findByIdAndUpdate(id, {name, bithdate, email, phone}, {new: true});
    } catch (error) {
        throw new Error(error);
    }
}

const deletePacient = async (id) => {
    try {
        return await Pacient.findByIdAndUpdate(id);
    } catch (error) {
        throw new Error(error);
    }
}

const pacientRepository = {
    getAllPacients,
    getPacient,
    savePacient,
    updatePacient,
    deletePacient
}

export default pacientRepository;