import {name} from '../../package.json'

let constants = {
  role: 'ROLE',
  user: 'USER',
}

Object.keys(constants).forEach((constant) => {
  constants[constant] = `${name}_${constants[constant]}`
})

export const addToLocalStorage = (key = 'DEFAULT_KEY', value = '') => localStorage.setItem(key, JSON.stringify(value))
export const getFromLocalStorage = (key = 'DEFAULT_KEY') => JSON.parse(localStorage.getItem(key))
export const removeFromLocalStorage = (key = 'DEFAULT_KEY') => localStorage.removeItem(key)

export const localStorageConstants = constants

