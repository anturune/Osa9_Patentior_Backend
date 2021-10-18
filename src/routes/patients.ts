/* eslint-disable @typescript-eslint/no-unsafe-assignment */
//router potilaille
import express from 'express';
import patentiorService from '../services/patentiorService';
//import toNewPatientEntry from '../utils';

const router = express.Router();

router.get('/', (_req, res) => {
    res.send(patentiorService.getPatientEntries());
});
//Potilaan hakemiseen id:n perusteella
router.get('/:id', (req, res) => {
    //console.log('TULEEKO TÄNNE', req.params);
    const patient = patentiorService.findPatientById(req.params.id);
    //console.log('PATIENTTI', patient?.name);
    if (patient) {
        res.send(patient);
    } else {
        res.sendStatus(404);
    }
});
//Entryn lisääminen potilaalle routteri
router.post('/:id/entries', (req, res) => {
    try {
        //console.log('1) Tuliko entries routerille ja add postiin');
        //Etsitään ID:n perusteella potilas
        const patient = patentiorService.findPatientById(req.params.id);
        //lisätään potilaalle entry
        const newEntry = patentiorService.addEntry(req.body, patient);
        //console.log('PATIENT', patient?.entries);
        //res.json(addedPatient);
        res.send(newEntry);
    } catch (e) {
        //console.log('tuliko erroriin add entriessissä');
        console.log(res.status(400));
        //res.status(400).send(e.message);
    }
});

//Uuden potilaan luomisen routeri
router.post('/', (req, res) => {
    try {
        console.log('Tuliko postiin');
        //const newPatient = toNewPatientEntry(req.body);
        //const addedPatient = patentiorService.addPatient(newPatient);
        const addedPatient = patentiorService.addPatient(req.body);
        res.json(addedPatient);
    } catch (e) {
        console.log('tuliko erroriin');
        console.log(res.status(400));
        //res.status(400).send(e.message);
    }

});


export default router;