/* eslint-disable @typescript-eslint/no-unsafe-assignment */
//router potilaille
import express from 'express';
import patentiorService from '../services/patentiorService';

const router = express.Router();

router.get('/', (_req, res) => {
    res.send(patentiorService.getPatientEntries());
});
//Uuden potilaan luomisen routeri
router.post('/', (req, res) => {
    const { name, dateOfBirth, ssn, gender, occupation } = req.body;
    const newPatient = patentiorService.addPatient({
        name,
        dateOfBirth,
        ssn,
        gender,
        occupation
    });
    res.send(newPatient);
});

export default router;