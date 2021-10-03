/* eslint-disable @typescript-eslint/no-unsafe-assignment */
//router potilaille
import express from 'express';
import patentiorService from '../services/patentiorService';
import toNewPatientEntry from '../utils';

const router = express.Router();

router.get('/', (_req, res) => {
    res.send(patentiorService.getPatientEntries());
});

router.get('/:id', (req, res) => {
    console.log('TULEEKO TÄNNE', req.params);
    const patient = patentiorService.findPatientById(req.params.id);

    if (patient) {
        res.send(patient);
    } else {
        res.sendStatus(404);
    }
});
//Uuden potilaan luomisen routeri
router.post('/', (req, res) => {
    try {
        console.log('Tuliko postiin');
        const newPatient = toNewPatientEntry(req.body);
        const addedPatient = patentiorService.addPatient(newPatient);
        res.json(addedPatient);
    } catch (e) {
        console.log('tuliko erroriin');
        console.log(res.status(400));
        //res.status(400).send(e.message);
    }

    /*
    const { name, dateOfBirth, ssn, gender, occupation } = req.body;
    const newPatient = patentiorService.addPatient({
        name,
        dateOfBirth,
        ssn,
        gender,
        occupation
    });
    res.send(newPatient);
    */
});

export default router;