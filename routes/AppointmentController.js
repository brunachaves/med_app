import  express  from "express";
import  AppointmentService  from "../services/AppointmentServices.js";

let router = express.Router();

router.get('/appoitments', async(req, res) => {
    try {
        const appoitments = AppointmentService.getAllAppointments();
        res.send(appoitments);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});

router.get('/getAppoitments/:id', async(req, res) => {
    const {id} = req.params;
    try {
        const appoitment = AppointmentService.getAppointment(id);
        res.send(appoitment);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});

router.post('/postAppoitments', async(req, res) => {
    const {date, doctorId, pacientId} = req.body;
    try {
        const appoitment = AppointmentService.saveAppointment({date, doctorId, pacientId});
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
        const appoitment = AppointmentService.updateAppointment(id, {date, doctorId, pacientId});
        res.send(appoitment);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});

router.delete('/appoitments/:id', async(req, res) => {
    const {id} = req.params;
    try {
        const appoitment = AppointmentService.deleteAppointment(id);
        res.send(appoitment);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});

export default router;