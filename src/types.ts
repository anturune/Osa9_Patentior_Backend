export interface Diagnose {
    code: string,
    name: string,
    latin?: string
}
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Entry {
   
}
export interface Patient {
    id: string,
    name: string,
    dateOfBirth: string,
    ssn: string,
    gender: Gender,
    occupation: string,
    entries?: Entry[]
}
//Jos halutaan palauttaa vain halutut kentät, on kaksi vaihtoehtoa
//"Omit"-jolle kerrotaan mikä field jää pois tai "Pick", että mitkä
//kentät poimitaan mukaan
//export type PatientDetails = Omit<Patient, 'ssn'>;
export type PatientDetails = Omit<Patient, 'ssn' | 'entries'>;
//export type PatientDetails = Pick<Patient, 'id' | 'name' | 'dateOfBirth'>;

//Uuden potilaan luonti. Jätetään id pois, jotta voidaan luoda uusi
export type NewPatient = Omit<Patient, 'id'>;

//Käytetään enum:a, koska nämä ovat muuttumattomia arvoja
//ja voidaan hödyntää sellaisenaan
//HUOM! Enum:n käyttö vaatii datan jalostamista eikä voida
//enää ottaa dataa vastaan ".json" -muotoisena
export enum Gender {
    Male = 'male',
    Female = 'female',
    Other = 'other'
}

