import { express } from "express";
import { DoctorServices } from "../services/DoctorServices";

let router = express.Router();

router.get('/doctors', async(req, res) => {
    try {
        const doctors = DoctorServices.getAllDoctors();
        res.send(doctors);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});

router.get('/getdoctors/:id', async(req, res) => {
    const {id} = req.params;
    try {
        const doctor = DoctorServices.getDoctor(id);
        res.send(doctor);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});

router.post('/postdoctors', async(req, res) => {
    const {name, login, password, medicalSpecialty, medicalRegistration, email, phone} = req.body;
    try {
        const doctor = DoctorServices.saveDoctor({name, login, password, medicalSpecialty, medicalRegistration, email, phone});
        res.send(doctor);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});

router.put('/doctors/:id', async(req, res) => {
    const {id} = req.params;
    const {name, login, password, medicalSpecialty, medicalRegistration, email, phone} = req.body;
    try {
        const doctor = DoctorServices.updateDoctor(id, {name, login, password, medicalSpecialty, medicalRegistration, email, phone});
        res.send(doctor);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});

router.delete('/doctors/:id', async(req, res) => {
    const {id} = req.params;
    try {
        const doctor = DoctorServices.deleteDoctor(id);
        res.send(doctor);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});

export default router();