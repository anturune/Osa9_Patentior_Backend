import express from 'express';
//Otetaan "cors", jotta eri porteissa kommunikointi onnistuu
import cors from 'cors';
//Importatataan diagnoosirouter ja patientsrouter käyttöön
import diagnoseRouter from './routes/diagnoses';
import patientRouter from './routes/patients';

const app = express();
//Otetaan cors käyttöön, jotta porttia 3000 käyttävä frontti
//voi kommunikoida porttia 3001 käyttävän backendin kanssa
// eslint-disable-next-line @typescript-eslint/no-unsafe-call
app.use(cors());
app.use(express.json());


app.get('/api/ping', (_req, res) => {
    console.log('someone pinged here');
    res.send('pong');
});
//Ohjataa selaimessa annettu polku "diagnoses.ts" -fileen
//jossa määritelty router diagnooseille
app.use('/api/diagnoses', diagnoseRouter);
//Ohjataa selaimessa annettu polku "patients.ts" -fileen
//jossa määritelty router potilaille
app.use('/api/patients', patientRouter);
//Ohjaus routerille, jossa määritelty id-haulla toimiva router
app.use('/api/patients/:id', patientRouter);

//Ohjaus routerille, jossa määritelty id-haulla toimiva router
app.use('/api/patients/:id/entries', patientRouter);

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});