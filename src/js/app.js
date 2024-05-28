import read from './Modules/reader';
import json from './Modules/parser';

export default async function getData(setError) {
  const data = await read(setError);
  const value = await json(data);

  return value;
}
