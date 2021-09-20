export interface Diagnose {
    code: string,
    name: string,
    latin?: string
}

export interface Patient {
    id: string,
    name: string,
    dateOfBirth: string,
    ssn: string,
    gender: string,
    occupation: string
}
//Jos halutaan palauttaa vain halutut kentät, on kaksi vaihtoehtoa
//"Omit"-jolle kerrotaan mikä field jää pois tai "Pick", että mitkä
//kentät poimitaan mukaan
export type PatientDetails = Omit<Patient, 'ssn'>;
//export type PatientDetails = Pick<Patient, 'id' | 'name' | 'dateOfBirth'>;

//Uuden potilaan luonti. Jätetään id pois, jotta voidaan luoda uusi
export type NewPatient = Omit<Patient, 'id'>;

