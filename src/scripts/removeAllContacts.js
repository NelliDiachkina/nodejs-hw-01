import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const removeAllContacts = async () => {
  try {
    await fs.writeFile(PATH_DB, JSON.stringify([]), 'utf-8');
  } catch (error) {
    console.error(error);
  }
};

removeAllContacts();
