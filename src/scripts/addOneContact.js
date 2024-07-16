import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

export const addOneContact = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    const contacts = JSON.parse(data);

    const newContact = createFakeContact();
    const updatedContacts = [...contacts, newContact];

    await fs.writeFile(PATH_DB, JSON.stringify(updatedContacts, null, 2));
  } catch (error) {
    console.error(error);
  }
};

addOneContact();
