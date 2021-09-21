import { NewPatient, Gender } from './types';

//String tyyppien tarkastus
const isString = (property: unknown): property is string => {
    return typeof property === 'string' || property instanceof String;
};
//String tyyppien parseri
const parseStringProperty = (property: unknown): string => {
    if (!property || !isString(property)) {
        throw new Error('Incorrect or missing property');
    }
    return property;
};

//Tarkastetaan, että "gender" -on "Gender" -tyyppinen. Gender on määritelty
//"types.ts" -filessä "Enum":na 
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const isGender = (param: any): param is Gender => {
    return Object.values(Gender).includes(param);
};
//Gender:n parseri
const parseGender = (gender: unknown): Gender => {
    if (!gender || !isGender(gender)) {
        throw new Error('Incorrect or missing gender: ' + gender);
    }
    return gender;
};

type Fields = { name: unknown, dateOfBirth: unknown, ssn: unknown, gender: unknown, occupation: unknown };

const toNewPatientEntry = ({ name, dateOfBirth, ssn, gender, occupation }: Fields): NewPatient => {
    //Uuden potilaan propertyjen tarkastus, ennen uuden potilaan luomista
    const newEntry: NewPatient = {
        name: parseStringProperty(name),
        dateOfBirth: parseStringProperty(dateOfBirth),
        ssn: parseStringProperty(ssn),
        gender: parseGender(gender),
        occupation: parseStringProperty(occupation)
    };

    return newEntry;
};

export default toNewPatientEntry;


/*
const parseDateOfBirth = (dateOfBirth: unknown): string => {
    if (!dateOfBirth || !isString(dateOfBirth)) {
        throw new Error('Incorrect or missing dateOfBirth');
    }

    return dateOfBirth;
};

const parseSsn = (ssn: unknown): string => {
    if (!ssn || !isString(ssn)) {
        throw new Error('Incorrect or missing ssn');
    }

    return ssn;
};

const parseGender = (gender: unknown): string => {
    if (!gender || !isString(gender)) {
        throw new Error('Incorrect or missing gender');
    }

    return gender;
};

const parseOccupation = (occupation: unknown): string => {
    if (!occupation || !isString(occupation)) {
        throw new Error('Incorrect or missing occupation');
    }

    return occupation;
};
*/