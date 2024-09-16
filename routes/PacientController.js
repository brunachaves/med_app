import  express  from "express";
import  PacientServices  from "../services/PacientServices.js";

let router = express.Router();

router.get('/pacients', async(req, res) => {
    try {
        const pacients = await PacientServices.getAllPacients();
        res.send(pacients);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});

router.get('/getPacient/:id', async (req, res) => {
    const {id} = req.params;
    try {
        const pacient = await PacientServices.getPacient(id);
        res.send(pacient);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});

router.post('/postPacient', async (req, res) => {
    const {name, bithdate, email, phone} = req.body;
    try {
        const pacient = await PacientServices.savePacient({name, bithdate, email, phone});
        res.send(pacient);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});

router.put('pacient/:id', async (req, res) => {
    const {id} = req.params;
    const {name, bithdate, email, phone} = req.body;
    try {
        const pacient = await PacientServices.updatePacient(id, {name, bithdate, email, phone});
        res.send(pacient);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});

router.delete('/pacient/:id', async (req, res) => {
    const {id} = req.params;
    try {
        const pacient = await PacientServices.deletePacient(id);
        res.send(pacient);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});

export default router;