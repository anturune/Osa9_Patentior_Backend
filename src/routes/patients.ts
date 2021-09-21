/* eslint-disable @typescript-eslint/no-unsafe-assignment */
//router potilaille
import express from 'express';
import patentiorService from '../services/patentiorService';
import toNewPatientEntry from '../utils';

const router = express.Router();

router.get('/', (_req, res) => {
    res.send(patentiorService.getPatientEntries());
});
//Uuden potilaan luomisen routeri
router.post('/', (req, res) => {

    try {
        const newPatient = toNewPatientEntry(req.body);

        const addedPatient = patentiorService.addPatient(newPatient);
        res.json(addedPatient);
    } catch (e) {
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