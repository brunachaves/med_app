import  express  from "express";
import  PrescriptionServices  from "../services/PrescriptionServices.js";
import prescription from "../models/Prescription.js";


let router = express.Router();

router.get('/prescription', async(req, res) => {
    try {
        const prescription = await PrescriptionServices.getAllPrescriptions();
        res.send(prescription);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});

router.get('/getPrescription/:id', async (req, res) => {
    const {id} = req.params;
    try {
        const prescription = PacientServices.getPrescription(id);
        res.send(prescription);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});

router.post('/postPrescription', async (req, res) => {
    const {date, appointmentId, medicine, dosage, instructions} = req.body;
    try {
        const prescription = await PrescriptionServices.savePrescription({date, appointmentId, medicine, dosage, instructions});
        res.send(prescription);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});

router.put('prescription/:id', async (req, res) => {
    const {id} = req.params;
    const {date, appointmentId, medicine, dosage, instructions} = req.body;
    try {
        const prescription = await PrescriptionServices.updatePrescription(id, {date, appointmentId, medicine, dosage, instructions});
        res.send(prescription);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});

router.delete('/prescription/:id', async (req, res) => {
    const {id} = req.params;
    try {
        const prescription = await PrescriptionServices.deletePrescription(id);
        res.send(prescription);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});

export default router;