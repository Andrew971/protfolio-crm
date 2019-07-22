import { createContext } from 'react';

function isEmpty(object) {

  for (var key in object) {
    return key
      ? false
      : true;
    // console.log(key?true:false)   console.log(object.hasOwnProperty(key)) return
    // object.hasOwnProperty(key)?true:false;
  }
  return true
}

export function compact(obj) {
  return Object.keys(obj).reduce(
    (acc, key) => {
      if (obj[key] !== undefined) {
        acc[key] = obj[key];
      }

      return acc;
    },
    {} 
  );
}

export function objToKey(obj) {
  if (!isEmpty(obj)) {
    return obj;
  }
  const sortedObj = Object.keys(obj)
    .sort()
    .reduce((result, key) => {
      result[key] = objToKey(obj[key]);
      return result;
    }, {});
  return JSON.stringify(sortedObj);
}

export function isPromiseLike(value) {
  return value != null && typeof value === 'function';
}



export function createSSRManager() {
  const promiseSet = new Set();

  return {
    hasPromises: () => promiseSet.size > 0,

    register: promise => {
      promiseSet.add(promise);
    },

    consumeAndAwaitPromises: () => {
      const promises = Array.from(promiseSet);

      promiseSet.clear();

      return Promise.all(promises);
    },
  };
}

export const SSRContext = createContext(null);


export function actHack(callback) {
  callback();
}