import { FilterQuery, UpdateQuery } from 'mongoose';

export function convertNested<T>(
  nested: Record<string, any>
): UpdateQuery<T> | FilterQuery<T> | Record<string, any> {
  const result: Record<string, any> = {};
  for (const key in nested) {
    if (typeof nested[key] === 'object') {
      const sub = convertNested(nested[key]);
      for (const subKey in sub) {
        result[`${key}.${subKey}`] = sub[subKey];
      }
    } else {
      result[key] = nested[key];
    }
  }

  return result;
}
const nestedQuery = {
  fullName: {
    name: 'Yusuf',
    surname: 'Eren',
  },
  externalId: 1,
  address: {
    city: 'Istanbul',
  },
};

console.log(convertNested(nestedQuery));
