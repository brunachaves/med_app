import { express } from "express";
import { appointmentServices } from "../services/AppointmentServices";

let router = express.Router();

router.get('/appoitments', async(req, res) => {
    try {
        const appoitments = appointmentService.getAllAppointments();
        res.send(appoitments);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});

router.get('/getAppoitments/:id', async(req, res) => {
    const {id} = req.params;
    try {
        const appoitment = appointmentService.getAppointment(id);
        res.send(appoitment);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});

router.post('/postAppoitments', async(req, res) => {
    const {date, doctorId, pacientId} = req.body;
    try {
        const appoitment = appointmentService.saveAppointment({date, doctorId, pacientId});
        res.send(appoitment);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});

router.put('/appoitments/:id', async(req, res) => {
    const {id} = req.params;
    const {date, doctorId, pacientId} = req.body;
    try {
        const appoitment = appointmentService.updateAppointment(id, {date, doctorId, pacientId});
        res.send(appoitment);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});

router.delete('/appoitments/:id', async(req, res) => {
    const {id} = req.params;
    try {
        const appoitment = appointmentService.deleteAppointment(id);
        res.send(appoitment);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});

export default router();