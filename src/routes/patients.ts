//router potilaille
import express from 'express';
import patentiorService from '../services/patentiorService';

const router = express.Router();

router.get('/', (_req, res) => {
    res.send(patentiorService.getPatientEntries());
});

router.post('/', (_req, res) => {
    res.send('Saving a diary!');
});

export default router;