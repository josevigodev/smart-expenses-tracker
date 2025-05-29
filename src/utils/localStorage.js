export const updateLocalStorage = (key, value) => {
  try {
    window.localStorage.setItem(key, JSON.stringify(value))
  } catch (error) {
    console.log('Error saving to localStorage', error)
  }
}

export const getLocalStorage = key => {
  try {
    const stored = window.localStorage.getItem(key);
    if (stored) return JSON.parse(stored)
  } catch (error) {
    console.log(error)
    window.localStorage.removeItem(key)
  }
}