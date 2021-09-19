/*
For some reason VSCode tends to complain it cannot find 
the file ../../data/diagnoseData.json from the service 
despite the file existing. That is a bug in the editor, 
and goes away when the editor is restarted.
*/

import diagnoseData from '../../data/diagnoses.json';

const getEntries = () => {
  return diagnoseData;
};

const addEntry = () => {
  return null;
};

export default {
  getEntries,
  addEntry
};