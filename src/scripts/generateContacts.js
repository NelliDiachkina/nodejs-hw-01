import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

const generateContacts = async (number) => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    const contacts = JSON.parse(data);

    const newContacts = [];
    for (let i = 0; i < number; i += 1) {
      newContacts.push(createFakeContact());
    }

    const updatedContacts = [...contacts, ...newContacts];

    await fs.writeFile(PATH_DB, JSON.stringify(updatedContacts, null, 2));
  } catch (error) {
    console.error(error);
  }
};

generateContacts(5);
