import  express  from "express";
import  DoctorServices  from "../services/DoctorServices.js";

let router = express.Router();

router.get('/doctors', async(req, res) => {
    try {
        const doctors = await DoctorServices.getAllDoctors();
        res.send(doctors);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});

router.get('/getdDoctor/:id', async(req, res) => {
    const {id} = req.params;
    try {
        const doctor = await DoctorServices.getDoctor(id);
        res.send(doctor);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});

router.post('/postDoctor', async(req, res) => {
    const {name, login, password, medicalSpecialty, medicalRegistration, email, phone} = req.body;
    try {
        const doctor = await DoctorServices.saveDoctor({name, login, password, medicalSpecialty, medicalRegistration, email, phone});
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
        const doctor = await DoctorServices.updateDoctor(id, {name, login, password, medicalSpecialty, medicalRegistration, email, phone});
        res.send(doctor);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});

router.delete('/doctors/:id', async(req, res) => {
    const {id} = req.params;
    try {
        const doctor = await DoctorServices.deleteDoctor(id);
        res.send(doctor);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});

export default router;