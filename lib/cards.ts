import data from '@/data.json';
import type { Cards } from '@/types';

export async function getAllCards(): Promise<Cards> {
  // This is where you'd write code to fetch the list
  // of models from a database. We're mocking that with
  // our JSON array of data in links.json for now.
  return data;
}

// How do we get the Daily / Weekly / Monthly and apply to cards...
