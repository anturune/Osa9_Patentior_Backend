/*
For some reason VSCode tends to complain it cannot find 
the file ../../data/diagnoseData.json from the service 
despite the file existing. That is a bug in the editor, 
and goes away when the editor is restarted.
*/
//Diagnoosidata käyttöön
import diagnoseData from '../../data/diagnoses.json';
//Potilasdata käyttöön
import patientData from '../../data/patients.json';
//Tyypitykset käyttöön "types.ts" -filestä
//import { Diagnose, Patient } from '../types';
import { Diagnose, PatientDetails, Patient } from '../types';

//Diagnoosit "DiagnoseEntry" tyyppisinä ja Arrayssa
const diagnoses: Array<Diagnose> = diagnoseData;
//Potilaat "PatientEntry" tyyppisinä ja Arrayssa
const patients: Array<Patient> = patientData;

//const patients: Array<Patient> = patientData;

//Funktio, joka palauttaa kaikki diagnoosit
const getDiagnoseEntries = (): Array<Diagnose> => {
  //console.log('DIAGNOSES', diagnoses);
  return diagnoses;
};
//Funktio, joka palauttaa kaikki potilaat ilman "ssn"-propertya. 
//Siksi "PatientDetails" "types.ts" -filessä ja "map" -funktiota käytetään.
const getPatientEntries = (): Array<PatientDetails> => {
  return patients.map(({ id, name, dateOfBirth, gender, occupation }) => ({
    id,
    name, 
    dateOfBirth, 
    gender, 
    occupation
  }));
};
//console.log('Patients', patients);
//return patients;
//};

const addEntry = () => {
  return null;
};

export default {
  getDiagnoseEntries,
  getPatientEntries,
  addEntry
};