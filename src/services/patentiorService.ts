/*
For some reason VSCode tends to complain it cannot find 
the file ../../data/diagnoseData.json from the service 
despite the file existing. That is a bug in the editor, 
and goes away when the editor is restarted.
*/
//Otetaan käyttöön id-generaattori
import { v4 as uuidv4 } from 'uuid';

//Diagnoosidata käyttöön
import diagnoseData from '../../data/diagnoses';
//Potilasdata käyttöön
import patientData from '../../data/patients';
//Tyypitykset käyttöön "types.ts" -filestä
//import { Diagnose, Patient } from '../types';
import { Diagnosis, PatientDetails, Patient, NewPatient, EntryWithoutId,Entry } from '../types';

//Diagnoosit "DiagnoseEntry" tyyppisinä ja Arrayssa
const diagnoses: Array<Diagnosis> = diagnoseData;
//Potilaat "PatientEntry" tyyppisinä ja Arrayssa
const patients: Array<Patient> = patientData;

//Funktio, joka palauttaa kaikki diagnoosit
const getDiagnoseEntries = (): Array<Diagnosis> => {
  //console.log('DIAGNOSES', diagnoses);
  return diagnoses;
};
//Funktio, joka palauttaa kaikki potilaat ilman "ssn"-propertya. 
//Siksi "PatientDetails" "types.ts" -filessä ja "map" -funktiota käytetään.
//Vaikka "types.ts" -filessä on oma "PatientDetails" -tyyppi, niin silti
//joudutaan map:lla filteröimään ei halutut kentät pois.
const getPatientEntries = (): Array<PatientDetails> => {
  return patients.map(({ id, name, dateOfBirth, gender, occupation }) => ({
    id,
    name,
    dateOfBirth,
    gender,
    occupation
  }));
};
//Tässä vois hyödyntää haussa "getPatientEntries", koska "getPatientEntries"
//palauttama Array ei sisällä "ssn" -kenttää, koska sitä ei haluta palauttaa
//HUOM! täss voidaan käyttää vaihtoehtona "undefined" niille hauille, joita ei ole
//olemassa. Esim. jos ID on väärin kirjoitettu, palautetaan vastauksena "undefined"
const findPatientById = (id: string): Patient | undefined => {
  const patientById = patients.find(patient => patient.id === id);
  console.log('2) tuliko patient findbyid servicelle', patientById);
  return patientById;
};

//Uuden potilaan luominen. Tuodaan sisään "NewPatient" ja palautetaan "Patient"
//Ero näillä on että "NewPatient" ei sisällä ID:tä ja se luodaan tässä funktiossa.
const addPatient = (entry: NewPatient): Patient => {
  const newPatient = {
    //Potilaalle ID-numero lisättynä request body "...entry":yyn
    id: uuidv4(),
    ...entry,
    entries: []
  };
  console.log('Tuleeko addPatienttiin', entry);
  //Viedään patients array:yyn
  patients.push(newPatient);
  return newPatient;
};

const addEntry = (entry: EntryWithoutId, patient: Patient | undefined): Entry | undefined => {
  //const patientById = patients.find(patient => patient.id === id);

  const newEntry = {
    id: uuidv4(),
    ...entry
  };
  if (patient != undefined) {
    patient.entries.push(newEntry);
  }



  console.log('NEW ENTRY', newEntry);
  console.log('PATIENTIN ENTRYT ADD ENTRYSSA', patient?.entries);
  console.log('PATIENTTI ADD ENTRYSSA', patient);

  return newEntry;
};
/*
const addEntry = () => {

  return null;
};
*/
export default {
  getDiagnoseEntries,
  getPatientEntries,
  addEntry,
  addPatient,
  findPatientById
};