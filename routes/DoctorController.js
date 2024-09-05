import { express } from "express";
import { doctorServices } from "../services/DoctorServices";

let router = express.Router();

router.get('/doctors', async(req, res) => {
    try {
        const doctors = doctorServices.getAllDoctors();
        res.send(doctors);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});

router.get('/getdoctors/:id', async(req, res) => {
    const {id} = req.params;
    try {
        const doctor = doctorServices.getDoctor(id);
        res.send(doctor);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});

router.post('/postdoctors', async(req, res) => {
    const {name, login, password, medicalSpecialty, medicalRegistration, email, phone} = req.body;
    try {
        const doctor = doctorServices.saveDoctor({name, login, password, medicalSpecialty, medicalRegistration, email, phone});
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
        const doctor = doctorServices.updateDoctor(id, {name, login, password, medicalSpecialty, medicalRegistration, email, phone});
        res.send(doctor);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});

router.delete('/doctors/:id', async(req, res) => {
    const {id} = req.params;
    try {
        const doctor = doctorServices.updateDoctor(id);
        res.send(doctor);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});

export default router();