import * as fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const countContacts = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf8');
    const contacts = data.length > 0 ? JSON.parse(data) : [];
    return contacts.length;
  } catch (error) {
    console.error(error);
  }
};

console.log(await countContacts());
